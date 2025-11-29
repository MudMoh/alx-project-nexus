import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Job } from '../types/job';
import { fetchJobs } from '../utils/api';

interface Filters {
    category: string;
    location: string;
    experience: string;
    search: string;
}

interface JobContextType {
    jobs: Job[];
    filteredJobs: Job[];
    loading: boolean;
    error: string | null;
    filters: Filters;
    setFilters: (filters: Partial<Filters>) => void;
    refetchJobs: () => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

export const useJobContext = () => {
    const context = useContext(JobContext);
    if (!context) {
        throw new Error('useJobContext must be used within a JobProvider');
    }
    return context;
};

interface JobProviderProps {
    children: ReactNode;
}

export const JobProvider: React.FC<JobProviderProps> = ({ children }) => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [filters, setFiltersState] = useState<Filters>({
        category: '',
        location: '',
        experience: '',
        search: '',
    });

    const CACHE_KEY = 'jobs_cache';

    const fetchJobsData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            // Try cache first
            const cached = await AsyncStorage.getItem(CACHE_KEY);
            if (cached) {
                setJobs(JSON.parse(cached));
            }
            // Fetch fresh data
            const data = await fetchJobs();
            setJobs(data);
            await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(data));
        } catch (err) {
            if (!jobs.length) setError('No cached data available');
        } finally {
            setLoading(false);
        }
    }, [jobs.length]);

    useEffect(() => {
        fetchJobsData();
    }, [fetchJobsData]);

    const setFilters = useCallback((newFilters: Partial<Filters>) => {
        setFiltersState(prev => ({ ...prev, ...newFilters }));
    }, []);

    const refetchJobs = useCallback(() => {
        fetchJobsData();
    }, [fetchJobsData]);

    const filteredJobs = jobs.filter(job => {
        const matchesCategory = filters.category === '' || job.category === filters.category;
        const matchesLocation = filters.location === '' || job.location === filters.location;
        const matchesExperience = filters.experience === '' || job.experience === filters.experience;
        const matchesSearch = filters.search === '' ||
            job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            job.company.toLowerCase().includes(filters.search.toLowerCase());
        return matchesCategory && matchesLocation && matchesExperience && matchesSearch;
    });

    const value: JobContextType = {
        jobs,
        filteredJobs,
        loading,
        error,
        filters,
        setFilters,
        refetchJobs,
    };

    return <JobContext.Provider value={value}>{children}</JobContext.Provider>;
};
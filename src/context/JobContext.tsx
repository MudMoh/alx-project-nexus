import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Job } from '../types/job';
import { fetchJobs } from '../utils/api';

interface Filters {
    category: string;
    location: string;
    experience: string;
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
    });

    const fetchJobsData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const data = await fetchJobs();
            setJobs(data);
        } catch (err) {
            setError('Failed to fetch jobs');
        } finally {
            setLoading(false);
        }
    }, []);

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
        return (
            (filters.category === '' || job.category === filters.category) &&
            (filters.location === '' || job.location === filters.location) &&
            (filters.experience === '' || job.experience === filters.experience)
        );
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
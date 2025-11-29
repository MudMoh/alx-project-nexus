import React from 'react';
import { render, act, fireEvent } from '@testing-library/react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { JobProvider, useJobContext } from '../JobContext';
import { fetchJobs } from '../../utils/api';

jest.mock('../../utils/api');
const mockFetchJobs = fetchJobs as jest.MockedFunction<typeof fetchJobs>;

const mockJobs = [
    { id: 1, title: 'Job 1', company: 'Comp 1', location: 'NY', category: 'Tech', experience: 'Mid', description: 'Desc' },
    { id: 2, title: 'Job 2', company: 'Comp 2', location: 'SF', category: 'Finance', experience: 'Senior', description: 'Desc' },
];

const TestComponent = () => {
    const { jobs, filteredJobs, loading, setFilters } = useJobContext();
    return (
        <View>
            <Text testID="jobs">{JSON.stringify(jobs)}</Text>
            <Text testID="filteredJobs">{JSON.stringify(filteredJobs)}</Text>
            <Text testID="loading">{loading.toString()}</Text>
            <TouchableOpacity testID="setFilter" onPress={() => setFilters({ category: 'Tech' })}>
                <Text>Set Filter</Text>
            </TouchableOpacity>
        </View>
    );
};

describe('JobContext', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        mockFetchJobs.mockResolvedValue(mockJobs);
    });

    it('provides initial context values', async () => {
        const { getByTestId } = render(
            <JobProvider>
                <TestComponent />
            </JobProvider>
        );

        await act(async () => {
            // Wait for fetch
        });

        expect(mockFetchJobs).toHaveBeenCalled();
        expect(JSON.parse(getByTestId('jobs').children[0])).toEqual(mockJobs);
        expect(getByTestId('loading').children[0]).toBe('false');
    });

    it('filters jobs correctly', async () => {
        const { getByTestId } = render(
            <JobProvider>
                <TestComponent />
            </JobProvider>
        );

        await act(async () => { });

        fireEvent.press(getByTestId('setFilter'));

        const filtered = JSON.parse(getByTestId('filteredJobs').children[0]);
        expect(filtered).toHaveLength(1);
        expect(filtered[0].category).toBe('Tech');
    });

    it('throws error when useJobContext is used outside provider', () => {
        const TestHook = () => {
            useJobContext();
            return null;
        };

        expect(() => render(<TestHook />)).toThrow('useJobContext must be used within a JobProvider');
    });
});
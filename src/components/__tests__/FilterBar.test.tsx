import React from 'react';
import { render } from '@testing-library/react-native';
import FilterBar from '../FilterBar';
import { JobProvider } from '../../context/JobContext';

jest.mock('../../utils/api', () => ({
    fetchJobs: jest.fn().mockResolvedValue([]),
}));

describe('FilterBar', () => {
    it('renders filters correctly', () => {
        const { getByLabelText } = render(
            <JobProvider>
                <FilterBar />
            </JobProvider>
        );

        expect(getByLabelText('Filter by category')).toBeTruthy();
        expect(getByLabelText('Filter by location')).toBeTruthy();
        expect(getByLabelText('Filter by experience level')).toBeTruthy();
    });

    // Note: Testing Picker value change is complex in unit tests
    // In a real scenario, integration tests or e2e would be better
    // For now, we verify the component renders with correct accessibility labels
});
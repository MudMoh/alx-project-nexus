import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import JobCard from '../JobCard';
import { Job } from '../../types/job';

const mockNavigate = jest.fn();

const mockNavigation = {
    navigate: mockNavigate,
} as any;

const mockJob: Job = {
    id: 1,
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'New York',
    category: 'Tech',
    experience: 'Mid',
    description: 'Develop software.',
};

describe('JobCard', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders job props correctly', () => {
        const { getByText } = render(<JobCard job={mockJob} navigation={mockNavigation} />);

        expect(getByText('Software Engineer')).toBeTruthy();
        expect(getByText('Tech Corp')).toBeTruthy();
        expect(getByText('New York')).toBeTruthy();
    });

    it('navigates to JobDetails on press', () => {
        const { getByLabelText } = render(<JobCard job={mockJob} navigation={mockNavigation} />);

        const card = getByLabelText('Job: Software Engineer at Tech Corp');
        fireEvent.press(card);

        expect(mockNavigate).toHaveBeenCalledWith('JobDetails', { job: mockJob });
    });
});
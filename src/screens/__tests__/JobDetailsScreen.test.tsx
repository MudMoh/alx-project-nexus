import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import JobDetailsScreen from '../JobDetailsScreen';
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

const mockRoute = {
    params: { job: mockJob },
} as any;

describe('JobDetailsScreen', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('displays job details from params', () => {
        const { getByText } = render(<JobDetailsScreen navigation={mockNavigation} route={mockRoute} />);

        expect(getByText('Software Engineer')).toBeTruthy();
        expect(getByText('Tech Corp')).toBeTruthy();
        expect(getByText('New York')).toBeTruthy();
        expect(getByText('Category: Tech')).toBeTruthy();
        expect(getByText('Experience: Mid')).toBeTruthy();
        expect(getByText('Develop software.')).toBeTruthy();
    });

    it('navigates to Apply on button press', () => {
        const { getByText } = render(<JobDetailsScreen navigation={mockNavigation} route={mockRoute} />);

        const button = getByText('Apply Now');
        fireEvent.press(button);

        expect(mockNavigate).toHaveBeenCalledWith('Apply', { job: mockJob });
    });
});
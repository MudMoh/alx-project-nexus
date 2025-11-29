import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';
import ApplyScreen from '../ApplyScreen';
import { Job } from '../../types/job';

jest.spyOn(Alert, 'alert');

const mockNavigation = {} as any;

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

describe('ApplyScreen', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders ApplicationForm', () => {
        const { getByText } = render(<ApplyScreen navigation={mockNavigation} route={mockRoute} />);

        expect(getByText('Apply for Software Engineer at Tech Corp')).toBeTruthy();
        expect(getByText('Name')).toBeTruthy();
        expect(getByText('Email')).toBeTruthy();
        expect(getByText('Resume')).toBeTruthy();
    });

    it('submits with validation - success', async () => {
        const { getByText, getByLabelText } = render(<ApplyScreen navigation={mockNavigation} route={mockRoute} />);

        const nameInput = getByLabelText('Name input');
        const emailInput = getByLabelText('Email input');
        const resumeInput = getByLabelText('Resume input');
        const submitButton = getByText('Submit Application');

        fireEvent.changeText(nameInput, 'John Doe');
        fireEvent.changeText(emailInput, 'john@example.com');
        fireEvent.changeText(resumeInput, 'My resume text');
        fireEvent.press(submitButton);

        await waitFor(() => {
            expect(Alert.alert).toHaveBeenCalledWith('Success', 'Your application has been submitted successfully!');
        });
    });

    it('submits with validation - failure', () => {
        const { getByText } = render(<ApplyScreen navigation={mockNavigation} route={mockRoute} />);

        const submitButton = getByText('Submit Application');
        fireEvent.press(submitButton);

        expect(Alert.alert).not.toHaveBeenCalled();
        // Errors should be shown, but since Alert is not called, and form doesn't submit
    });
});
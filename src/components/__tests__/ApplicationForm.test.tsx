import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Alert } from 'react-native';
import ApplicationForm from '../ApplicationForm';
import { Job } from '../../types/job';

const mockAlert = jest.fn();
Alert.alert = mockAlert;

const mockNavigation = {
    navigate: jest.fn(),
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

describe('ApplicationForm', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders inputs correctly', () => {
        const { getByLabelText } = render(<ApplicationForm job={mockJob} navigation={mockNavigation} />);

        expect(getByLabelText('Name input')).toBeTruthy();
        expect(getByLabelText('Email input')).toBeTruthy();
        expect(getByLabelText('Resume input')).toBeTruthy();
        expect(getByLabelText('Submit application')).toBeTruthy();
    });

    it('shows validation errors on submit with empty fields', () => {
        const { getByLabelText, getByText } = render(<ApplicationForm job={mockJob} navigation={mockNavigation} />);

        const submitButton = getByLabelText('Submit application');
        fireEvent.press(submitButton);

        expect(getByText('Name is required')).toBeTruthy();
        expect(getByText('Email is required')).toBeTruthy();
        expect(getByText('Resume is required')).toBeTruthy();
    });

    it('shows email validation error on invalid email', () => {
        const { getByLabelText, getByText } = render(<ApplicationForm job={mockJob} navigation={mockNavigation} />);

        fireEvent.changeText(getByLabelText('Name input'), 'John Doe');
        fireEvent.changeText(getByLabelText('Email input'), 'invalid-email');
        fireEvent.changeText(getByLabelText('Resume input'), 'My resume');

        const submitButton = getByLabelText('Submit application');
        fireEvent.press(submitButton);

        expect(getByText('Please enter a valid email address')).toBeTruthy();
    });

    it('submits successfully with valid data', () => {
        const { getByLabelText } = render(<ApplicationForm job={mockJob} navigation={mockNavigation} />);

        fireEvent.changeText(getByLabelText('Name input'), 'John Doe');
        fireEvent.changeText(getByLabelText('Email input'), 'john@example.com');
        fireEvent.changeText(getByLabelText('Resume input'), 'My resume');

        const submitButton = getByLabelText('Submit application');
        fireEvent.press(submitButton);

        expect(mockAlert).toHaveBeenCalledWith('Success', 'Your application has been submitted successfully!');
        expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
    });
});
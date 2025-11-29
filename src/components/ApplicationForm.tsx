import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { Job } from '../types/job';

interface Props {
    job: Job;
}

const ApplicationForm: React.FC<Props> = ({ job }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState('');
    const [errors, setErrors] = useState<{ name?: string; email?: string; resume?: string }>({});

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const newErrors: { name?: string; email?: string; resume?: string } = {};

        if (!name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!resume.trim()) {
            newErrors.resume = 'Resume is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            const applicationData = {
                jobId: job.id,
                name: name.trim(),
                email: email.trim(),
                resume: resume.trim(),
            };
            console.log('Application submitted:', applicationData);
            Alert.alert('Success', 'Your application has been submitted successfully!');
            // Reset form
            setName('');
            setEmail('');
            setResume('');
            setErrors({});
        }
    };

    return (
        <ScrollView style={styles.container} testID="application-form">
            <Text style={styles.title}>Apply for {job.title} at {job.company}</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your full name"
                    accessibilityLabel="Name input"
                    testID="name-input"
                />
                {errors.name && <Text style={styles.error}>{errors.name}</Text>}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email address"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    accessibilityLabel="Email input"
                    testID="email-input"
                />
                {errors.email && <Text style={styles.error}>{errors.email}</Text>}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Resume</Text>
                <TextInput
                    style={styles.textArea}
                    value={resume}
                    onChangeText={setResume}
                    placeholder="Paste your resume here"
                    multiline
                    numberOfLines={6}
                    textAlignVertical="top"
                    accessibilityLabel="Resume input"
                    testID="resume-input"
                />
                {errors.resume && <Text style={styles.error}>{errors.resume}</Text>}
            </View>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
                accessibilityLabel="Submit application"
                accessibilityHint="Submit your job application"
                testID="submit-button"
            >
                <Text style={styles.submitButtonText}>Submit Application</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
    },
    inputContainer: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    textArea: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        height: 120,
    },
    error: {
        color: 'red',
        fontSize: 14,
        marginTop: 4,
    },
    submitButton: {
        backgroundColor: '#28a745',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 16,
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ApplicationForm;
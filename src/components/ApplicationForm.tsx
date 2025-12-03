import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, ActivityIndicator } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as DocumentPicker from 'expo-document-picker';
import { Job } from '../types/job';

type RootStackParamList = {
    Home: undefined;
    JobDetails: { job: Job };
    Apply: { job: Job };
};

interface Props {
    job: Job;
    navigation: StackNavigationProp<RootStackParamList, 'Apply'>;
}

const ApplicationForm: React.FC<Props> = ({ job, navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [resume, setResume] = useState('');
    const [resumeFile, setResumeFile] = useState<DocumentPicker.DocumentPickerResult | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState<{ name?: string; email?: string; resume?: string }>({});

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const pickResume = async () => {
        const result = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
        if (result.assets && result.assets.length > 0) {
            setResumeFile(result);
            setResume(result.assets[0].name);
        }
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

        if (!resumeFile) {
            newErrors.resume = 'Resume file is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            setSubmitting(true);
            const applicationData = {
                jobId: job.id,
                name: name.trim(),
                email: email.trim(),
                resumeFile,
            };
            console.log('Application submitted:', applicationData);
            // Simulate API call
            setTimeout(() => {
                Alert.alert('Success', 'Your application has been submitted successfully!');
                navigation.navigate('Home');
                setSubmitting(false);
                // Reset form
                setName('');
                setEmail('');
                setResume('');
                setResumeFile(null);
                setErrors({});
            }, 2000);
        }
    };

    return (
        <ScrollView style={styles.container} accessibilityLabel="Application form" testID="application-form">
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
                <TouchableOpacity
                    style={styles.fileButton}
                    onPress={pickResume}
                    accessibilityLabel="Resume input"
                    accessibilityHint="Select a PDF file for your resume"
                >
                    <Text>{resumeFile ? resume : 'Select Resume PDF'}</Text>
                </TouchableOpacity>
                {errors.resume && <Text style={styles.error}>{errors.resume}</Text>}
            </View>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
                disabled={submitting}
                accessibilityLabel="Submit application"
                accessibilityHint="Submit your job application"
                testID="submit-button"
            >
                {submitting ? <ActivityIndicator color="#fff" /> : <Text style={styles.submitButtonText}>Submit Application</Text>}
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
    fileButton: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        backgroundColor: '#f9f9f9',
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
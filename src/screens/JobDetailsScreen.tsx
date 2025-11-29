import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Job } from '../types/job';

type RootStackParamList = {
    Home: undefined;
    JobDetails: { job: Job };
    Apply: { job: Job };
};

type Props = StackScreenProps<RootStackParamList, 'JobDetails'>;

const JobDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
    const { job } = route.params;

    return (
        <ScrollView style={styles.container} testID="job-details-screen">
            <Text style={styles.title} testID="job-details-title">{job.title}</Text>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.location}>{job.location}</Text>
            <Text style={styles.category}>Category: {job.category}</Text>
            <Text style={styles.experience}>Experience: {job.experience}</Text>
            <Text style={styles.description}>{job.description}</Text>
            <TouchableOpacity
                style={styles.applyButton}
                onPress={() => navigation.navigate('Apply', { job })}
                accessibilityLabel="Apply for this job"
                accessibilityHint="Navigate to application form"
                testID="apply-now-button"
            >
                <Text style={styles.applyButtonText}>Apply Now</Text>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    company: {
        fontSize: 20,
        color: '#666',
        marginBottom: 4,
    },
    location: {
        fontSize: 18,
        color: '#999',
        marginBottom: 16,
    },
    category: {
        fontSize: 16,
        marginBottom: 4,
    },
    experience: {
        fontSize: 16,
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 32,
    },
    applyButton: {
        backgroundColor: '#007bff',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default JobDetailsScreen;
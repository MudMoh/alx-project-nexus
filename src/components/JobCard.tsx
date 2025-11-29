import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Job } from '../types/job';

type RootStackParamList = {
    Home: undefined;
    JobDetails: { job: Job };
    Apply: { job: Job };
};

type JobCardNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
    job: Job;
    navigation: JobCardNavigationProp;
}

const JobCard: React.FC<Props> = ({ job, navigation }) => {
    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('JobDetails', { job })}
            accessibilityLabel={`Job: ${job.title} at ${job.company}`}
            accessibilityHint="Tap to view job details"
        >
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.company}>{job.company}</Text>
            <Text style={styles.location}>{job.location}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    company: {
        fontSize: 16,
        color: '#666',
        marginBottom: 2,
    },
    location: {
        fontSize: 14,
        color: '#999',
    },
});

export default JobCard;
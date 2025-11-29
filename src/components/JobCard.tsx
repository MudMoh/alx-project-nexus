import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { Job } from '../types/job';
import { lightTheme } from '../theme';

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

const JobCard: React.FC<Props> = React.memo(({ job, navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);

    return (
        <Animated.View style={{ opacity: fadeAnim }}>
            <TouchableOpacity
                style={styles.card}
                onPress={() => navigation.navigate('JobDetails', { job })}
                accessibilityLabel={`Job: ${job.title} at ${job.company} in ${job.location}`}
                accessibilityHint="Double tap to view details"
                accessibilityRole="button"
                accessibilityState={{ selected: false }}
                testID={`job-card-${job.id}`}
            >
                <View style={styles.header}>
                    <Text style={styles.title} testID={`job-title-${job.id}`}>{job.title}</Text>
                    <Ionicons name="bookmark-outline" size={24} color="#007bff" />
                </View>
                <Text style={styles.company}>{job.company}</Text>
                <View style={styles.locationRow}>
                    <Ionicons name="location-outline" size={16} color="#666" />
                    <Text style={styles.location}>{job.location}</Text>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.category}>{job.category}</Text>
                    <Text style={styles.experience}>{job.experience}</Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
});

const styles = StyleSheet.create({
    card: {
        backgroundColor: lightTheme.colors.surface,
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        minHeight: 44,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        flex: 1,
        color: lightTheme.colors.text,
    },
    company: {
        fontSize: 16,
        color: lightTheme.colors.textSecondary,
        marginBottom: 4,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    location: {
        fontSize: 14,
        color: '#999',
        marginLeft: 4,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    category: {
        fontSize: 12,
        color: '#007bff',
        fontWeight: 'bold',
    },
    experience: {
        fontSize: 12,
        color: '#28a745',
        fontWeight: 'bold',
    },
});

export default JobCard;
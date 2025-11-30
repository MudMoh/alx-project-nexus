import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import MapView, { Marker } from 'react-native-maps';
import * as Sharing from 'expo-sharing';
import { Ionicons } from '@expo/vector-icons';
import { Job } from '../types/job';
import strings from '../i18n';
import { lightTheme } from '../theme';

const APP_URL = 'https://jobboardapp.com';

type RootStackParamList = {
    Home: undefined;
    JobDetails: { job: Job };
    Apply: { job: Job };
};

type Props = StackScreenProps<RootStackParamList, 'JobDetails'>;

const JobDetailsScreen: React.FC<Props> = ({ navigation, route }) => {
    const { job } = route.params;
    const [isFavorited, setIsFavorited] = useState(false);

    const shareJob = async () => {
        const message = `Check out this job: ${job.title} at ${job.company} - ${APP_URL}/job/${job.id}`;
        try {
            if (await Sharing.isAvailableAsync()) {
                await Sharing.shareAsync({ message });
            } else {
                Alert.alert('Sharing Unavailable', 'Sharing is not supported on this device.');
            }
        } catch (error) {
            Alert.alert('Sharing Error', 'An error occurred while sharing the job.');
        }
    };

    return (
        <ScrollView style={styles.container} testID="job-details-screen">
            <View style={styles.header}>
                <Text style={styles.title} testID="job-details-title">{job.title}</Text>
                <TouchableOpacity onPress={() => setIsFavorited(!isFavorited)}>
                    <Ionicons name={isFavorited ? "heart" : "heart-outline"} size={24} color={lightTheme.colors.primary} />
                </TouchableOpacity>
            </View>
            <View style={styles.section}>
                <Ionicons name="business" size={20} color={lightTheme.colors.secondary} />
                <Text style={styles.company}>{job.company}</Text>
            </View>
            <View style={styles.section}>
                <Ionicons name="location" size={20} color={lightTheme.colors.secondary} />
                <Text style={styles.location}>{job.location}</Text>
            </View>
            <View style={styles.section}>
                <Ionicons name="briefcase" size={20} color={lightTheme.colors.secondary} />
                <Text style={styles.category}>{strings.category}: {job.category}</Text>
            </View>
            <View style={styles.section}>
                <Ionicons name="school" size={20} color={lightTheme.colors.secondary} />
                <Text style={styles.experience}>{strings.experience}: {job.experience}</Text>
            </View>
            <Text style={styles.description}>{job.description}</Text>
            <View style={styles.section}>
                <Text style={styles.requirements}>{strings.requirements}: Bachelor's degree, 2+ years experience</Text>
            </View>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: -1.2864, // Nairobi coordinates as example
                        longitude: 36.8172,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker coordinate={{ latitude: -1.2864, longitude: 36.8172 }} title={job.company} />
                </MapView>
            </View>
            <TouchableOpacity style={styles.shareButton} onPress={shareJob}>
                <Ionicons name="share" size={20} />
                <Text>{strings.shareJob}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.applyButton}
                onPress={() => navigation.navigate('Apply', { job })}
                accessibilityLabel={strings.applyForJob}
                accessibilityHint={strings.navigateToApplication}
                testID="apply-now-button"
            >
                <Text style={styles.applyButtonText}>{strings.applyNow}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    company: {
        fontSize: 20,
        color: lightTheme.colors.textSecondary,
        marginLeft: 8,
    },
    location: {
        fontSize: 18,
        color: lightTheme.colors.textSecondary,
        marginLeft: 8,
    },
    category: {
        fontSize: 16,
        marginLeft: 8,
    },
    experience: {
        fontSize: 16,
        marginLeft: 8,
    },
    description: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 16,
    },
    requirements: {
        fontSize: 16,
        fontStyle: 'italic',
    },
    mapContainer: {
        height: 200,
        marginBottom: 16,
        borderRadius: 8,
        overflow: 'hidden',
    },
    map: {
        flex: 1,
    },
    shareButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 12,
        backgroundColor: lightTheme.colors.surface,
        borderRadius: 8,
    },
    applyButton: {
        backgroundColor: lightTheme.colors.primary,
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
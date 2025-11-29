import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useJobContext } from '../context/JobContext';
import FilterBar from '../components/FilterBar';
import JobCard from '../components/JobCard';
import { Job } from '../types/job';

type RootStackParamList = {
    Home: undefined;
    JobDetails: { job: Job };
    Apply: { job: Job };
};

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { filteredJobs, loading, error } = useJobContext();

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Job Board</Text>
            <FilterBar />
            <FlatList
                data={filteredJobs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <JobCard job={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default HomeScreen;
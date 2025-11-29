import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, RefreshControl } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useJobContext } from '../context/JobContext';
import FilterBar from '../components/FilterBar';
import JobCard from '../components/JobCard';
import SkeletonLoader from '../components/SkeletonLoader';
import { Job } from '../types/job';
import i18n from '../i18n';

type RootStackParamList = {
    Home: undefined;
    JobDetails: { job: Job };
    Apply: { job: Job };
};

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { filteredJobs, loading, error, refetchJobs } = useJobContext();
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        await refetchJobs();
        setRefreshing(false);
    };

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
        <View style={styles.container} testID="home-screen">
            <Text style={styles.title} testID="home-title">{i18n.t('jobBoard')}</Text>
            <FilterBar />
            <FlatList
                data={filteredJobs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <JobCard job={item} navigation={navigation} />
                )}
                initialNumToRender={10}
                maxToRenderPerBatch={5}
                windowSize={5}
                getItemLayout={(data, index) => ({
                    length: 120, // Approximate height of JobCard
                    offset: 120 * index,
                    index,
                })}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                ListFooterComponent={loading ? <SkeletonLoader /> : null}
                ListEmptyComponent={<Text>{i18n.t('noJobsFound')}</Text>}
                testID="job-list"
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
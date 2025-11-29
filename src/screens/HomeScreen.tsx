import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { useJobContext } from '../context/JobContext';

type RootStackParamList = {
    Home: undefined;
    JobDetails: { jobId: number };
    Apply: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const { filteredJobs, loading, error, filters, setFilters } = useJobContext();

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
            <View style={styles.filters}>
                <Picker
                    selectedValue={filters.category}
                    onValueChange={(value) => setFilters({ category: value })}
                    style={styles.picker}
                >
                    <Picker.Item label="All Categories" value="" />
                    <Picker.Item label="Tech" value="Tech" />
                    <Picker.Item label="Finance" value="Finance" />
                    <Picker.Item label="Healthcare" value="Healthcare" />
                    <Picker.Item label="Education" value="Education" />
                    <Picker.Item label="Marketing" value="Marketing" />
                </Picker>
                <Picker
                    selectedValue={filters.location}
                    onValueChange={(value) => setFilters({ location: value })}
                    style={styles.picker}
                >
                    <Picker.Item label="All Locations" value="" />
                    <Picker.Item label="New York" value="New York" />
                    <Picker.Item label="San Francisco" value="San Francisco" />
                    <Picker.Item label="London" value="London" />
                    <Picker.Item label="Berlin" value="Berlin" />
                    <Picker.Item label="Tokyo" value="Tokyo" />
                </Picker>
                <Picker
                    selectedValue={filters.experience}
                    onValueChange={(value) => setFilters({ experience: value })}
                    style={styles.picker}
                >
                    <Picker.Item label="All Experiences" value="" />
                    <Picker.Item label="Entry" value="Entry" />
                    <Picker.Item label="Mid" value="Mid" />
                    <Picker.Item label="Senior" value="Senior" />
                    <Picker.Item label="Lead" value="Lead" />
                    <Picker.Item label="Executive" value="Executive" />
                </Picker>
            </View>
            <FlatList
                data={filteredJobs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.jobItem}
                        onPress={() => navigation.navigate('JobDetails', { jobId: item.id })}
                    >
                        <Text style={styles.jobTitle}>{item.title}</Text>
                    </TouchableOpacity>
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
    filters: {
        marginBottom: 16,
    },
    picker: {
        height: 50,
        marginBottom: 8,
    },
    jobItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    jobTitle: {
        fontSize: 18,
    },
});

export default HomeScreen;
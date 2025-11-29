import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Location from 'expo-location';
import { useJobContext } from '../context/JobContext';
import strings from '../i18n';

const FilterBar: React.FC = () => {
    const { filters, setFilters } = useJobContext();
    const [nearby, setNearby] = useState(false);

    const enableNearby = async () => {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
            setNearby(true);
            // Logic to filter jobs by location could be added here
        }
    };

    return (
        <View style={styles.container} testID="filter-bar">
            <TextInput
                style={styles.searchInput}
                placeholder={strings.searchJobs}
                value={filters.search || ''}
                onChangeText={(value) => setFilters({ search: value })}
                accessibilityLabel={strings.searchJobsLabel}
                accessibilityHint={strings.enterKeywords}
                testID="search-input"
            />
            <Picker
                selectedValue={filters.category}
                onValueChange={(value) => setFilters({ category: value })}
                style={styles.picker}
                accessibilityLabel={strings.filterByCategory}
                testID="category-picker"
            >
                <Picker.Item label={strings.allCategories} value="" />
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
                accessibilityLabel={strings.filterByLocation}
                testID="location-picker"
            >
                <Picker.Item label={strings.allLocations} value="" />
                <Picker.Item label="Nairobi" value="Nairobi" />
                <Picker.Item label="Lagos" value="Lagos" />
                <Picker.Item label="Cape Town" value="Cape Town" />
                <Picker.Item label="Addis Ababa" value="Addis Ababa" />
                <Picker.Item label="Johannesburg" value="Johannesburg" />
                <Picker.Item label="Accra" value="Accra" />
                <Picker.Item label="Kampala" value="Kampala" />
                <Picker.Item label="Dakar" value="Dakar" />
                <Picker.Item label="Casablanca" value="Casablanca" />
            </Picker>
            <Picker
                selectedValue={filters.experience}
                onValueChange={(value) => setFilters({ experience: value })}
                style={styles.picker}
                accessibilityLabel={strings.filterByExperience}
                testID="experience-picker"
            >
                <Picker.Item label={strings.allExperiences} value="" />
                <Picker.Item label="Entry" value="Entry" />
                <Picker.Item label="Mid" value="Mid" />
                <Picker.Item label="Senior" value="Senior" />
                <Picker.Item label="Lead" value="Lead" />
                <Picker.Item label="Executive" value="Executive" />
            </Picker>
            <TouchableOpacity onPress={enableNearby} style={styles.nearbyButton}>
                <Text>{nearby ? strings.nearbyEnabled : strings.nearbyJobs}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    searchInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
    },
    picker: {
        height: 50,
        marginBottom: 8,
    },
    nearbyButton: {
        backgroundColor: '#D4AF37',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 8,
    },
});

export default FilterBar;
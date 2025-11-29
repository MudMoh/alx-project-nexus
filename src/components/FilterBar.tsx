import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useJobContext } from '../context/JobContext';

const FilterBar: React.FC = () => {
    const { filters, setFilters } = useJobContext();

    return (
        <View style={styles.container} testID="filter-bar">
            <Picker
                selectedValue={filters.category}
                onValueChange={(value) => setFilters({ category: value })}
                style={styles.picker}
                accessibilityLabel="Filter by category"
                testID="category-picker"
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
                accessibilityLabel="Filter by location"
                testID="location-picker"
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
                accessibilityLabel="Filter by experience level"
                testID="experience-picker"
            >
                <Picker.Item label="All Experiences" value="" />
                <Picker.Item label="Entry" value="Entry" />
                <Picker.Item label="Mid" value="Mid" />
                <Picker.Item label="Senior" value="Senior" />
                <Picker.Item label="Lead" value="Lead" />
                <Picker.Item label="Executive" value="Executive" />
            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    picker: {
        height: 50,
        marginBottom: 8,
    },
});

export default FilterBar;
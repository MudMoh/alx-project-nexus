import React from 'react';
import { View, StyleSheet } from 'react-native';
import { lightTheme } from '../theme';

const SkeletonLoader: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <View style={styles.title} />
                    <View style={styles.icon} />
                </View>
                <View style={styles.company} />
                <View style={styles.location} />
                <View style={styles.footer}>
                    <View style={styles.category} />
                    <View style={styles.experience} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        marginHorizontal: 16,
    },
    card: {
        backgroundColor: lightTheme.colors.surface,
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        height: 18,
        width: '70%',
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
    },
    icon: {
        height: 24,
        width: 24,
        backgroundColor: '#e0e0e0',
        borderRadius: 12,
    },
    company: {
        height: 16,
        width: '50%',
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
        marginBottom: 4,
    },
    location: {
        height: 14,
        width: '40%',
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
        marginBottom: 8,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    category: {
        height: 12,
        width: '30%',
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
    },
    experience: {
        height: 12,
        width: '25%',
        backgroundColor: '#e0e0e0',
        borderRadius: 4,
    },
});

export default SkeletonLoader;
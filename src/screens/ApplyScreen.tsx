import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Job } from '../types/job';
import ApplicationForm from '../components/ApplicationForm';

type RootStackParamList = {
    Home: undefined;
    JobDetails: { job: Job };
    Apply: { job: Job };
};

type Props = StackScreenProps<RootStackParamList, 'Apply'>;

const ApplyScreen: React.FC<Props> = ({ navigation, route }) => {
    const { job } = route.params;

    return (
        <View style={styles.container}>
            <ApplicationForm job={job} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ApplyScreen;
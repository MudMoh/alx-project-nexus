import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    JobDetails: undefined;
    Apply: undefined;
};

type ApplyScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Apply'>;

interface Props {
    navigation: ApplyScreenNavigationProp;
}

const ApplyScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Apply for Job</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ApplyScreen;
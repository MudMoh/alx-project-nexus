import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { JobProvider } from './src/context/JobContext';
import HomeScreen from './src/screens/HomeScreen';
import JobDetailsScreen from './src/screens/JobDetailsScreen';
import ApplyScreen from './src/screens/ApplyScreen';
import { Job } from './src/types/job';

type RootStackParamList = {
  Home: undefined;
  JobDetails: { job: Job };
  Apply: { job: Job };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <JobProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
          <Stack.Screen name="Apply" component={ApplyScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </JobProvider>
  );
}

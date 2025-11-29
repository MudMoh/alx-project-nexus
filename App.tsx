import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { I18nManager } from 'react-native';
import * as RNLocalize from 'expo-localization';
import { JobProvider } from './src/context/JobContext';
import HomeScreen from './src/screens/HomeScreen';
import JobDetailsScreen from './src/screens/JobDetailsScreen';
import ApplyScreen from './src/screens/ApplyScreen';
import { Job } from './src/types/job';

// Set RTL for Arabic
const isRTL = RNLocalize.getLocales()[0].languageCode === 'ar';
I18nManager.allowRTL(isRTL);
I18nManager.forceRTL(isRTL);

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
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Job Board' }} />
          <Stack.Screen name="JobDetails" component={JobDetailsScreen} options={{ title: 'Job Details' }} />
          <Stack.Screen name="Apply" component={ApplyScreen} options={{ title: 'Apply' }} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </JobProvider>
  );
}

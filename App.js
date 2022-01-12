import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ApplicationProvider,
  Button,
  IconRegistry,
  Layout,
  BottomNavigation,
  BottomNavigationTab,
  Text,
} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import Icon from 'react-native-vector-icons/FontAwesome';

//from here

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens

import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SettingsScreen from './Screens/SettingsScreen';
import SplashScreen from './Screens/SplashScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const HeartIcon = props => <Icon {...props} name="heart" />;

//for tab navigation
const Tab = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab
      title={evaProps => <Icon name="home" size={30} color="#000" />}
    />
    <BottomNavigationTab
      title={evaProps => <Icon name="gear" size={30} color="#000" />}
    />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{activeTintColor: 'blue', inactiveTintColor: 'black'}}
    tabBar={props => <BottomTabBar {...props} />}
    initialRouteName={HomeScreen}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

// tab navigation end

//for stack navigation

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="tabs">
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen
                options={{headerShown: false}}
                name="tabs"
                component={TabNavigator}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});

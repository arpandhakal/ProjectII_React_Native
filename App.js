import React, {useEffect, useState, useContext} from 'react';
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

//screens and components

import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import SettingsScreen from './Screens/SettingsScreen';
import SplashScreen from './Screens/SplashScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthContext, AuthProvider} from './firebase/AuthProvider';
import auth from '@react-native-firebase/auth';

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
  const [initializing, setInitializing] = useState(true);
  const {user, setUser} = useContext(AuthContext);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(failse);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          {/* <AuthProvider> */}
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen
                options={{headerShown: false}}
                name="tabs"
                component={TabNavigator}
              />
            </Stack.Navigator>
          </NavigationContainer>
          {/* </AuthProvider> */}
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

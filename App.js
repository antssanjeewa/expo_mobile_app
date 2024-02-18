import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage from './pages/HomePage';
import TweetViewPage from './pages/TweetViewPage';
import ProfilePage from './pages/ProfilePage';
import NewTweetPage from './pages/NewTweetPage';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Post d"
        onPress={() => navigation.navigate('Post2', {
          name: 'post-01'
        })}
      />
    </View>
  );
}

function PostScreen({ route }) {
  const { name } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Post Screen {name}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true, headerBackTitleVisible: false }}>
      <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="TweetView" component={TweetViewPage} options={{ title: '' }} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} options={{ title: '' }} />
      <Stack.Screen name="NewTweetPage" component={NewTweetPage} options={{ title: '' }} />
    </Stack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
    }}>
      <Tab.Screen name="Home" component={HomePage} options={
        {
          tabBarIcon: () => (
            <Ionicons name="home" size={24} color="black" />
          ),
        }
      } />
      <Tab.Screen name="post2" component={TweetViewPage} options={
        {
          tabBarIcon: () => (
            <Ionicons name="search" size={24} color="black" />
          ),
        }
      } />
      <Tab.Screen name="ProfilePage2" component={ProfilePage} options={
        {
          tabBarIcon: () => (
            <Ionicons name="notifications" size={24} color="black" />
          ),
        }
      } />
    </Tab.Navigator>
  );
}

const LotsOfStyles = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home' screenOptions={{
        headerShown: true
      }} >
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="Post" component={PostScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;
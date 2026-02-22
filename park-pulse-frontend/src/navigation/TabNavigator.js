import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Expo's built-in premium icons!

// Import the screens we want in the bottom tabs
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator({ route }) {
  // We elegantly catch the city name passed from the CityScreen
  const cityName = route.params?.cityName || 'Bengaluru';

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hides the default top headers
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarActiveTintColor: '#00E676', // Our signature neon green
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          // These are official iOS/Android icons
          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }
          
          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={HomeScreen} 
        initialParams={{ cityName }} // Passes the city safely to the Home screen
        options={{ tabBarLabel: 'Explore' }} 
      />
      <Tab.Screen 
        name="ProfileTab" 
        component={ProfileScreen} 
        options={{ tabBarLabel: 'My Bookings' }} 
      />
    </Tab.Navigator>
  );
}
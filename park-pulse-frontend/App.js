import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import BookingScreen from './src/screens/BookingScreen';
import CityScreen from './src/screens/CityScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import MallsScreen from './src/screens/MallsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import TicketScreen from './src/screens/TicketScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Start with Login */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="City" component={CityScreen} />
        
        {/* Main App Flow */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Malls" component={MallsScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Ticket" component={TicketScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
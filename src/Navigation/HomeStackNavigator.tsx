import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import logo from '../assets/images/logo.png';
import { HomeStackNavigatorParmList } from './types';
const Stack = createNativeStackNavigator<HomeStackNavigatorParmList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Feed'}
        component={HomeScreen}
        options={{ headerTitle: HeaderTitle, headerTitleAlign: 'center' }}
      />
      <Stack.Screen
        name={'UserProfile'}
        component={ProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
    </Stack.Navigator>
  );
};
const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode='contain'
      style={{ width: 150, height: 40 }}
    />
  );
};
export default HomeStackNavigator;

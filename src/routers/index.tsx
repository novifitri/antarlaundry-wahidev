import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Pesanan, Akun, Splash} from '../pages';
import {
  IconAkun,
  IconAkunActive,
  IconHome,
  IconHomeActive,
  IconPesanan,
  IconPesananActive,
} from '../assets';
import {Image} from 'react-native';
import BottomNavigation from '../components/BottomNavigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabIcon = ({focused, name}: {focused: boolean; name: string}) => {
  let iconSource;
  switch (name) {
    case 'Home':
      iconSource = focused ? IconHomeActive : IconHome;
      break;
    case 'Pesanan':
      iconSource = focused ? IconPesananActive : IconPesanan;
      break;
    case 'Akun':
      iconSource = focused ? IconAkunActive : IconAkun;
      break;
    default:
      iconSource = IconHome;
      break;
  }
  return (
    <Image
      source={iconSource}
      style={{width: 24, height: 24}}
      resizeMode="contain"
    />
  );
};

const MainApp = () => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomNavigation {...props} />}
      screenOptions={({route}) => ({
        tabBarIcon: focused =>
          TabIcon({name: route.name, focused: focused.focused}),
        tabBarActiveTintColor: '#55CB95',
        tabBarInactiveTintColor: '#C8C8C8',
      })}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Pesanan" component={Pesanan} />
      <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

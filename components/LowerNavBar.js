/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import Settings from './Settings';
import Orders from './Orders';
const Tab = createBottomTabNavigator();

const CustomTabBarBotton = ({children, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        top: -35,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 35,
          backgroundColor: '#e32f45',
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};
const LowerNavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        showLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 10,
          right: 10,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 20,
          height: 80,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/icons/icons8-home-48.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#e32f45' : '#748c94',
                  ...styles.icons,
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/icons/icons8-order-64.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#e32f45' : '#748c94',
                  ...styles.icons,
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/icons8-french-fries-48.png')}
              resizeMode="contain"
              style={{
                tintColor: '#fff',
                ...styles.icons,
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarBotton {...props} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/icons/icons8-setting-64.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#e32f45' : '#748c94',
                  ...styles.icons,
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={require('../assets/icons/icons8-sign-in-48.png')}
                resizeMode="contain"
                style={{
                  tintColor: focused ? '#e32f45' : '#748c94',
                  ...styles.icons,
                }}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5D0F0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  icons: {
    width: 40,
    height: 40,
  },
});

export default LowerNavBar;

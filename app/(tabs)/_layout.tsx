
import { HapticTab } from '@/components/haptic-tab';
import { useDarkMode } from '@/context/DarkModeContext';
import { useColorScheme } from '@/hooks/use-color-scheme';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { darkMode } = useDarkMode();

  const tabBg = 'transparent';
  const tabActiveBg = darkMode ? '#4c8c2b' : '#3a6b21';
  const iconColor = darkMode ? '#4c8c2b' : '#d1d5db';
  const labelStyle = { color: darkMode ? '#4c8c2b' : 'white', fontSize: 12, marginLeft: 8, fontWeight: '800' };
  const tabBarStyle = { backgroundColor: darkMode ? '#222' : '#fff', borderTopWidth: 0, paddingHorizontal: 18, paddingTop: 8 };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: iconColor,
        tabBarInactiveTintColor: iconColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarStyle,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: focused ? tabActiveBg : tabBg, borderRadius: 16, paddingHorizontal: 12, paddingVertical: 2,marginBottom: 0, width : focused ? 100 : 50, height: 30 }}>
              <FontAwesome6 name="house" size={20} color={focused ? 'white' : iconColor} solid />
              {focused && <Text style={{ color:"white", fontSize: 12, marginLeft: 8, fontWeight: '800' }}>Home</Text>}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="transactions"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: focused ? tabActiveBg : tabBg, borderRadius: 16, paddingHorizontal: 12, paddingVertical: 2, width : focused ? 130 : 50, height: 30 }}>
              <FontAwesome5 name="exchange-alt" size={20} color={focused ? 'white' : iconColor} solid />
              {focused && <Text style={{ color:"white", fontSize: 12, marginLeft: 8, fontWeight: '800' }}>Transactions</Text>}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: focused ? tabActiveBg : tabBg, borderRadius: 16, paddingHorizontal: 12, paddingVertical: 2, width : focused ? 100 : 50, height: 30 }}>
              <FontAwesome5 name="wallet" size={20} color={focused ? 'white' : iconColor} solid />
              {focused && <Text style={{ color:"white", fontSize: 12, marginLeft: 8, fontWeight: '800' }}>Wallet</Text>}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
              tabBarIcon: ({ color, focused }) => (
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: focused ? tabActiveBg : tabBg, borderRadius: 16, paddingHorizontal: 12, paddingVertical: 2,  width : focused ? 100 : 50, height: 30 }}>
              <FontAwesome5 name="user" size={20} color={focused ? 'white' : iconColor} solid />
              {focused && <Text style={{ color:"white", fontSize: 12, marginLeft: 8, fontWeight: '800' }}>Profile</Text>}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

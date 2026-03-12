import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { DarkModeProvider } from '@/context/DarkModeContext';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

const linking = {
  prefixes: ['mynewapp://', 'https://mynewapp.com'],
  config: {
    screens: {
      '(tabs)': {
        screens: {
          home: 'home',
          transactions: 'transactions',
          wallet: 'wallet',
          profile: 'profile',
        },
      },
      modal: 'modal',
      NotFound: '*',
    },
  },
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <DarkModeProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack linking={linking}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </DarkModeProvider>
  );
}

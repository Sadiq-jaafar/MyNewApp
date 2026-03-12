import { useDarkMode } from '@/context/DarkModeContext';
import { Text, View } from 'react-native';

export default function Wallet() {
  const { darkMode } = useDarkMode();
  
  const bgColor = darkMode ? '#181a1b' : '#f7f7f7';
  const textColor = darkMode ? '#fff' : '#222';
  
  return (
    <View style={{ flex: 1, backgroundColor: bgColor, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: textColor, fontSize: 18, fontWeight: 'bold' }}>Wallet</Text>
    </View>
  );
}

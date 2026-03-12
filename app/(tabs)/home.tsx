import { useDarkMode } from '@/context/DarkModeContext';
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {
  const { darkMode } = useDarkMode();
  
  const bgColor = darkMode ? '#181a1b' : '#f7f7f7';
  const textColor = darkMode ? '#fff' : '#222';
  const subtextColor = darkMode ? '#bbb' : '#888';
  const cardBg = darkMode ? '#222' : '#fff';
  const servicesBg = darkMode ? '#193a1a' : '#f2f2f2';
  const servicesText = darkMode ? '#6fff6f' : '#4c8c2b';
  const accountCardBg = darkMode ? '#193a1a' : '#4c8c2b';
  const accountCardPalm = darkMode ? '#215c23' : 'rgba(255,255,255,0.08)';
  const accountCardPalmText = darkMode ? '#6fff6f' : '#fff';
  const fundBtnBg = darkMode ? '#fff' : '#fff';
  const fundBtnText = darkMode ? '#215c23' : '#4c8c2b';
  const refreshBtnBg = darkMode ? '#6fff6f' : '#fff';
  const refreshBtnText = darkMode ? '#222' : '#4c8c2b';
  const navBg = darkMode ? '#222' : '#fff';

  return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, paddingTop: 40 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: 'https://i.pravatar.cc/40' }} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }} />
          <View>
            <Text style={{ color: textColor, fontWeight: 'bold', fontSize: 16 }}>Hello , baffa01 <Text>👋</Text></Text>
            <Text style={{ color: subtextColor, fontSize: 13 }}>Welcome!</Text>
          </View>
        </View>
        <View style={{ position: 'relative' }}>
          <Ionicons name="notifications-outline" size={28} color={textColor} />
          <View style={{ position: 'absolute', top: -2, right: -2, backgroundColor: 'red', borderRadius: 8, width: 16, height: 16, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 10, fontWeight: 'bold' }}>0</Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
        {/* Account Balance Card */}
        <ImageBackground
          source={{ uri: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cpath d='M0 100 Q 200 50 400 150 T 800 100 L 800 400 L 0 400 Z' fill='%23437d26' opacity='0.4'/%3E%3Cpath d='M0 200 Q 150 150 300 250 T 600 200 T 800 300 L 800 400 L 0 400 Z' fill='%235ea33a' opacity='0.2'/%3E%3C/svg%3E" }}
          style={{ backgroundColor: accountCardBg, borderRadius: 20, padding: 18, marginBottom: 18, overflow: 'hidden' }}
          imageStyle={{ borderRadius: 20, resizeMode: 'cover' }}
        >
          <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center', marginBottom: 6 }}>Account Balance</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
            <Text style={{ color: '#fff', fontSize: 22, letterSpacing: 2 }}>********</Text>
            <TouchableOpacity style={{ marginLeft: 8 }}>
              <Ionicons name="eye-outline" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
          <FlatList
            data={[
              { bank: 'Palmpay', account: '0212345678', name: 'King Naseer' },
              { bank: 'Wema', account: '8765432109', name: 'King Naseer' },
              { bank: 'Wem', account: '8765432109', name: 'King Naseer' },
            ]}
            keyExtractor={(item) => item.bank}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="start"
            decelerationRate="fast"
            style={{ marginBottom: 14, minHeight: 90 }}
            contentContainerStyle={{ gap: 10, paddingHorizontal: 2 }}
            ListHeaderComponent={<View style={{ width: 2 }} />}
            ListFooterComponent={<View style={{ width: 2 }} />}
            renderItem={({ item }) => (
              <View style={{ width: 220, backgroundColor: accountCardPalm, borderRadius: 12, padding: 12 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ color: accountCardPalmText, fontWeight: 'bold' }}>{item.bank}</Text>
                  <TouchableOpacity>
                    <MaterialIcons name="content-copy" size={18} color={accountCardPalmText} />
                  </TouchableOpacity>
                </View>
                <Text style={{ color: '#fff', fontSize: 16, letterSpacing: 2, marginVertical: 4 }}>{item.account}</Text>
                <Text style={{ color: '#fff', fontSize: 13 }}>{item.name}</Text>
              </View>
            )}
          />
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: fundBtnBg, borderRadius: 10, padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
              <Ionicons name="add-circle-outline" size={20} color={fundBtnText} style={{ marginRight: 6 }} />
              <Text style={{ color: fundBtnText, fontWeight: 'bold' }}>Fund Wallet</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#222', borderRadius: 10, padding: 12, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
              <FontAwesome name="users" size={18} color="#fff" style={{ marginRight: 6 }} />
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Referrals</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        {/* Our Services */}
        <View style={{ backgroundColor: cardBg, borderRadius: 18, padding: 18, marginBottom: 18 }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 16, color: textColor }}>Our Services</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {[
              { label: 'Data', icon: 'wifi' },
              { label: 'Airtime', icon: 'call' },
              { label: 'Electricity', icon: 'flash' },
              { label: 'Cable', icon: 'tv' },
              { label: 'Edu Pins', icon: 'school' },
              { label: 'Bulk SMS', icon: 'chatbubble' },
              { label: 'Transfer', icon: 'swap-horizontal' },
              { label: 'Airtime to Cash', icon: 'cash' },
            ].map((service, idx) => (
              <View key={service.label} style={{ width: '23%', alignItems: 'center', marginBottom: 18 }}>
                <View style={{ backgroundColor: servicesBg, borderRadius: 16, padding: 12, marginBottom: 6 }}>
                  <Ionicons name={service.icon + '-outline' as any} size={22} color={servicesText} />
                </View>
                <Text style={{ fontSize: 12, color: textColor, textAlign: 'center' }}>{service.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Recent Transactions */}
        <View style={{ marginBottom: 18 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: textColor }}>Recent Transactions</Text>
            <TouchableOpacity>
              <Text style={{ color: servicesText, fontWeight: 'bold' }}>View All</Text>
            </TouchableOpacity>
          </View>
          {/* Placeholder for transactions */}
          <Text style={{ color: subtextColor, fontSize: 13, marginBottom: 10 }}>No recent transactions</Text>
          <TouchableOpacity style={{ alignSelf: 'flex-end', backgroundColor: refreshBtnBg, borderRadius: 24, paddingVertical: 8, paddingHorizontal: 18, flexDirection: 'row', alignItems: 'center', elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 2 }}>
            <Ionicons name="refresh" size={18} color={refreshBtnText} style={{ marginRight: 6 }} />
            <Text style={{ color: refreshBtnText, fontWeight: 'bold' }}>Refresh</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // ...existing code...
});


import { useDarkMode } from '@/context/DarkModeContext';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  const { darkMode, setDarkMode } = useDarkMode();
  const bgColor = darkMode ? '#181a1b' : '#faf7fa';
  const textColor = darkMode ? '#fff' : '#222';
  const subtitleColor = darkMode ? '#bbb' : '#aaa';
  const iconBg = darkMode ? '#222a22' : '#e6ebdf';
  const navBg = darkMode ? '#222' : '#4c8c2b';
  const navActive = darkMode ? '#4c8c2b' : '#fff';
  return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 0, paddingBottom: 80 }} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <Text style={{ fontWeight: 'bold', fontSize: 22, marginTop: 32, marginLeft: 24, marginBottom: 10, color: textColor }}>Profile</Text>
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <Image source={{ uri: 'https://i.pravatar.cc/100' }} style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10, backgroundColor: '#eee' }} />
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: textColor }}>Baffa Abba</Text>
          <Text style={{ color: subtitleColor, fontSize: 15 }}>baffa01</Text>
        </View>
        {/* Settings List */}
        <Text style={{ color: subtitleColor, fontWeight: 'bold', fontSize: 15, marginLeft: 24, marginTop: 10, marginBottom: 8 }}>General Settings</Text>
        <View style={{ backgroundColor: 'transparent', paddingHorizontal: 12 }}>
          {/* Profile */}
          <TouchableOpacity style={[styles.settingRow, { borderBottomColor: darkMode ? '#222' : '#eee' }] }>
            <View style={[styles.iconCircle, { backgroundColor: iconBg }]}><Ionicons name="person" size={28} color="#7d8a6e" /></View>
            <View style={styles.settingTextWrap}>
              <Text style={[styles.settingTitle, { color: textColor }]}>Profile</Text>
              <Text style={[styles.settingSubtitle, { color: subtitleColor }]}>Your personal information</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color={subtitleColor} />
          </TouchableOpacity>
          {/* Setting */}
          <TouchableOpacity style={[styles.settingRow, { borderBottomColor: darkMode ? '#222' : '#eee' }] }>
            <View style={[styles.iconCircle, { backgroundColor: iconBg }]}><Ionicons name="settings" size={28} color="#7d8a6e" /></View>
            <View style={styles.settingTextWrap}>
              <Text style={[styles.settingTitle, { color: textColor }]}>Setting</Text>
              <Text style={[styles.settingSubtitle, { color: subtitleColor }]}>Account,notifications</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color={subtitleColor} />
          </TouchableOpacity>
          {/* My Referral */}
          <TouchableOpacity style={[styles.settingRow, { borderBottomColor: darkMode ? '#222' : '#eee' }] }>
            <View style={[styles.iconCircle, { backgroundColor: iconBg }]}><Ionicons name="people" size={28} color="#7d8a6e" /></View>
            <View style={styles.settingTextWrap}>
              <Text style={[styles.settingTitle, { color: textColor }]}>My Referral</Text>
              <Text style={[styles.settingSubtitle, { color: subtitleColor }]}>Referrals, commissions</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color={subtitleColor} />
          </TouchableOpacity>
          {/* Dark Mode */}
          <View style={[styles.settingRow, { borderBottomColor: darkMode ? '#222' : '#eee' }] }>
            <View style={[styles.iconCircle, { backgroundColor: iconBg }]}><Ionicons name="swap-horizontal" size={28} color="#7d8a6e" /></View>
            <View style={styles.settingTextWrap}>
              <Text style={[styles.settingTitle, { color: textColor }]}>Dark Mode</Text>
              <Text style={[styles.settingSubtitle, { color: subtitleColor }]}>Switch app display mode to your preference</Text>
            </View>
            <Switch value={darkMode} onValueChange={setDarkMode} trackColor={{ false: '#eee', true: '#4c8c2b' }} thumbColor={darkMode ? '#4c8c2b' : '#fff'} />
          </View>
          {/* Help & Support */}
          <TouchableOpacity style={[styles.settingRow, { borderBottomColor: darkMode ? '#222' : '#eee' }] }>
            <View style={[styles.iconCircle, { backgroundColor: iconBg }]}><Ionicons name="help-circle" size={28} color="#7d8a6e" /></View>
            <View style={styles.settingTextWrap}>
              <Text style={[styles.settingTitle, { color: textColor }]}>Help & Support</Text>
              <Text style={[styles.settingSubtitle, { color: subtitleColor }]}>Help or contact our customer service</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color={subtitleColor} />
          </TouchableOpacity>
          {/* Legal */}
          <TouchableOpacity style={[styles.settingRow, { borderBottomColor: darkMode ? '#222' : '#eee' }] }>
            <View style={[styles.iconCircle, { backgroundColor: iconBg }]}><Ionicons name="shield-checkmark" size={28} color="#7d8a6e" /></View>
            <View style={styles.settingTextWrap}>
              <Text style={[styles.settingTitle, { color: textColor }]}>Legal</Text>
              <Text style={[styles.settingSubtitle, { color: subtitleColor }]}>Privacy,Security & Terms of use</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color={subtitleColor} />
          </TouchableOpacity>
          {/* Log Out */}
          <TouchableOpacity style={[styles.settingRow, { borderBottomColor: darkMode ? '#222' : '#eee' }] }>
            <View style={[styles.iconCircle, { backgroundColor: iconBg }]}><Ionicons name="log-out-outline" size={28} color="#7d8a6e" /></View>
            <View style={styles.settingTextWrap}>
              <Text style={[styles.settingTitle, { color: textColor }]}>Log Out</Text>
              <Text style={[styles.settingSubtitle, { color: subtitleColor }]}>Sign Out of your account</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color={subtitleColor} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 10,
    paddingHorizontal: 6,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#e6ebdf',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  settingTextWrap: {
    flex: 1,
  },
  settingTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
  },
  settingSubtitle: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 2,
  },
});

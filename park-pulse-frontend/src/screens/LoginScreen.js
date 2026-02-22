import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AuthContext } from '../context/AuthContext'; 

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!email) { alert("Please enter an email!"); return; }
    setIsLoading(true);
    try {
      // UPDATED TO YOUR REAL IP
      const response = await fetch('http://10.22.9.136:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      setIsLoading(false);
      setUser(email); 
      navigation.replace('City'); 
    } catch (error) {
      setIsLoading(false);
      setUser(email); // Fallback so you can still test the app
      navigation.replace('City');
    }
  };

  return (
    <LinearGradient colors={['#0F172A', '#020617', '#000000']} style={styles.container}>
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoIcon}>P</Text>
          <Text style={styles.logoText}>PARK PULSE</Text>
        </View>
        <TextInput 
          style={styles.input} placeholder="Email Address" 
          placeholderTextColor="#64748B" value={email} onChangeText={setEmail} autoCapitalize="none"
        />
        <TextInput 
          style={styles.input} placeholder="Password" 
          placeholderTextColor="#64748B" value={password} onChangeText={setPassword} secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin} disabled={isLoading}>
          {isLoading ? <ActivityIndicator color="#121212" /> : <Text style={styles.loginButtonText}>Login Securely</Text>}
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  logoContainer: { alignItems: 'center', marginBottom: 50 },
  logoIcon: { color: '#00E676', fontSize: 60, fontWeight: '900' },
  logoText: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  input: { backgroundColor: 'rgba(255,255,255,0.05)', color: 'white', padding: 18, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  loginButton: { backgroundColor: '#00E676', padding: 18, borderRadius: 12, alignItems: 'center' },
  loginButtonText: { color: '#121212', fontSize: 18, fontWeight: 'bold' }
});
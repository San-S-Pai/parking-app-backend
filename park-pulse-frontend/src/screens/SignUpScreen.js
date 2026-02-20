import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View, 
  TextInput, 
  Alert, 
  ActivityIndicator,
  ScrollView 
} from 'react-native';
import axios from 'axios';

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Connection to your Backend API
  const handleSignUp = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    setLoading(true);
    try {
      // Replace with your IP if testing on a physical phone
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password
      });

      console.log("Registration Successful:", response.data);
      Alert.alert("Success", "Account created! Please log in.");
      navigation.navigate('Login'); // Go back to login screen
    } catch (error) {
      console.log("Registration Error:", error.response?.data || error.message);
      Alert.alert("Registration Failed", error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.brandSection}>
        <Text style={styles.logoText}>P</Text>
        <Text style={styles.appName}>JOIN PARK PULSE</Text>
      </View>

      <View style={styles.inputSection}>
        <Text style={styles.infoTitle}>Create Account</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity 
          style={styles.mainButton} 
          onPress={handleSignUp}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#000" />
          ) : (
            <Text style={styles.buttonText}>Sign Up</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkText}>Already have an account? <Text style={{color: '#00ff88'}}>Log In</Text></Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#0f0f0f', paddingVertical: 40 },
  brandSection: { alignItems: 'center', marginTop: 30 },
  logoText: { color: '#00ff88', fontSize: 70, fontWeight: 'bold', fontStyle: 'italic' },
  appName: { color: '#fff', fontSize: 24, letterSpacing: 3, fontWeight: 'bold', marginTop: 10 },
  inputSection: { paddingHorizontal: 30, marginTop: 40 },
  infoTitle: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333'
  },
  bottomSection: { paddingHorizontal: 20, marginTop: 20 },
  mainButton: { backgroundColor: '#00ff88', padding: 18, borderRadius: 30, alignItems: 'center', marginBottom: 20 },
  buttonText: { color: '#000', fontWeight: 'bold', fontSize: 18 },
  linkText: { color: '#888', textAlign: 'center', fontSize: 14 }
});

export default SignUpScreen;
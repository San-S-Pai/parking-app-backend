import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Brand Section */}
      <View style={styles.brandSection}>
        <Text style={styles.logoText}>P</Text>
        <Text style={styles.appName}>PARK PULSE</Text>
        <Text style={styles.tagline}>PARK WITH PRECISION</Text>
      </View>

      {/* Info Slider Placeholder */}
      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>Choose your{"\n"}parking location</Text>
        <View style={styles.dots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleText}>G  Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.emailButton}>
          <Text style={styles.emailText}>Continue with Email</Text>
        </TouchableOpacity>
        
        <Text style={styles.orText}>OR</Text>

        <View style={styles.row}>
           <TouchableOpacity onPress={() => navigation.navigate('City')} style={styles.smallButton}>
              <Text style={styles.btnText}>Log In</Text>
           </TouchableOpacity>
           <View style={{width: 20}}/>
           <TouchableOpacity onPress={() => navigation.navigate('City')} style={[styles.smallButton, {backgroundColor: '#222'}]}>
              <Text style={styles.btnText}>Sign Up</Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', justifyContent: 'space-between', paddingVertical: 50 },
  brandSection: { alignItems: 'center', marginTop: 50 },
  logoText: { color: '#00ff88', fontSize: 80, fontWeight: 'bold', fontStyle: 'italic' },
  appName: { color: '#fff', fontSize: 24, letterSpacing: 3, fontWeight: 'bold', marginTop: 10 },
  tagline: { color: '#888', fontSize: 12, letterSpacing: 2, marginTop: 5 },
  infoSection: { paddingHorizontal: 30 },
  infoTitle: { color: '#fff', fontSize: 28, fontWeight: 'bold' },
  dots: { flexDirection: 'row', marginTop: 20 },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#444', marginRight: 8 },
  activeDot: { backgroundColor: '#00ff88', width: 24 },
  bottomSection: { paddingHorizontal: 20 },
  googleButton: { backgroundColor: '#fff', padding: 15, borderRadius: 30, alignItems: 'center', marginBottom: 15 },
  googleText: { color: '#000', fontWeight: 'bold', fontSize: 16 },
  emailButton: { backgroundColor: '#222', padding: 15, borderRadius: 30, alignItems: 'center', marginBottom: 20 },
  emailText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  orText: { color: '#666', textAlign: 'center', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'center' },
  smallButton: { flex: 1, backgroundColor: '#00ff88', padding: 15, borderRadius: 30, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold' }
});

export default LoginScreen;
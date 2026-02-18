import { House } from 'phosphor-react-native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TicketScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.brand}>PARK PULSE</Text>
      
      <View style={styles.ticketCard}>
        <Text style={styles.mallName}>Broadway Mall</Text>
        <Text style={styles.date}>Sat, 18 Oct, 2024</Text>
        
        <View style={styles.divider} />
        
        <View style={styles.row}>
          <View>
            <Text style={styles.label}>Slot</Text>
            <Text style={styles.value}>F6</Text>
          </View>
          <View>
            <Text style={styles.label}>Time</Text>
            <Text style={styles.value}>5:30 PM</Text>
          </View>
          <View>
            <Text style={styles.label}>Vehicle</Text>
            <Text style={styles.value}>KA-05-MJ</Text>
          </View>
        </View>
        
        {/* Placeholder for QR Code */}
        <View style={styles.qrPlaceholder}>
          <Image 
            source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ParkPulseTicket123' }} 
            style={styles.qrImage}
          />
        </View>
        <Text style={styles.scanText}>Scan this at entry</Text>
      </View>

      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Home')}>
        <House size={24} color="#000" />
        <Text style={styles.homeText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', alignItems: 'center', paddingTop: 60, paddingHorizontal: 20 },
  brand: { color: '#fff', fontSize: 24, fontWeight: 'bold', letterSpacing: 2, marginBottom: 30 },
  ticketCard: { backgroundColor: '#fff', width: '100%', borderRadius: 20, padding: 20, alignItems: 'center' },
  mallName: { fontSize: 22, fontWeight: 'bold', color: '#000' },
  date: { color: '#666', marginTop: 5, marginBottom: 20 },
  divider: { height: 1, backgroundColor: '#ddd', width: '100%', marginBottom: 20 },
  row: { flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 30 },
  label: { color: '#888', fontSize: 12 },
  value: { color: '#000', fontSize: 18, fontWeight: 'bold' },
  qrPlaceholder: { width: 160, height: 160, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginBottom: 10 },
  qrImage: { width: 150, height: 150 },
  scanText: { color: '#888', fontSize: 12 },
  homeButton: { flexDirection: 'row', backgroundColor: '#00ff88', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, marginTop: 40, alignItems: 'center' },
  homeText: { color: '#000', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }
});

export default TicketScreen;
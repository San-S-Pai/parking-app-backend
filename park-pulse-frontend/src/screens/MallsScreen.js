import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const mallsData = [
  { id: '1', name: 'BROOKFIELDS', color: '#44aaff' }, 
  { id: '2', name: 'PROZONE', color: '#ffaa00' },     
  { id: '3', name: 'FUN REPUBLIC', color: '#00aaff' }, 
  { id: '4', name: 'BROADWAY', color: '#aa00ff' },    
];

const MallsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Select a Mall</Text>
      <FlatList
        data={mallsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.card, { backgroundColor: item.color }]} 
            onPress={() => navigation.navigate('Booking')}
          >
             <View style={styles.overlay} />
             <Text style={styles.mallName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', paddingTop: 60, paddingHorizontal: 20 },
  headerTitle: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  card: { height: 120, marginBottom: 20, borderRadius: 15, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)' },
  mallName: { color: '#fff', fontSize: 24, fontWeight: 'bold', zIndex: 1 }
});

export default MallsScreen;
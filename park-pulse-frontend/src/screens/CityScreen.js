import { NavigationArrow } from 'phosphor-react-native';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const cities = [
  { id: '1', name: 'Bengaluru', state: 'India', active: true },
  { id: '2', name: 'Mumbai', state: 'India', active: false },
  { id: '3', name: 'Chennai', state: 'India', active: false },
  { id: '4', name: 'Hyderabad', state: 'India', active: false },
  { id: '5', name: 'Bhopal', state: 'India', active: false },
];

const CityScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Manually</Text>
      
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput 
            placeholder="Search your city..." 
            placeholderTextColor="#666" 
            style={styles.input}
        />
      </View>

      {/* Locate Me Button */}
      <TouchableOpacity style={styles.locateBtn} onPress={() => navigation.navigate('Home')}>
        <NavigationArrow size={20} color="#00ff88" weight="fill" />
        <Text style={styles.locateText}>Locate Me</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Recommended Popular Locations</Text>

      {/* City List */}
      <FlatList 
        data={cities}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cityRow} onPress={() => navigation.navigate('Home')}>
            <View style={[styles.checkbox, item.active && styles.activeCheckbox]}>
                {item.active && <View style={styles.innerDot}/>}
            </View>
            <View>
                <Text style={[styles.cityName, item.active && {color: '#00ff88'}]}>{item.name}</Text>
                <Text style={styles.cityState}>{item.state}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', paddingTop: 60, paddingHorizontal: 20 },
  title: { color: '#fff', fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  searchBar: { backgroundColor: '#222', padding: 15, borderRadius: 12, marginBottom: 15 },
  input: { color: '#fff', fontSize: 16 },
  locateBtn: { flexDirection: 'row', alignItems: 'center', marginBottom: 30 },
  locateText: { color: '#00ff88', marginLeft: 10, fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { color: '#888', marginBottom: 15, fontSize: 14 },
  cityRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 25, paddingBottom: 15, borderBottomColor: '#222', borderBottomWidth: 1 },
  checkbox: { width: 20, height: 20, borderRadius: 4, borderWidth: 2, borderColor: '#666', marginRight: 15, justifyContent: 'center', alignItems: 'center' },
  activeCheckbox: { borderColor: '#00ff88' },
  innerDot: { width: 10, height: 10, backgroundColor: '#00ff88', borderRadius: 2 },
  cityName: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  cityState: { color: '#666', fontSize: 14 }
});

export default CityScreen;
import { MagnifyingGlass, MapPin, User } from 'phosphor-react-native';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hey!</Text>
          <View style={styles.locationRow}>
            <MapPin size={16} color="#00ff88" weight="fill" />
            <Text style={styles.locationText}>Bengaluru, India</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.profileIcon}>
          <User size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.searchBar}>
          <MagnifyingGlass size={20} color="#888" />
          <TextInput 
            placeholder="Search malls, events..." 
            placeholderTextColor="#666" 
            style={styles.searchInput}
          />
        </View>

        <Text style={styles.sectionTitle}>Live Events & Others</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.eventScroll}>
          <View style={styles.eventCard}>
            <View style={[styles.eventImage, { backgroundColor: '#442266' }]} />
            <Text style={styles.eventTitle}>Ultra Music Festival</Text>
            <Text style={styles.eventDate}>26-28 Apr</Text>
          </View>
          <View style={styles.eventCard}>
            <View style={[styles.eventImage, { backgroundColor: '#ff9900' }]} />
            <Text style={styles.eventTitle}>Phoenix Summer Fest</Text>
            <Text style={styles.eventDate}>24-28 Apr</Text>
          </View>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended Places</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Malls')}>
            <Text style={styles.seeAll}>See All {'>'}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.placeCard} onPress={() => navigation.navigate('Malls')}>
          <View style={styles.placeImagePlaceholder} />
          <View style={styles.placeInfo}>
            <Text style={styles.placeName}>UB City Mall</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.rating}>★ 4.8</Text>
              <Text style={styles.distance}>1.2 km • 9 min</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.navBar}>
        <TouchableOpacity><Text style={[styles.navText, { color: '#00ff88' }]}>Home</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Malls')}><Text style={styles.navText}>Malls</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.navText}>Profile</Text></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', paddingTop: 50, paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  greeting: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  locationText: { color: '#bbb', marginLeft: 5 },
  profileIcon: { backgroundColor: '#333', padding: 10, borderRadius: 20 },
  searchBar: { flexDirection: 'row', backgroundColor: '#222', padding: 12, borderRadius: 12, marginBottom: 25 },
  searchInput: { color: '#fff', marginLeft: 10, flex: 1 },
  sectionTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  eventScroll: { marginBottom: 30 },
  eventCard: { marginRight: 15, width: 140 },
  eventImage: { height: 100, borderRadius: 12, marginBottom: 10 },
  eventTitle: { color: '#fff', fontWeight: 'bold' },
  eventDate: { color: '#888', fontSize: 12 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  seeAll: { color: '#00ff88' },
  placeCard: { flexDirection: 'row', backgroundColor: '#1a1a1a', borderRadius: 15, padding: 10, marginBottom: 15 },
  placeImagePlaceholder: { width: 80, height: 80, backgroundColor: '#333', borderRadius: 10 },
  placeInfo: { marginLeft: 15, justifyContent: 'center' },
  placeName: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  ratingRow: { flexDirection: 'row' },
  rating: { color: '#ffcc00', marginRight: 10 },
  distance: { color: '#888' },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', bottom: 20, left: 20, right: 20, backgroundColor: '#222', padding: 15, borderRadius: 25 },
  navText: { color: '#888', fontWeight: 'bold' }
});

export default HomeScreen;
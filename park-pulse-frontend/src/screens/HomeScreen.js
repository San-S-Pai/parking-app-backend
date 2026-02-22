import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, SafeAreaView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location'; 

// --- IMPORT THE GLOBAL BRAIN ---
import { AuthContext } from '../context/AuthContext';

export default function HomeScreen({ route, navigation }) {
  const [currentCity, setCurrentCity] = useState(route.params?.cityName || 'Bengaluru');
  const [malls, setMalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [gettingLocation, setGettingLocation] = useState(false);

  const { user } = useContext(AuthContext); 
  
  let displayName = 'Driver';
  if (user && user !== "Guest") {
    if (user.toLowerCase() === 'jashanpratul.8b@gmail.com') {
      displayName = 'Jashan Pratul';
    } else {
      displayName = user.split('@')[0]; 
    }
  }

  // --- THE GPS LOCATE ME FUNCTION ---
  const locateMe = async () => {
    setGettingLocation(true);
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Allow location access to find spots near you.');
        setGettingLocation(false);
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      
      let geo = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });

      if (geo.length > 0) {
        const foundCity = geo[0].city || geo[0].subregion || geo[0].region;
        setCurrentCity(foundCity);
      }
    } catch (error) {
      console.error("GPS Error:", error);
      Alert.alert('GPS Error', 'Could not fetch your location right now.');
    }
    setGettingLocation(false);
  };

  useEffect(() => {
    // --- WIRED DIRECTLY TO YOUR LAPTOP ---
    fetch(`http://10.22.9.136:5000/api/parking/malls/${currentCity}`)
      .then((response) => response.json())
      .then((data) => {
        setMalls(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching malls:", error);
        setLoading(false); 
      });
  }, [currentCity]); 

  const renderMallCard = ({ item }) => (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Booking', { mall: item })}>
      <LinearGradient colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.03)']} style={styles.mallCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.mallName}>{item.name}</Text>
          <Ionicons name="chevron-forward-circle" size={24} color="#00E676" />
        </View>
        <Text style={styles.mallAddress}>
          <Ionicons name="location-outline" size={14} color="#aaa" /> {item.address}
        </Text>
        <View style={styles.priceContainer}>
          <View style={styles.tag}>
            <Ionicons name="pricetag-outline" size={16} color="#00E676" style={{marginRight: 5}} />
            <Text style={styles.priceText}>₹{item.pricePerHour} / hr</Text>
          </View>
          <View style={[styles.tag, { backgroundColor: 'rgba(255,255,255,0.1)' }]}>
            <Text style={styles.slotsText}>{item.availableSlots || '12'} Slots Left</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#0F172A', '#020617', '#000000']} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, {displayName} 👋</Text>
            
            <TouchableOpacity 
              style={styles.locationBadge} 
              onPress={locateMe}
              disabled={gettingLocation}
            >
              {gettingLocation ? (
                <ActivityIndicator size="small" color="#00E676" />
              ) : (
                <Ionicons name="navigate-circle" size={18} color="#00E676" />
              )}
              <Text style={styles.cityText}>
                {gettingLocation ? "Locating..." : currentCity}
              </Text>
            </TouchableOpacity>

          </View>
          
          <View style={styles.avatar}>
            <Ionicons name="person" size={20} color="#00E676" />
          </View>
        </View>

        <Text style={styles.subHeader}>Premium Spots Near You</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#00E676" style={{ marginTop: 50 }} />
        ) : malls.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Ionicons name="map-outline" size={60} color="#334155" />
            <Text style={styles.noDataText}>No spots listed in {currentCity} yet.</Text>
            <Text style={styles.noDataSub}>Try searching a different area.</Text>
          </View>
        ) : (
          <FlatList
            data={malls}
            keyExtractor={(item) => item._id}
            renderItem={renderMallCard}
            contentContainerStyle={{ paddingBottom: 30 }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, marginBottom: 30 },
  greeting: { color: 'white', fontSize: 32, fontWeight: '900', letterSpacing: 0.5 },
  
  locationBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0, 230, 118, 0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginTop: 8, alignSelf: 'flex-start', borderWidth: 1, borderColor: 'rgba(0, 230, 118, 0.3)' },
  cityText: { color: '#00E676', fontSize: 14, fontWeight: 'bold', marginLeft: 6 },
  
  avatar: { width: 45, height: 45, borderRadius: 25, backgroundColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(0,230,118,0.3)' },
  
  subHeader: { color: '#E2E8F0', fontSize: 20, fontWeight: '600', marginBottom: 20 },
  
  mallCard: { padding: 20, borderRadius: 24, marginBottom: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  mallName: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  mallAddress: { color: '#94A3B8', fontSize: 14, marginTop: 8, marginBottom: 20 },
  
  priceContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  tag: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,230,118,0.1)', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 12 },
  priceText: { color: '#00E676', fontSize: 16, fontWeight: 'bold' },
  slotsText: { color: 'white', fontSize: 14, fontWeight: '600' },

  emptyContainer: { alignItems: 'center', marginTop: 50 },
  noDataText: { color: '#E2E8F0', fontSize: 16, fontWeight: 'bold', marginTop: 15 },
  noDataSub: { color: '#64748B', fontSize: 14, marginTop: 5 },
});
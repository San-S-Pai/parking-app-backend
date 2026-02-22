import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function BookingScreen({ route, navigation }) {
  const { mall } = route.params;
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [hours, setHours] = useState(1);

  // Fake slots for now
  const slots = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const totalPrice = mall.pricePerHour * hours;

  const handleProceed = () => {
    if (!selectedSlot) {
      alert("Please select a parking slot!");
      return;
    }
    navigation.navigate('Payment', { mall, slot: selectedSlot, hours, totalPrice });
  };

  return (
    <LinearGradient colors={['#0F172A', '#020617', '#000000']} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        
        {/* Sleek Custom Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#00E676" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Reserve Spot</Text>
          <View style={{ width: 40 }} /> {/* Spacer to keep title centered */}
        </View>

        <ScrollView contentContainerStyle={{ padding: 20 }} showsVerticalScrollIndicator={false}>
          
          {/* Glassmorphism Mall Info Card */}
          <LinearGradient colors={['rgba(255,255,255,0.08)', 'rgba(255,255,255,0.03)']} style={styles.infoCard}>
            <Text style={styles.mallName}>{mall.name}</Text>
            <Text style={styles.mallAddress}>
              <Ionicons name="location-outline" size={14} color="#aaa" /> {mall.address}
            </Text>
            <View style={styles.tag}>
              <Ionicons name="time-outline" size={16} color="#00E676" style={{marginRight: 5}} />
              <Text style={styles.priceText}>₹{mall.pricePerHour} / hour</Text>
            </View>
          </LinearGradient>

          {/* Interactive Slot Grid */}
          <Text style={styles.sectionTitle}>Select a Slot</Text>
          <View style={styles.slotContainer}>
            {slots.map((slot) => (
              <TouchableOpacity 
                key={slot} 
                style={[styles.slotButton, selectedSlot === slot && styles.slotButtonSelected]}
                onPress={() => setSelectedSlot(slot)}
              >
                <Text style={[styles.slotText, selectedSlot === slot && styles.slotTextSelected]}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Smooth Duration Counter */}
          <Text style={styles.sectionTitle}>Duration</Text>
          <View style={styles.durationContainer}>
            <TouchableOpacity onPress={() => setHours(Math.max(1, hours - 1))} style={styles.circleButton}>
              <Ionicons name="remove" size={24} color="white" />
            </TouchableOpacity>
            
            <Text style={styles.hoursText}>{hours} {hours === 1 ? 'Hour' : 'Hours'}</Text>
            
            <TouchableOpacity onPress={() => setHours(hours + 1)} style={styles.circleButton}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>

        </ScrollView>

        {/* Sticky Premium Checkout Footer */}
        <View style={styles.footer}>
          <View>
            <Text style={styles.totalLabel}>Total Price</Text>
            <Text style={styles.totalPrice}>₹{totalPrice}</Text>
          </View>
          <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
            <Text style={styles.proceedButtonText}>Continue</Text>
            <Ionicons name="arrow-forward" size={20} color="#121212" style={{marginLeft: 5}} />
          </TouchableOpacity>
        </View>

      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 },
  backButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: 'rgba(0,230,118,0.3)' },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  
  infoCard: { padding: 20, borderRadius: 24, marginBottom: 30, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  mallName: { color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
  mallAddress: { color: '#94A3B8', fontSize: 14, marginBottom: 15 },
  tag: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,230,118,0.1)', paddingVertical: 8, paddingHorizontal: 15, borderRadius: 12, alignSelf: 'flex-start' },
  priceText: { color: '#00E676', fontSize: 16, fontWeight: 'bold' },

  sectionTitle: { color: '#E2E8F0', fontSize: 18, fontWeight: '600', marginBottom: 15 },
  
  slotContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 30 },
  slotButton: { width: '30%', backgroundColor: 'rgba(255,255,255,0.05)', paddingVertical: 15, borderRadius: 15, alignItems: 'center', marginBottom: 15, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  slotButtonSelected: { backgroundColor: '#00E676', borderColor: '#00E676', shadowColor: '#00E676', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.4, shadowRadius: 10, elevation: 5 },
  slotText: { color: '#aaa', fontSize: 18, fontWeight: 'bold' },
  slotTextSelected: { color: '#121212', fontSize: 18, fontWeight: 'bold' },

  durationContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(255,255,255,0.05)', padding: 15, borderRadius: 20, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', marginBottom: 20 },
  circleButton: { width: 45, height: 45, borderRadius: 25, backgroundColor: 'rgba(255,255,255,0.1)', justifyContent: 'center', alignItems: 'center' },
  hoursText: { color: 'white', fontSize: 20, fontWeight: 'bold' },

  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: 'rgba(0,0,0,0.5)', borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.1)' },
  totalLabel: { color: '#94A3B8', fontSize: 14 },
  totalPrice: { color: '#00E676', fontSize: 28, fontWeight: 'bold' },
  proceedButton: { flexDirection: 'row', backgroundColor: '#00E676', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 15, alignItems: 'center' },
  proceedButtonText: { color: '#121212', fontSize: 18, fontWeight: 'bold' },
});
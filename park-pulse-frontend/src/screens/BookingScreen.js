import { CaretLeft } from 'phosphor-react-native';
import { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const dates = ['Mon 15', 'Tue 16', 'Wed 17', 'Thu 18', 'Fri 19'];
const timeSlots = [
  '5:30 PM', '5:40 PM', '5:50 PM', '6:00 PM', 
  '6:10 PM', '6:20 PM', '6:30 PM', '6:40 PM',
  '7:00 PM', '7:10 PM', '7:20 PM', '7:30 PM'
];

const BookingScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('Thu 18');
  const [selectedSlot, setSelectedSlot] = useState('5:30 PM');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CaretLeft size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Select Date & Time</Text>
        <View style={{ width: 28 }} /> 
      </View>

      {/* Date Selector */}
      <View style={styles.dateContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dates.map((date, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.dateBox, selectedDate === date && styles.activeDateBox]}
              onPress={() => setSelectedDate(date)}
            >
              <Text style={[styles.dateText, selectedDate === date && styles.activeDateText]}>
                {date.split(' ')[0]}
              </Text>
              <Text style={[styles.dateNum, selectedDate === date && styles.activeDateText]}>
                {date.split(' ')[1]}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Text style={styles.sectionTitle}>Available Slots</Text>

      {/* Time Slots Grid */}
      <FlatList 
        data={timeSlots}
        numColumns={3}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.slotGrid}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.slot, selectedSlot === item && styles.activeSlot]}
            onPress={() => setSelectedSlot(item)}
          >
            <Text style={[styles.slotText, selectedSlot === item && styles.activeSlotText]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Bottom Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalLabel}>Total Amount:</Text>
          <Text style={styles.totalPrice}>₹30.00</Text>
        </View>
        <TouchableOpacity 
          style={styles.proceedButton}
          onPress={() => navigation.navigate('Payment')}
        >
          <Text style={styles.proceedText}>Proceed {'>'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', paddingTop: 50 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 20 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  dateContainer: { flexDirection: 'row', paddingLeft: 20, marginBottom: 30 },
  dateBox: { backgroundColor: '#222', padding: 15, borderRadius: 12, marginRight: 15, alignItems: 'center', width: 70 },
  activeDateBox: { backgroundColor: '#00ff88' },
  dateText: { color: '#888', fontSize: 14 },
  dateNum: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 5 },
  activeDateText: { color: '#000' },
  sectionTitle: { color: '#fff', fontSize: 18, marginLeft: 20, marginBottom: 15, fontWeight: 'bold' },
  slotGrid: { paddingHorizontal: 10 },
  slot: { flex: 1, backgroundColor: '#222', margin: 8, padding: 15, borderRadius: 10, alignItems: 'center' },
  activeSlot: { backgroundColor: '#00ff88' },
  slotText: { color: '#fff' },
  activeSlotText: { color: '#000', fontWeight: 'bold' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, backgroundColor: '#1a1a1a', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', bottom: 0, width: '100%' },
  totalLabel: { color: '#888', fontSize: 14 },
  totalPrice: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  proceedButton: { backgroundColor: '#00ff88', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 25 },
  proceedText: { color: '#000', fontWeight: 'bold', fontSize: 16 }
});

export default BookingScreen;
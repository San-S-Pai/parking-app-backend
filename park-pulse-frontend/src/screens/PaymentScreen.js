import { Bank, CaretLeft, CreditCard, QrCode } from 'phosphor-react-native';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PaymentScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('UPI');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <CaretLeft size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.label}>Select Payment Method</Text>
        
        {/* UPI Option */}
        <TouchableOpacity 
          style={[styles.option, selectedMethod === 'UPI' && styles.activeOption]}
          onPress={() => setSelectedMethod('UPI')}
        >
          <View style={styles.row}>
            <QrCode size={24} color="#fff" />
            <Text style={styles.optionText}>UPI / GPay / PhonePe</Text>
          </View>
          <View style={styles.radio}>{selectedMethod === 'UPI' && <View style={styles.radioFill} />}</View>
        </TouchableOpacity>

        {/* Card Option */}
        <TouchableOpacity 
          style={[styles.option, selectedMethod === 'Card' && styles.activeOption]}
          onPress={() => setSelectedMethod('Card')}
        >
          <View style={styles.row}>
            <CreditCard size={24} color="#fff" />
            <Text style={styles.optionText}>Credit / Debit Card</Text>
          </View>
          <View style={styles.radio}>{selectedMethod === 'Card' && <View style={styles.radioFill} />}</View>
        </TouchableOpacity>

        {/* Net Banking Option */}
        <TouchableOpacity 
          style={[styles.option, selectedMethod === 'Net' && styles.activeOption]}
          onPress={() => setSelectedMethod('Net')}
        >
          <View style={styles.row}>
            <Bank size={24} color="#fff" />
            <Text style={styles.optionText}>Net Banking</Text>
          </View>
          <View style={styles.radio}>{selectedMethod === 'Net' && <View style={styles.radioFill} />}</View>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.totalText}>Total Amount: ₹30.00</Text>
        <TouchableOpacity 
          style={styles.payButton}
          onPress={() => navigation.navigate('Ticket')}
        >
          <Text style={styles.payText}>Pay ₹30.00</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', paddingTop: 50 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 30 },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  content: { paddingHorizontal: 20 },
  label: { color: '#888', marginBottom: 15 },
  option: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#222', padding: 20, borderRadius: 15, marginBottom: 15 },
  activeOption: { borderColor: '#00ff88', borderWidth: 1 },
  row: { flexDirection: 'row', alignItems: 'center' },
  optionText: { color: '#fff', fontSize: 16, marginLeft: 15 },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  radioFill: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#00ff88' },
  footer: { padding: 20, backgroundColor: '#1a1a1a', borderTopLeftRadius: 20, borderTopRightRadius: 20, position: 'absolute', bottom: 0, width: '100%' },
  totalText: { color: '#fff', textAlign: 'center', marginBottom: 15, fontSize: 16 },
  payButton: { backgroundColor: '#00ff88', padding: 15, borderRadius: 15, alignItems: 'center' },
  payText: { color: '#000', fontWeight: 'bold', fontSize: 18 }
});

export default PaymentScreen;
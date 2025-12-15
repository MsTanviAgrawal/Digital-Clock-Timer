
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const CountdownTimer = () => {
      const [inputSeconds, setInputSeconds] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [countdownRunning, setCountdownRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (countdownRunning && countdown > 0) {
      timer = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    }

    if (countdown === 0) {
      setCountdownRunning(false);
    }

    return () => clearInterval(timer);
  }, [countdownRunning, countdown]);

  const startCountdown = () => {
    const seconds = parseInt(inputSeconds);
    if (!seconds || seconds <= 0) return;

    setCountdown(seconds);
    setCountdownRunning(true);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Countdown Timer</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter seconds"
          placeholderTextColor="#94a3b8"
          keyboardType="numeric"
          value={inputSeconds}
          onChangeText={setInputSeconds}
        />

        <Text style={styles.timeText}>{countdown}s</Text>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={startCountdown}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={() => {
              setCountdownRunning(false);
              setCountdown(0);
            }}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CountdownTimer

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingHorizontal: 16,
    paddingVertical: '30%',
  },
  card: {
    backgroundColor: '#020617',
    padding: 20,
    borderRadius: 16,
    marginBottom: 18,
    width: width - 32,
    alignSelf: 'center',
    gap: 10,
  },
  sectionTitle: {
    color: '#e5e7eb',
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
   input: {
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 12,
    textAlign: 'center',
    color: '#e5e7eb',
    fontSize: 16,
  },
  timeText: {
    fontSize: 32,
    color: '#22c55e',
    textAlign: 'center',
    marginBottom: 14,
    fontWeight: 'bold',
  },
   row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    minWidth: 120,
    alignItems: 'center',
  },
   buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  resetButton: {
    backgroundColor: '#dc2626',
  },
})

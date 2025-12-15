import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Digital Clock</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Current Time</Text>
        <Text style={styles.timeText}>
          {time.toLocaleTimeString()}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DigitalClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#0f172a',
    paddingHorizontal: 16,
    paddingVertical: '30%',
  },
  title: {
    fontSize: 26,
    color: '#38bdf8',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#020617',
    paddingVertical: 28,
    paddingHorizontal: 16,
    borderRadius: 16,
    width: width - 32,
    alignSelf: 'center',
    elevation: 4, // Android shadow (Pixel 8)
  },
  sectionTitle: {
    color: '#e5e7eb',
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: '600',
  },
  timeText: {
    fontSize: 34,
    color: '#22c55e',
    textAlign: 'center',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

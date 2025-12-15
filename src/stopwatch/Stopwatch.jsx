import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const { width } = Dimensions.get('window');

const Stopwatch = () => {
     /* ---------------- STOPWATCH ---------------- */
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setStopwatchTime(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatStopwatch = seconds => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };


  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Stopwatch</Text>
        <Text style={styles.timeText}>
          {formatStopwatch(stopwatchTime)}
        </Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsRunning(!isRunning)}>
            <Text style={styles.buttonText}>
              {isRunning ? 'Stop' : 'Start'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={() => {
              setIsRunning(false);
              setStopwatchTime(0);
            }}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Stopwatch

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
  },
  sectionTitle: {
    color: '#e5e7eb',
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'center',
    fontWeight: '600',
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
  resetButton: {
    backgroundColor: '#dc2626',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },

})
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

const App = () => {
  /* ---------------- DIGITAL CLOCK ---------------- */
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clockInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(clockInterval);
  }, []);

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
  /* ---------------- COUNTDOWN TIMER ---------------- */
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

  /* ---------------- UI ---------------- */
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Digital Clock / Timer</Text>

      {/* DIGITAL CLOCK */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Digital Clock</Text>
        <Text style={styles.timeText}>{time.toLocaleTimeString()}</Text>
      </View>

      {/* STOPWATCH */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Stopwatch</Text>
        <Text style={styles.timeText}>{formatStopwatch(stopwatchTime)}</Text>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsRunning(!isRunning)}
          >
            <Text style={styles.buttonText}>
              {isRunning ? 'Stop' : 'Start'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={() => {
              setIsRunning(false);
              setStopwatchTime(0);
            }}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* COUNTDOWN TIMER */}
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
            }}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

/* ---------------- STYLES (Pixel 8 Optimized) ---------------- */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 26,
    color: '#38bdf8',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
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
});

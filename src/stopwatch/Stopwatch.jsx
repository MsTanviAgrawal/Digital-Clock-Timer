
// import { StyleSheet, Text, View, TouchableOpacity,
//   TextInput,
//   SafeAreaView, } from 'react-native'
// import React, { useEffect, useState } from 'react';

// const Stopwatch = () => {
// const [time, setTime] = useState(new Date());

// useEffect(() => {
//     const clockInterval = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(clockInterval);
//   }, []);


//   const [stopwatchTime, setStopwatchTime] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);

//   useEffect(() => {
//     let interval = null;
//     if (isRunning) {
//       interval = setInterval(() => {
//         setStopwatchTime(prev => prev + 1);
//       }, 1000);
//     } else {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [isRunning]);

//   const formatStopwatch = seconds => {
//     const hrs = Math.floor(seconds / 3600);
//     const mins = Math.floor((seconds % 3600) / 60);
//     const secs = seconds % 60;

//     return `${hrs.toString().padStart(2, '0')}:${mins
//       .toString()
//       .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   const [inputSeconds, setInputSeconds] = useState('');
//   const [countdown, setCountdown] = useState(0);
//   const [countdownRunning, setCountdownRunning] = useState(false);

//   useEffect(() => {
//     let timer = null;
//     if (countdownRunning && countdown > 0) {
//       timer = setInterval(() => {
//         setCountdown(prev => prev - 1);
//       }, 1000);
//     } else if (countdown === 0) {
//       setCountdownRunning(false);
//     }

//     return () => clearInterval(timer);
//   }, [countdownRunning, countdown]);

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.title}>Digital Clock / Timer</Text>

//       {/* DIGITAL CLOCK */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>Digital Clock</Text>
//         <Text style={styles.timeText}>
//           {time.toLocaleTimeString()}
//         </Text>
//       </View>

//       {/* STOPWATCH */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>Stopwatch</Text>
//         <Text style={styles.timeText}>
//           {formatStopwatch(stopwatchTime)}
//         </Text>

//         <View style={styles.row}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => setIsRunning(!isRunning)}>
//             <Text style={styles.buttonText}>
//               {isRunning ? 'Stop' : 'Start'}
//             </Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.button, styles.resetButton]}
//             onPress={() => {
//               setIsRunning(false);
//               setStopwatchTime(0);
//             }}>
//             <Text style={styles.buttonText}>Reset</Text>
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* COUNTDOWN TIMER */}
//       <View style={styles.card}>
//         <Text style={styles.sectionTitle}>Countdown Timer</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Enter seconds"
//           keyboardType="numeric"
//           value={inputSeconds}
//           onChangeText={setInputSeconds}
//         />

//         <Text style={styles.timeText}>{countdown}s</Text>

//         <View style={styles.row}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => {
//               setCountdown(parseInt(inputSeconds) || 0);
//               setCountdownRunning(true);
//             }}>
//             <Text style={styles.buttonText}>Start</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.button, styles.resetButton]}
//             onPress={() => {
//               setCountdownRunning(false);
//               setCountdown(0);
//             }}>
//             <Text style={styles.buttonText}>Reset</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default Stopwatch

// const styles = StyleSheet.create({
//       container: {
//     flex: 1,
//     backgroundColor: '#0f172a',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     color: '#38bdf8',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   card: {
//     backgroundColor: '#020617',
//     padding: 20,
//     borderRadius: 12,
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     color: '#e2e8f0',
//     fontSize: 18,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
//   timeText: {
//     fontSize: 28,
//     color: '#22c55e',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
//   button: {
//     backgroundColor: '#2563eb',
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     borderRadius: 8,
//   },
//   resetButton: {
//     backgroundColor: '#dc2626',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   input: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 10,
//     textAlign: 'center',
//   },
// })
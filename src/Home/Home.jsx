import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <View style={styles.buttonWrapper}>
        <Button
          title="Digital Clock"
          onPress={() => navigation.navigate('DigitalClock')}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Stopwatch"
          onPress={() => navigation.navigate('Stopwatch')}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title="Countdown Timer"
          onPress={() => navigation.navigate('CountdownTimer')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonWrapper: {
    marginVertical: 8,
  },
});

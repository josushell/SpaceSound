import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 

export default function Mainloading() {
  return (
    <LinearGradient colors={["#0f2027","#203a43","#2c5364"]} style={styles.container}>
      <Ionicons name="ios-planet-outline" size={35} color="white" />
      <Text style={styles.Text}>Space Sound</Text>
      <Text style={styles.Text}>version 1.0.0</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color: "white",
    fontSize: 25,
    fontWeight: "300",
    justifyContent: "center",
    alignItems: "center",
  },
  
});
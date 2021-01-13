import React,{Component} from 'react';
import { Animated,StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 

export default function Mainloading() {
  return (
    <LinearGradient colors={["#292e49","#536976","#292e49"]} style={styles.container}>
      <Ionicons name="ios-planet-outline" size={80} color="white" />
      <Text style={styles.Text}>ASTRO Phenom</Text>
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:10,
    justifyContent: "center",
    alignItems: "center",
  },
  Text: {
    color: "white",
    fontSize: 28,
    fontWeight: "400",
    textAlign:"center",
    margin: 10
  }
});
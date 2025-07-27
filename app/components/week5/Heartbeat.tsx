import { FontAwesome } from '@expo/vector-icons'; // ถ้าใช้ Expo
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Bmit() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(prevpulse => prevpulse + 1);
  };

  return (
    <View style={styles.container}>
        
      <TouchableOpacity style={styles.button} onPress={handlePress}>       
        <FontAwesome name="heart" size={48} color="red" />
        
      </TouchableOpacity>
      <Text style={styles.text}> {count} ครั้ง</Text>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    padding: 16,
  },
  text: {
    marginTop: 16,
    fontSize: 20,
  },
});
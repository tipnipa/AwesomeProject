import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Signup() {
  return (
    <View style={{ padding: 20, backgroundColor: '#f0f8ff' }}>
      <Text style={{ fontSize: 20, color: '#333', marginBottom: 10 }}>Sign up Form</Text>

      <TextInput
        style={{
          fontSize: 18,
          marginTop: 10,
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 5,
          color: '#000',
        }}
        placeholder="Input ID"
        placeholderTextColor="#888"
      />

      <TextInput
        style={{
          fontSize: 18,
          marginTop: 10,
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 5,
          color: '#000',
        }}
        placeholder="Input Email"
        placeholderTextColor="#888"
      />

      <TextInput
        style={{
          fontSize: 18,
          marginTop: 10,
          marginBottom: 20,
          backgroundColor: '#ffffff',
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 8,
          borderRadius: 5,
          color: '#000',
        }}
        placeholder="Input Address"
        placeholderTextColor="#888"
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#ff9800', // สีส้ม
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#fff', fontSize: 18 }}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

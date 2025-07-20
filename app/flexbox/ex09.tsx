import React from 'react';
import { View } from 'react-native';

export default function Ex09() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      
      {/* แถวที่ 1 */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between',width: '100%'  }}>
        <View style={{ backgroundColor: '#50E3C2', width: 100, height: 100 }} />
        <View style={{ backgroundColor: '#50E3C2', width: 100, height: 100 }} />
        <View style={{ backgroundColor: '#50E3C2', width: 100, height: 100 }} />
      </View>

      {/* แถวที่ 2 */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <View style={{ backgroundColor: '#4a90e2', width: 100, height: 100 }} />
        <View style={{ backgroundColor: '#4a90e2', width: 100, height: 100 }} />
        <View style={{ backgroundColor: '#4a90e2', width: 100, height: 100 }} />
      </View>

      {/* แถวที่ 3 */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <View style={{ backgroundColor: '#9013fe', width: 100, height: 100 }} />
        <View style={{ backgroundColor: '#9013fe', width: 100, height: 100 }} />
        <View style={{ backgroundColor: '#9013fe', width: 100, height: 100 }} />
      </View>

    </View>
  );
}

import React from 'react';
import { Text, View } from 'react-native';

export default function Section3() {
    return (

        <View style={{ padding : 10  ,backgroundColor: "#ffffff",borderRadius: 5,marginTop: 10,margin:10 }}>
            {/* View ก้อนที่ 1  */}
            
            <View style={{ flexDirection: "row", padding: 10 }}>
                <View style={{ width: 50, height: 50, borderRadius: 50 / 2 ,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>                
                <Text style={{ color: "white" }}>9.5</Text>
            </View>                 
                 
            <View style={{ paddingLeft: 10 }}>
                 <Text style={{ fontSize: 20, color:'red' }}>Excellent</Text>
                <Text style={{ color: "gray" }}>See 801 reviews</Text>
            </View>
            </View>
        </View>

            
         
    );
}
import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        
            <View style={{ margin : 10 , padding : 10, borderWidth : 1, borderColor : 'gray', borderRadius : 10 }}>
             <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20, }}>Room Type</Text>
            </View>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 80, height: 90, borderRadius:10 }} source={require("../../assets/week3/room-8.jpg")} />
                <View style={{ paddingLeft: 10,padding:10 }}>
                    <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
                    <Text style={{ color: "red" }}>$399.99</Text>
                    <Text style={{ color: "blue" }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
            {/* View ก้อนที่ 2 */}
            
           
        </View>    
    );
}

import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section6() {
    return (
        
            <View style={{alignItems:'center', margin : 10 , padding : 10, borderWidth : 1, borderColor : 'gray', borderRadius : 10 }}>
        
             {/* View ก้อนที่ 3 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 }}>Location</Text>
                <Text style={{ color : '#444444' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…</Text>
            </View>           
            
            {/* View ก้อนที่ 2 */}
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../../assets/week3/map.jpg")} />
            </View>
           
        </View>    
    );
}

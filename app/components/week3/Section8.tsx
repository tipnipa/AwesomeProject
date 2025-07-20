import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
export default function Section8() {
    return (
            <View style={{ margin : 10 , padding : 5, borderWidth : 1, borderColor : 'gray', borderRadius : 10 }}>
            
            
            <View style={{ marginTop : 5 }}>
                <Text style={{ fontSize : 13 }}>Price</Text>
            </View>
            
            <View style={{ flexDirection : "row", justifyContent : "space-between", marginTop : 5  }}>
                <View style={{ flexDirection : "row" }}>
                    
                     <Text  style={{ fontSize : 20 , color : 'red'}} >$399.99</Text>                     
                </View>
                <View>
                    
            <TouchableOpacity style={{ backgroundColor: 'red', padding: 12, borderRadius: 8 }}>
               <Text style={{ color: '#fff', fontSize: 16 }}>Book Now</Text>
            </TouchableOpacity>                   
                </View>
            </View>
            
           <View style={{ marginTop : -15 }}>
                <Text style={{ fontSize : 14 }}>AVG/Night</Text>
            </View>
        </View>    
    );
}

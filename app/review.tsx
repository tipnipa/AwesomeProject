import React from 'react';
import { Text, View } from 'react-native';

export default function () {
    return (
        <View style={{ flex: 1, marginTop: -35, alignItems: "center" }}>                      
                            
        <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 10 }}>Reviews </Text>

        <View style={{ flex: 1, marginTop: 1, alignSelf: "flex-end" }}>
                <Text style={{ fontSize: 17, color:'red' }}>Replay</Text> 
        </View>

        <View style={{ padding : 10  ,backgroundColor: "#ffffff",borderRadius: 5,marginTop: 10,margin:10 }}>
                 
              
          <View style={{ flexDirection: "row", padding: 10 }}>
             <View style={{ width: 50, height: 50, borderRadius: 50 / 2 ,backgroundColor:'#ffffff',justifyContent:'center',alignItems:'center'}}>                
             <Text style={{ color: "red" }}>4.7</Text>
                    </View>                 
                         
                    <View style={{ paddingLeft: 10 }}>
                         <Text style={{ fontSize: 20, color:'red' }}></Text>
                        <Text style={{ color: "gray" }}></Text>
                    </View>
                


                  
             </View>
         </View>
         </View>
         
                
    );
}

                
                

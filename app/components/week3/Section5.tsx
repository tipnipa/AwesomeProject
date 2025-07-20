import React from "react";
import { View } from "react-native";
import MyIcon from "./MyIcon";


export default function Section5() {
  return (

    <View style={{alignItems:'center', margin : 10 , padding : 10, borderWidth : 1, borderColor : 'gray', borderRadius : 10 }}>
      {/* View ก้อนที่ 1 */}
      
      {/* View ก้อนที่ 2 */}
      <View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="Wifi" name="wifi" size={30} color="#1E90FF" />
        <MyIcon title="Coffee" name="coffee" size={30} color="#1E90FF" />
        <MyIcon title="Bath" name="bath" size={30} color="#1E90FF" />
        <MyIcon title="Car" name="car" size={30} color="#1E90FF" />
        <MyIcon title="Paw" name="paw" size={30} color="#1E90FF" />

      </View>
      
    </View>
  );
}

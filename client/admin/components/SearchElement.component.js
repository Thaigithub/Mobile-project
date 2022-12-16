import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const DATA = {
  imageURI: require("../assets/house_real.png"),
  rating: "4.7",
  price: "5 triệu VND/tháng",
  name: "Phòng cho thuê đường D2, Quận Bình Thạnh",
  address: "16 Nguyễn Gia Trí, Phường 21, Quận Bình Thạnh",
};

export default function SearchElement(props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image style={styles.image} source={DATA.imageURI} />
      </View>
      <View style={styles.infoBox}>
        <Text>⭐ {DATA.rating}</Text>
        <Text style={{ color: "red" }}>💲 {DATA.price}</Text>
        <Text style={{ fontWeight: "bold" }}>{DATA.name}</Text>
        <Text style={{ fontStyle: "italic", fontWeight: "300" }}>
          {DATA.address}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
  },
  imageBox: {
    flex: 1,
  },
  infoBox: {
    flex: 2,
    textAlign: "center",
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
});

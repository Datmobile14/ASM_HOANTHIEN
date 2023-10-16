import { StyleSheet, Text, View } from "react-native";
import React from "react";

const NguoiDung = (props) => {
  const { dulieu } = props;
  // console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.viewBox}>
        <Text style={{ marginStart: 10, marginTop: 3 }}>
          Họ tên: {dulieu?.hoten}
        </Text>
        <Text style={styles.text}>Số điện thoại: {dulieu?.sodienthoai}</Text>
      </View>
    </View>
  );
};

export default NguoiDung;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  viewBox: {
    height: 50,
    backgroundColor: "gray",
    borderRadius: 10,
    borderWidth: 1,
    margin: 5,
  },
  text: {
    marginStart: 10,
  },
});

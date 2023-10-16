import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttons}
        onPress={() => {
          navigation.navigate("DangNhap");
        }}
      >
        <Text style={styles.buttonText}>Đăng xuất</Text>
      </Pressable>
      <Pressable style={styles.buttons}>
        <Text style={styles.buttonText}>Đổi mật khẩu</Text>
      </Pressable>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  buttons: {
    borderRadius: 10,
    marginTop: 30,
    height: 48,
    backgroundColor: "#1877F2",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});

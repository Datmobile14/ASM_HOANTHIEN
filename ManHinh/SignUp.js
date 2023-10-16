import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.dangky}>Đăng ký</Text>
      <Text style={styles.textUPR}>UserName: </Text>
      <TextInput placeholder="Nhập username" style={styles.textinput} />
      <Text style={styles.textUPR}>Password: </Text>
      <TextInput placeholder="Nhập mật khẩu" style={styles.textinput} />
      <Text style={styles.textUPR}>RePassword: </Text>
      <TextInput placeholder="Nhập lại mật khẩu" style={styles.textinput} />

      <Pressable
        style={styles.buttons}
        onPress={() => {
          navigation.navigate("DangNhap");
        }}
      >
        <Text style={styles.buttonText}>Đăng ký</Text>
      </Pressable>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    flexDirection: "column",
  },
  dangky: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  textinput: {
    borderRadius: 10,
    height: 50,
    borderWidth: 1,
    margin: 15,
    padding: 10,
  },
  textUPR: {
    fontSize: 12,
    fontWeight: "bold",
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

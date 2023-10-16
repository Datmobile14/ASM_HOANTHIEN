import {
  StyleSheet,
  Text,
  Alert,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import { useState } from "react";
import axios from "axios";


const Login = ({ navigation }) => {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const handleSignIn = () => {
    axios
      .get("https://65267575917d673fd76c4feb.mockapi.io/API/users")
      .then(function (response) {
        // Xử lý dữ liệu trả về từ API (response.data)

        const dataHandle = response.data;
        console.log(index);
        const index = dataHandle.findIndex(
          (element) => element.email === mail && element.pass === pass
        );
        if (index >= 0) {
          if (dataHandle[index].isAdmin) {
            return navigation.navigate("TinTuc");
          } else {
            return navigation.navigate("TinTuc");
          }
        } else {
          Alert.alert("Thông báo sai thoong tin", "Đăng nhập không thành công");
          return;
        }
       
       
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <View style={styles.containerLogin}>
      <Text style={styles.texts}>Đăng Nhập</Text>
      <Text style={styles.textUserName}>UserName:</Text>
      <TextInput style={styles.textInput}  onChangeText={(text) => setMail(text)}/>
      <Text style={styles.textUserName}>Password:</Text>
      <TextInput style={styles.textInput}   onChangeText={(text) => setPass(text)}/>

      {/* Pressable là một thành phần (component) cho phép xử lý sự kiện nhấn (press) từ người dùng trên một phần tử (element) nhất định. 
      Pressable cũng hỗ trợ xử lý các sự kiện tương tác khác như hover, focus, và blur. 
      Bằng cách sử dụng Pressable, bạn có thể tạo ra các thành phần như nút (button) hoặc hình ảnh (image) có thể được nhấn để thực hiện một hành động nào đó. */}
      <Pressable
        style={styles.buttonDangNhap}
        onPress={() => {
          handleSignIn();
        }}
      >
        <Text style={styles.textButton}>Đăng Nhập</Text>
      </Pressable>

      {/* <View style={styles.viewDangKy}>
        <Text>Chưa có tài khoản?</Text>
        <Text style={{ color: "blue", marginStart: 5 }} onPress={}>
          Đăng ký
        </Text>
      </View> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    marginStart: 10,
    marginEnd: 10,
    flexDirection: "column",
    marginTop: 30,
  },
  texts: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    color: "#050505",
    marginBottom: 50,
  },
  textUserName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textInput: {
    height: 48,
    borderRadius: 10,
    borderWidth: 1,
    margin: 15,
    padding: 10,
  },
  viewDangKy: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  buttonDangNhap: {
    borderRadius: 10,
    marginTop: 30,
    height: 48,
    backgroundColor: "#1877F2",
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

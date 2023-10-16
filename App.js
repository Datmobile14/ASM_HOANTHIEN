import { StyleSheet, Text, View } from "react-native";
import Login from "./ManHinh/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListNews from "./ManHinh/ListNews";
import SignUp from "./ManHinh/SignUp";
import NewsChiTiet from "./ManHinh/NewsChiTiet";
import NguoiDung from "./ManHinh/NguoiDung";
import Settings from "./ManHinh/Settings";
import { Ionicons } from "@expo/vector-icons";
import ListPerson from "./ManHinh/ListPerson";
import AddPost from "./ManHinh/AddPost";

// quản lý các màn hình
const stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="DangNhap">
        <stack.Screen
          name="DangNhap"
          component={Login}
          options={{ title: "Đăng Nhập" }}
        />
        <stack.Screen
          name="TinTuc"
          component={TabNavi}
          options={{ title: "Tin Tức", headerShown: false }}
        />
        <stack.Screen
          name="dangky"
          component={SignUp}
          options={{ title: "Đăng Ký" }}
        />
        <stack.Screen
          name="tintucchitiet"
          component={NewsChiTiet}
          options={{ title: "Chi Tiết Tin Tức" }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const TabNavi = () => {
  return (
    <tab.Navigator>
      <tab.Screen
        name="news"
        component={ListNews}
        options={{
          title: "Tin Tức",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="add"
        component={AddPost}
        options={{
          title: "Thêm",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="nguoidung"
        component={ListPerson}
        options={{
          title: "Người dùng",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <tab.Screen
        name="caidat"
        component={Settings}
        options={{
          title: "Cài đặt",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cog" size={size} color={color} />
          ),
        }}
      />
    </tab.Navigator>
  );
};

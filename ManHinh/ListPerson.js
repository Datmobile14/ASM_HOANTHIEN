import { ScrollView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import NguoiDung from "./NguoiDung";

const ListPerson = () => {
  return (
    <View>
      <FlatList
        data={fixcung}
        renderItem={({ item }) => <NguoiDung dulieu={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ListPerson;

const styles = StyleSheet.create({});

const fixcung = [
  {
    id: "1",
    hoten: "Nguyễn  Văn Đạt",
    sodienthoai: "0338547293",
  },
 
];

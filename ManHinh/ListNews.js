import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import NewsItem from "./NewsItem";
import { Alert } from "react-native";
import { ActivityIndicator } from "react-native";

const ListNews = ({ navigation, route }) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const api = "https://65267575917d673fd76c4feb.mockapi.io/API/new";

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {});
    setLoading(true);

    getData();

    return unsubscribe;
  }, [navigation]);

  const getData = async () => {
    try {
      const res = await fetch(api);
      const json = await res.json();

      setData(json);
      setLoading(false);
    } catch (err) {
      Alert.alert("Oops", err.message);
    }
  };

  return (
    // mỗi dữ liệu data này sẽ được renderItem 1 lần,
    //mỗi khi renderItem chạy tương đương với 1 item trong danh sách tương đương 1 newsItem
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flex: 1,
      }}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView style={{ height: "100%", width: "100%" }}>
          {data.map((item, index, arr) => {
            // console.log(item);
            return (
              <NewsItem
                nav={navigation}
                key={JSON.stringify(item)}
                tieude={item.title}
                noidung={item.content}
                images={item.image}
                object={JSON.stringify(item)}
              />
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default ListNews;

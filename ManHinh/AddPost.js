import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import { Alert } from "react-native";
import { ActivityIndicator } from "react-native";

const AddPost = () => {
  const width = Dimensions.get("window").width;
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const api = "https://65267575917d673fd76c4feb.mockapi.io/API/new";

  const handleAdd = async () => {
    // validate
    if (!title || !content || !url) {
      Alert.alert("Oops", "Các trường không được để trống!");
    } else {
      setLoading(true);

      const news = {
        title: title,
        content: content,
        image: url,
      };

      fetch(api, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(news),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          Alert.alert("Thành công", "Thêm mới thành công!");
        })
        .catch((err) => {
          Alert.alert("Oops", err.message);
        })
        .finally(() => {
          setTitle("");
          setContent("");
          setUrl("");
          setLoading(false);
        });
    }
  };

  return (
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
        <View>
          <TextInput
            style={{
              width: width - 20,
              height: 50,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 12,
              paddingHorizontal: 12,
              marginBottom: 10,
            }}
            placeholder="Tiêu đề bài viết"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
          <TextInput
            style={{
              width: width - 20,
              height: 50,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 12,
              paddingHorizontal: 12,
              marginBottom: 10,
            }}
            placeholder="Nội dung bài viết"
            value={content}
            onChangeText={(text) => setContent(text)}
          />
          <TextInput
            style={{
              width: width - 20,
              height: 50,
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 12,
              paddingHorizontal: 12,
              marginBottom: 10,
            }}
            placeholder="Link url hình ảnh"
            value={url}
            onChangeText={(text) => setUrl(text)}
          />
          <TouchableOpacity
            style={{
              width: width - 20,
              height: 60,
              marginTop: 10,
              backgroundColor: "#3FACF2",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 12,
            }}
            onPress={() => handleAdd()}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "700",
              }}
            >
              Thêm
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AddPost;

const styles = StyleSheet.create({});

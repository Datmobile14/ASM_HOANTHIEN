import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Share,
} from "react-native";
import React from "react";
import { Alert } from "react-native";

const NewsItem = (props) => {
  const ChuyenTrang = () => {
    props.nav.navigate("tintucchitiet", { item: props });
  };

  const _onShare = async () => {
    const object = JSON.parse(props.object);
    try {
      const result = await Share.share({
        message: object.content,
        url: object.image,
      })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });

      console.log("jaskfs");

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // navigation.navigate('Home', { user })
          alert("Share thanh cong");
        } else {
          alert("Share thanh cong");
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: props.images }} />
      <View style={styles.content}>
        <Text style={styles.tieude}>{props.tieude}</Text>
        <Text style={styles.noidung} numberOfLines={3}>
          {props.noidung}
        </Text>
      </View>
      <View style={styles.imageyeuthich}>
        <Image
          style={{ width: 20, height: 20, margin: 10 }}
          source={require("../imagess/heart.png")}
        />
        <TouchableOpacity onPress={() => _onShare()}>
          <Image
            style={{ width: 20, height: 20, margin: 10 }}
            source={require("../imagess/share.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 5,
    backgroundColor: "#C0C0C0",
  },
  imageStyle: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginStart: 30,
    marginTop: 10,
  },
  tieude: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  noidung: {
    fontSize: 10,
    fontStyle: "italic",
  },
  content: {
    width: Dimensions.get("window").width - 96 - 10,
    marginStart: 30,
  },
  chitiet: {
    textDecorationLine: "underline",
    fontSize: 10,
    color: "blue",
    fontStyle: "italic",
  },
  imageyeuthich: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginStart: 10,
    marginEnd: 10,
  },
});

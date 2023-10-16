import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const NewsChiTiet = ({ navigation, route }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.tieude}>{route.params.item.tieude}</Text>
      <Image
        style={{ width: 400, height: 400, marginTop: 10, marginBottom: 10 }}
        source={{ uri: route.params.item.images }}
      />
      <Text style={styles.noidung}>{route.params.item.noidung}</Text>
    </ScrollView>
  );
};

export default NewsChiTiet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
  },
  tieude: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
});

// const duLieuFixCung = [
//   {
//     _id: "1",
//     tieude: "Trung Quốc - Philippines đấu khẩu về dây phao gần Scarborough",
//     noidung:
//       "Trung Quốc cảnh báo Philippines 'không khiêu khích' sau khi nước này cắt dây phao gần bãi cạn Scarborough, còn Manila tuyên bố đây là quyền của mình",
//     images:
//       "https://i1-vnexpress.vnecdn.net/2023/09/26/afp-com-20230828-partners-053-2126-9728-1695716515.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=zvfMf3JBUMFs3AvqdS4XxQ",
//   },
//   {
//     _id: "2",
//     tieude:
//       "Chủ tịch Hà Nội: 'Thành phố sẽ xây dựng các bãi rác thành công viên'",
//     noidung:
//       "Thành phố đang xây các nhà máy xử lý rác hiện đại, nghiên cứu lấy rác đã chôn lấp để đốt phát điện, biến bãi rác thành công viên, ông Trần Sỹ Thanh nói.",
//     images:
//       "https://i1-vnexpress.vnecdn.net/2023/09/26/thanh-9923-1695715469.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=9_X_T2aZQTVRBNQJZuZ6Mw",
//   },
//   {
//     _id: "3",
//     tieude: "Mưa lũ cô lập nhiều bản làng ở Hà Tĩnh, Quảng Bình",
//     noidung:
//       "Ảnh hưởng của hoàn lưu áp thấp nhiệt đới, Hà Tĩnh, Quảng Bình mưa lớn, nhiều tuyến đường tới thôn bản vùng cao bị ngập hơn một mét gây chia cắt cục bộ.",
//     images:
//       "https://i1-vnexpress.vnecdn.net/2023/09/26/duong-ngap-ha-tinh-7143-169571-6353-5172-1695719454.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=pF1nTLpxXIJOGhyNI-fUDQ",
//   },
// ];

// const NewsChiTiet = () => {
//     return (
//       <ScrollView style={styles.container}>
//         <Image
//           style={styles.imagesss}
//           source={require("../imagess/tin_tuc_one.jpg")}
//         />
//         <Text style={styles.tieude}>
//           Trung Quốc - Philippines đấu khẩu về dây phao gần Scarborough
//         </Text>
//         <Text>
//           Trung Quốc cảnh báo Philippines 'không khiêu khích' sau khi nước này cắt
//           dây phao gần bãi cạn Scarborough, còn Manila tuyên bố đây là quyền của
//           mình Trung Quốc cảnh báo Philippines 'không khiêu khích' sau khi nước
//           này cắt dây phao gần bãi cạn Scarborough, còn Manila tuyên bố đây là
//           quyền của mình Trung Quốc cảnh báo Philippines 'không khiêu khích' sau
//           khi nước này cắt dây phao gần bãi cạn Scarborough, còn Manila tuyên bố
//           đây là quyền của mình Trung Quốc cảnh báo Philippines 'không khiêu
//           khích' sau khi nước này cắt dây phao gần bãi cạn Scarborough, còn Manila
//           tuyên bố đây là quyền của mình
//         </Text>
//         <Text>Đọc thêm tin tức</Text>
//         {duLieuFixCung.map((item) => (
//           <NewsItem duLieu={item} key={item._id} />
//         ))}
//       </ScrollView>
//     );
//   };

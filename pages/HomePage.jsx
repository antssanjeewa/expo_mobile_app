import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const HomePage = ({ navigation }) => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  function gotoTweetView() {
    navigation.navigate("TweetView");
  }

  function gotoProfilePage() {
    navigation.navigate("ProfilePage");
  }

  function gotoNewTweetPage() {
    navigation.navigate("NewTweetPage");
  }

  const Item = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => gotoProfilePage()}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        ></Image>
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.details}>@ants</Text>
          <Text>&middot;</Text>
          <Text style={styles.details}>9m</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => gotoTweetView()}>
          <Text style={styles.tweet}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nisi
            saepe voluptates dolorum nihil, dolore sit consequatur, impedit id a
            laudantium atque quas tempore! Ullam velit debitis non corporis
            quis!
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.actions}>
            <Ionicons name="chatbox-outline" size={20} color="gray" />
            <Text style={styles.actionCount}>72</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actions}>
            <Ionicons name="repeat" size={20} color="gray" />
            <Text style={styles.actionCount}>125</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actions}>
            <Ionicons name="heart-outline" size={20} color="gray" />
            <Text style={styles.actionCount}>25</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actions}>
            <Ionicons name="share-outline" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={{ borderBottomWidth: 1, borderBottomColor: "#e5e7eb" }}
          ></View>
        )}
      />

      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => gotoNewTweetPage()}
      >
        <Ionicons name="add" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  item: {
    // backgroundColor: "#f9c2ff",
    flexDirection: "row",
    padding: 10,
    marginVertical: 1,
    // marginHorizontal: 16,
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    borderRadius: 21,
  },
  title: {
    // fontSize: 24,
    fontWeight: "bold",
  },
  details: {
    color: "gray",
    marginHorizontal: 8,
  },
  tweet: {},
  actions: {
    flexDirection: "row",
    color: "gray",
    marginTop: 8,
    marginRight: 15,
  },
  actionCount: {
    color: "gray",
    marginLeft: 2,
  },
  floatingButton: {
    width: 60,
    aspectRatio: 1,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 12,
    backgroundColor: "#1d9bf1",
    alignItems: "center",
    justifyContent: "center",
  },
});

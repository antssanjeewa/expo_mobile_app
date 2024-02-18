import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axiosConfig from "../helpers/axiosConfig";

const HomePage = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPostData();
  }, [page]);

  function getPostData() {
    axiosConfig
      .get("/posts?limit=10&skip=" + page)
      .then((response) => {
        // if (page == 0) {
        setData(response.data.posts);
        // } else {
        // setData([...data, ...response.data.posts]);
        // }

        setIsLoading(false);
        setIsRefreshing(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setIsRefreshing(false);
      });
  }

  function handleRefresh() {
    setPage(0);
    setIsRefreshing(true);
  }

  function handleEnd() {
    setPage(page + 10);
  }

  function gotoTweetView(tweetId) {
    navigation.navigate("TweetView", {
      tweetId: tweetId,
    });
  }

  function gotoProfilePage(userId) {
    navigation.navigate("ProfilePage", {
      userId: userId,
    });
  }

  function gotoNewTweetPage() {
    navigation.navigate("NewTweetPage");
  }

  const Item = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => gotoProfilePage(item.userId)}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://i.pravatar.cc/200?img=" + item.userId }}
        ></Image>
      </TouchableOpacity>

      <View style={{ flex: 1 }}>
        <TouchableOpacity style={{ flexDirection: "row" }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.details}>@ants</Text>
          <Text>&middot;</Text>
          <Text style={styles.details}>9m</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => gotoTweetView(item.id)}>
          <Text style={styles.tweet}>{item.body}</Text>
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
      {isLoading ? (
        <ActivityIndicator
          size="large"
          style={{ marginTop: 8 }}
        ></ActivityIndicator>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
            <View
              style={{ borderBottomWidth: 1, borderBottomColor: "#e5e7eb" }}
            ></View>
          )}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          onEndReached={handleEnd}
          onEndReachedThreshold={0}
          ListFooterComponent={() => (
            <ActivityIndicator size="large" color="gray" />
          )}
        />
      )}

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

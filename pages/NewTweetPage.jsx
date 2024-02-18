import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import axiosConfig from "../helpers/axiosConfig";

export default function NewTweetPage({ navigation }) {
  const [tweet, setTweet] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function sendTweet() {
    if (tweet.length == 0) {
      Alert.alert("Please enter a tweet");
      return;
    }

    setIsLoading(true);
    axiosConfig
      .post("/posts/add", {
        title: tweet,
        userId: 5,
      })
      .then((response) => {
        // setTweet(response.data);
        // setIsLoading(false);
        // console.log(response);
        setIsLoading(false);
        navigation.navigate("Home2");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.tweetButtonContainer}>
        <Text>Character Left : {280 - tweet.length}</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {isLoading && <ActivityIndicator />}
          <TouchableOpacity
            style={styles.tweetButton}
            onPress={() => sendTweet()}
            disabled={isLoading}
          >
            <Text style={styles.tweetButtonText}>Tweet</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tweetBoxContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        ></Image>

        <TextInput
          style={styles.input}
          value={tweet}
          onChangeText={setTweet}
          placeholder="What's Happening?"
          placeholderTextColor="gray"
          multiline
          maxLength={280}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textGray: {
    color: "gray",
  },
  ml4: {
    marginLeft: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tweetButtonContainer: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },
  tweetButton: {
    backgroundColor: "#1d9bf1",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  tweetButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  tweetBoxContainer: {
    flexDirection: "row",
    paddingTop: 10,
  },
  avatar: {
    width: 42,
    height: 42,
    marginRight: 8,
    marginTop: 10,
    borderRadius: 21,
  },
  input: {
    flex: 1,
    fontSize: 18,
    lineHeight: 28,
    padding: 10,
  },
});

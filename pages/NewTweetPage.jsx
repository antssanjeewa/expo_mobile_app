import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default NewTweetPage = () => {
  const [tweet, setTweet] = useState("");

  function sendTweet() {
    alert(tweet);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tweetButtonContainer}>
        <Text>Character Left : {280 - tweet.length}</Text>
        <TouchableOpacity
          style={styles.tweetButton}
          onPress={() => sendTweet()}
        >
          <Text style={styles.tweetButtonText}>Tweet</Text>
        </TouchableOpacity>
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
};

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

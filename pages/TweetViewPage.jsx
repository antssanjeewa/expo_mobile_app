import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const TweetViewPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.flexRow}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          ></Image>

          <View>
            <Text style={styles.tweetName}>TweetViewPage</Text>
            <Text style={styles.tweetHandle}>@ants</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.tweetContentContainer}>
        <Text style={styles.tweetContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis
          corporis itaque possimus dolor ipsam, neque ipsum quo doloremque
          officiis quidem fugit voluptatem obcaecati alias consequatur
          consectetur animi eaque recusandae. Lorem ipsum dolor sit amet tempore
          voluptatibus ipsam ea commodi porro similique modi reprehenderit? Eos
          natus dicta necessitatibus sint? Qui aperiam officia ipsum nemo culpa
          facere unde illo iste minus. Quibusdam voluptatibus numquam, assumenda
          voluptas eligendi iste modi, fugiat nobis tenetur, laboriosam autem
          corrupti eius quidem! Error aperiam veritatis facilis quam eligendi,
          deleniti soluta iure repellat magni iste amet, ipsa, dignissimos
          cumque nesciunt molestias? At, voluptate.
        </Text>
      </View>

      <View style={styles.tweetEngagement}>
        <View style={styles.flexRow}>
          <Text style={styles.tweetEngagementNumber}>234</Text>
          <Text style={styles.tweetEngagementLabel}>Retweets</Text>
        </View>
        <View style={[styles.flexRow, styles.ml4]}>
          <Text style={styles.tweetEngagementNumber}>34</Text>
          <Text style={styles.tweetEngagementLabel}>Quote Tweets</Text>
        </View>
        <View style={[styles.flexRow, styles.ml4]}>
          <Text style={styles.tweetEngagementNumber}>1,234</Text>
          <Text style={styles.tweetEngagementLabel}>Likes</Text>
        </View>
      </View>

      <View style={styles.tweetEngagement}>
        <TouchableOpacity>
          <Ionicons name="chatbox-outline" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="repeat" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="share-outline" size={20} color="gray" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TweetViewPage;

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 8,
    borderRadius: 25,
  },
  tweetName: {
    fontWeight: "bold",
    color: "#222222",
  },
  tweetHandle: {
    color: "gray",
    marginTop: 4,
  },
  tweetContentContainer: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  tweetContent: {
    fontSize: 20,
    lineHeight: 30,
  },
  tweetEngagement: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    justifyContent: "space-around",
  },
  tweetEngagementNumber: {
    fontWeight: "bold",
  },
  tweetEngagementLabel: {
    color: "gray",
    marginLeft: 6,
  },
  tweetTimestampContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  tweetTimestampText: {
    color: "gray",
    marginRight: 6,
  },
  linkColor: {
    color: "#1d9bf1",
  },
  spaceAround: {
    justifyContent: "space-around",
  },
  ml4: {
    marginLeft: 16,
  },
  mt6: {
    marginTop: 32,
  },
  menuButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuButtonText: {
    fontSize: 20,
    color: "#222",
    marginLeft: 12,
  },
});

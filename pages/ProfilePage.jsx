import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";

const ProfilePage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={{
          uri: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80",
        }}
      ></Image>

      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        ></Image>

        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Follow</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.profileName}>Profile Page Name</Text>
        <Text style={styles.profileHandle}>@ants</Text>
      </View>

      <View style={styles.profileContainer}>
        <Text style={styles.profileContainerText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          corrupti neque quaerat quod velit vero officiis pariatur ex eum
          veritatis!
        </Text>
      </View>

      <View style={styles.locationContainer}>
        <EvilIcons name="location" size={24} color="gray" />
        <Text style={styles.textGray}>Toronto, Canada</Text>
      </View>

      <View style={styles.linkContainer}>
        <TouchableOpacity style={styles.linkItem}>
          <EvilIcons name="link" size={24} color="gray" />
          <Text style={styles.linkColor}>laracast.com</Text>
        </TouchableOpacity>
        <View style={[styles.linkItem, styles.ml4]}>
          <EvilIcons name="calendar" size={24} color="gray" />
          <Text style={styles.textGray}>Joined March 2009</Text>
        </View>
      </View>

      <View style={styles.followContainer}>
        <View style={styles.followItem}>
          <Text style={styles.followItemNumber}>234</Text>
          <Text style={styles.followItemLabel}>Following</Text>
        </View>
        <View style={[styles.followItem, styles.ml4]}>
          <Text style={styles.followItemNumber}>34</Text>
          <Text style={styles.followItemLabel}>Followers</Text>
        </View>
      </View>

      <View style={styles.separator}></View>
    </View>
  );
};

export default ProfilePage;

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
  backgroundImage: {
    width: 800,
    height: 120,
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginTop: -34,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "white",
  },
  followButton: {
    backgroundColor: "#0f1418",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 24,
  },
  followButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  nameContainer: {
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 22,
  },
  profileHandle: {
    color: "gray",
    marginTop: 1,
  },
  profileContainer: {
    paddingHorizontal: 10,
    marginTop: 8,
  },
  profileContainerText: {
    lineHeight: 22,
  },
  locationContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 12,
  },
  linkContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 4,
  },
  linkColor: {
    color: "#1d9bf1",
  },
  linkItem: {
    flexDirection: "row",
  },
  followContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  followItem: {
    flexDirection: "row",
  },
  followItemNumber: {
    fontWeight: "bold",
  },
  followItemLabel: {
    marginLeft: 4,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
});

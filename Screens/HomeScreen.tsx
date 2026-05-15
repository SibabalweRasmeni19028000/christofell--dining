import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Restaurant Home</Text>

      <Text style={styles.title}>Welcome back, Lelethu!</Text>
      <Text style={styles.reservation}>Your reservation: 7:30 PM</Text>

      <Text style={styles.popular}>Popular Dishes</Text>
      <Text style={styles.dish}>Dry-Aged Ribeye — R280</Text>
      <Text style={styles.dish}>Seared Scallops — R180</Text>

     
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.buttonText}>View Tonight's Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b132b", 
    padding: 20,
    justifyContent: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  reservation: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  popular: {
    fontSize: 20,
    fontWeight: "600",
    color: "#FFD700", 
    marginBottom: 10,
    textAlign: "center",
  },
  dish: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 5,
    textAlign: "center",
  },
  button: {
    marginTop: 30,
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignSelf: "center",
  },
  buttonText: {
    color: "#004aad",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default HomeScreen;






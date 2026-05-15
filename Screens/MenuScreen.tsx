import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type MenuScreenNavigationProp = StackNavigationProp<RootStackParamList, "Menu">;

type Props = {
  navigation: MenuScreenNavigationProp;
};

const menuItems = [
  { id: "1", category: "Appetizer", name: "Truffle Arancini", price: "R85" },
  { id: "2", category: "Appetizer", name: "Burrata Salad", price: "R95" },
  { id: "3", category: "Main", name: "Pan-roasted Branzino", price: "R220" },
  { id: "4", category: "Main", name: "Handmade Ravioli", price: "R150" },
  { id: "5", category: "Main", name: "Seared Scallops", price: "R180" },
];

const MenuScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tonight's Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("DishDetail", { dish: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#0b132b" }, // dark blue background
  title: { fontSize: 24, fontWeight: "bold", color: "#ffffff", marginBottom: 15 },
  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  name: { fontSize: 18, color: "#ffffff" },
  price: { fontSize: 16, color: "#ffffff", fontWeight: "600" },
});

export default MenuScreen;


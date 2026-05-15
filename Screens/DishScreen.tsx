import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const ChefDashboardScreen: React.FC = () => {
  const [dishField, setDishField] = useState("");
  const [ordersField, setOrdersField] = useState("");
  const [menuField, setMenuField] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Dashboard</Text>
      <Text style={styles.subtitle}>Welcome Back, Chef Christofell</Text>

      
      <TextInput
        style={styles.block}
        placeholder="Add / Edit Dish"
        value={dishField}
        onChangeText={setDishField}
      />

      <TextInput
        style={styles.block}
        placeholder="Manage Orders"
        value={ordersField}
        onChangeText={setOrdersField}
      />

      <TextInput
        style={styles.block}
        placeholder="View Full Menu"
        value={menuField}
        onChangeText={setMenuField}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 16, marginBottom: 20 },
  block: {
    width: "100%",
    padding: 20,
    marginVertical: 10,
    backgroundColor: "#f4d35e", 
    borderRadius: 8,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ChefDashboardScreen;



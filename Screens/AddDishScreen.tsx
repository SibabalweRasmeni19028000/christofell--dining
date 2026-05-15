import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from "react-native";
import { dishes } from "./data";

const AddDishScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Main");
  const [price, setPrice] = useState("");
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    if (!name || !description || !category || !price) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const newDish = {
      id: dishes.length + 1,
      name,
      description,
      category,
      price: parseFloat(price),
    };

    dishes.push(newDish);
    Alert.alert("Success", `Dish "${name}" added successfully!`);

    setName(""); setDescription(""); setCategory("Main"); setPrice("");
    setRefresh(!refresh);
  };

  const handleRemove = (id: number) => {
    const index = dishes.findIndex(d => d.id === id);
    if (index !== -1) {
      dishes.splice(index, 1);
      Alert.alert("Removed", "Dish removed successfully!");
      setRefresh(!refresh);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add / Edit Dish</Text>

      {/* Inputs */}
      <TextInput style={styles.input} placeholder="Dish Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
      <TextInput style={styles.input} placeholder="Category (Starter/Main/Dessert)" value={category} onChangeText={setCategory} />
      <TextInput style={styles.input} placeholder="Price (R)" keyboardType="numeric" value={price} onChangeText={setPrice} />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Dish</Text>
      </TouchableOpacity>

      {/* Current Menu Items */}
      <Text style={styles.sectionTitle}>Current Menu Items</Text>
      <FlatList
        data={dishes}
        keyExtractor={item => item.id.toString()}
        extraData={refresh}
        renderItem={({ item }) => (
          <View style={styles.dishCard}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <Text style={styles.dishName}>{item.name}</Text>
                <Text style={styles.dishCategory}>{item.category}</Text>
                <Text style={styles.dishPrice}>R{item.price}</Text>
              </View>
              <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(item.id)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b132b", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 20 },
  input: { backgroundColor: "#fff", borderRadius: 8, padding: 12, marginBottom: 15 },
  button: { backgroundColor: "#FFD700", paddingVertical: 14, borderRadius: 8, alignItems: "center", marginBottom: 20 },
  buttonText: { color: "#0b132b", fontSize: 18, fontWeight: "600" },
  sectionTitle: { fontSize: 20, fontWeight: "600", color: "#FFD700", marginBottom: 10 },
  dishCard: { backgroundColor: "#fff", padding: 12, borderRadius: 8, marginBottom: 10 },
  dishName: { fontSize: 18, fontWeight: "bold", color: "#0b132b" },
  dishCategory: { fontSize: 14, color: "#555" },
  dishPrice: { fontSize: 16, fontWeight: "600", color: "#FFD700" },
  removeButton: { backgroundColor: "#e63946", padding: 8, borderRadius: 6 },
  removeText: { color: "#fff", fontWeight: "bold" },
});

export default AddDishScreen;




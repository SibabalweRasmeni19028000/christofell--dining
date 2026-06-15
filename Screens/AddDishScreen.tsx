import React, { useState, useContext } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { MenuContext } from "../Screens/MenuContext";
import DropDownPicker from "react-native-dropdown-picker";
import { menuHelper } from "../utils/menuHelpers"; // Centralized helper for formatting and calculations

const AddDishScreen: React.FC = () => {
  const { dishes, addDish, removeDish } = useContext(MenuContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // Dropdown state for category selection
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("Starter");
  const [items, setItems] = useState([
    { label: "Starter", value: "Starter" },
    { label: "Main", value: "Main" },
    { label: "Dessert", value: "Dessert" },
  ]);

  // Handle dish creation and reset form fields
  const handleAddDish = () => {
    if (!name.trim() || !description.trim() || !price.trim()) {
      alert("Please fill in all fields");
      return;
    }

    addDish({
      id: Date.now(),
      name,
      description,
      category,
      price: parseFloat(price),
    });

    setName("");
    setDescription("");
    setCategory("Starter");
    setPrice("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add / Edit Dish</Text>

      {/* Input fields for dish details */}
      <TextInput style={styles.input} placeholder="Dish Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />

      {/* Dropdown for selecting dish category */}
      <DropDownPicker
        open={open}
        value={category}
        items={items}
        setOpen={setOpen}
        setValue={setCategory}
        setItems={setItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
      />

      {/* Input for dish price */}
      <TextInput
        style={styles.input}
        placeholder="Price (R)"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      {/* Save button to add dish */}
      <TouchableOpacity style={styles.button} onPress={handleAddDish}>
        <Text style={styles.buttonText}>Save Dish</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Current Menu Items</Text>

      {/* Render list of existing dishes with remove option */}
      <FlatList
        data={dishes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.dishInfo}>
                <Text style={styles.dishName}>{item.name}</Text>
                <Text style={styles.dishCategory}>{item.category}</Text>
                <Text style={styles.dishDescription}>{item.description}</Text>
                {/* Format price using menuHelper */}
                <Text style={styles.dishPrice}>{menuHelper([], "format", item.price)}</Text>
              </View>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeDish(item.id)}>
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
  container: { flex: 1, backgroundColor: "#0b132b", padding: 16 },
  title: { fontSize: 28, fontWeight: "bold", color: "#FFD700", marginBottom: 20 },
  input: { backgroundColor: "#fff", padding: 12, borderRadius: 8, marginBottom: 12 },
  dropdown: { backgroundColor: "#fff", borderRadius: 8, marginBottom: 12 },
  dropdownContainer: { backgroundColor: "#fff" },
  button: { backgroundColor: "#FFD700", paddingVertical: 14, borderRadius: 8, alignItems: "center", marginBottom: 20 },
  buttonText: { color: "#0b132b", fontSize: 18, fontWeight: "600" },
  subtitle: { fontSize: 20, fontWeight: "600", color: "#fff", marginBottom: 12 },
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 8, marginBottom: 12 },
  cardContent: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  dishInfo: { flexShrink: 1 },
  dishName: { fontSize: 18, fontWeight: "bold", color: "#0b132b" },
  dishCategory: { fontSize: 14, color: "#555" },
  dishDescription: { fontSize: 14, color: "#333", marginTop: 4 },
  dishPrice: { fontSize: 16, fontWeight: "600", color: "#FFD700", marginTop: 6 },
  removeButton: { backgroundColor: "#ff4d4d", paddingVertical: 8, paddingHorizontal: 16, borderRadius: 6 },
  removeText: { color: "#fff", fontWeight: "600" },
});

export default AddDishScreen;




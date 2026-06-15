import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { MenuContext } from "./MenuContext";
import { menuHelper } from "../utils/menuHelpers"; 

const GuestFilteringScreen = () => {
  const { dishes } = useContext(MenuContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter dishes and count items by category using menuHelper
  const filteredDishes = menuHelper(dishes, "filter", selectedCategory);
  const itemCount = menuHelper(dishes, "count", selectedCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guest Menu</Text>

      {/* Category filter buttons */}
      <View style={styles.filterRow}>
        {["All", "Starter", "Main", "Dessert"].map(cat => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.filterButton,
              selectedCategory === cat && styles.filterButtonActive,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text
              style={[
                styles.filterText,
                selectedCategory === cat && styles.filterTextActive,
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Display item count for selected category */}
      <Text style={styles.countText}>Showing {itemCount} items</Text>

      {/* Render filtered dish list with formatted price */}
      <FlatList
        data={filteredDishes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.dishDescription}>{item.description}</Text>
            {/* Format price using menuHelper */}
            <Text style={styles.dishPrice}>{menuHelper([], "format", item.price)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b132b", padding: 16 },
  title: { fontSize: 28, fontWeight: "bold", color: "#FFD700", marginBottom: 20 },
  filterRow: { flexDirection: "row", justifyContent: "space-around", marginBottom: 16 },
  filterButton: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  filterButtonActive: { backgroundColor: "#FFD700" },
  filterText: { color: "#0b132b", fontWeight: "600" },
  filterTextActive: { color: "#0b132b", fontWeight: "700" },
  countText: { color: "#fff", fontSize: 16, marginBottom: 12, textAlign: "center" },
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 8, marginBottom: 12 },
  dishName: { fontSize: 18, fontWeight: "bold", color: "#0b132b" },
  dishDescription: { fontSize: 14, color: "#333", marginTop: 4 },
  dishPrice: { fontSize: 16, fontWeight: "600", color: "#FFD700", marginTop: 6 },
});

export default GuestFilteringScreen;



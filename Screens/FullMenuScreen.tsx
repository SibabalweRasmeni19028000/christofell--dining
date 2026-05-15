import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { dishes } from "./data";

const FullMenuScreen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  
  const filteredDishes =
    selectedCategory === "All"
      ? dishes
      : dishes.filter(d => d.category === selectedCategory);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Full Menu</Text>

      {/*  Filter buttons */}
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

     
      <FlatList
        data={filteredDishes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text style={styles.dishCategory}>{item.category}</Text>
            <Text style={styles.dishDescription}>{item.description}</Text>
            <Text style={styles.dishPrice}>R{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b132b", padding: 16 },
  title: { fontSize: 28, fontWeight: "bold", color: "#FFD700", marginBottom: 20 },
  filterRow: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  filterButton: { paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8, backgroundColor: "#fff" },
  filterButtonActive: { backgroundColor: "#FFD700" },
  filterText: { fontSize: 16, fontWeight: "600", color: "#0b132b" },
  filterTextActive: { color: "#0b132b", fontWeight: "bold" },
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 8, marginBottom: 12 },
  dishName: { fontSize: 18, fontWeight: "bold", color: "#0b132b" },
  dishCategory: { fontSize: 14, color: "#555" },
  dishDescription: { fontSize: 14, color: "#333", marginTop: 4 },
  dishPrice: { fontSize: 16, fontWeight: "600", color: "#FFD700", marginTop: 6 },
});

export default FullMenuScreen;








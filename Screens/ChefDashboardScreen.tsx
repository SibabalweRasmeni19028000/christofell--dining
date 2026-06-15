import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MenuContext } from "./MenuContext";
import { menuHelper } from "../utils/menuHelpers"; // Centralized helper for calculations and formatting

const ChefDashboardScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { dishes } = useContext(MenuContext);

  // Calculate average prices per category using menuHelper
  const avgStarter = menuHelper(dishes, "average", "Starter");
  const avgMain = menuHelper(dishes, "average", "Main");
  const avgDessert = menuHelper(dishes, "average", "Dessert");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Dashboard</Text>
      <Text style={styles.subtitle}>Welcome Back, Chef Christoffell</Text>

      {/* Dashboard metrics */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Menu Items</Text>
        <Text style={styles.cardValue}>{menuHelper(dishes, "count", "All")}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Average Starter Price</Text>
        <Text style={styles.cardValue}>{menuHelper([], "format", avgStarter)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Average Main Price</Text>
        <Text style={styles.cardValue}>{menuHelper([], "format", avgMain)}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Average Dessert Price</Text>
        <Text style={styles.cardValue}>{menuHelper([], "format", avgDessert)}</Text>
      </View>

      {/* Navigation buttons */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AddDish")}
      >
        <Text style={styles.buttonText}>Add / Edit Dish</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FullMenu")}
      >
        <Text style={styles.buttonText}>View Full Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.guestButton}
        onPress={() => navigation.navigate("GuestMenu")}
      >
        <Text style={styles.guestButtonText}>Guest Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b132b", padding: 16 },
  title: { fontSize: 28, fontWeight: "bold", color: "#FFD700", marginBottom: 8 },
  subtitle: { fontSize: 18, color: "#fff", marginBottom: 20 },
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 8, marginBottom: 12 },
  cardTitle: { fontSize: 16, fontWeight: "600", color: "#0b132b" },
  cardValue: { fontSize: 20, fontWeight: "bold", color: "#FFD700", marginTop: 6 },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: { color: "#0b132b", fontSize: 18, fontWeight: "600" },
  guestButton: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#FFD700",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  guestButtonText: { color: "#FFD700", fontSize: 18, fontWeight: "700" },
});

export default ChefDashboardScreen;





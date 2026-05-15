import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native"; 
import { dishes } from "./data"; 


let orders = [
  { id: 1, total: 220, status: "active" },
  { id: 2, total: 95, status: "pending" },
  { id: 3, total: 280, status: "active" },
  { id: 4, total: 150, status: "completed" },
];

const ChefDashboardScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [menuCount, setMenuCount] = useState(dishes.length);

  useEffect(() => {
    if (isFocused) {
      setMenuCount(dishes.length); 
    }
  }, [isFocused]);

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const activeOrders = orders.filter(o => o.status === "active").length;
  const pendingRequests = orders.filter(o => o.status === "pending").length;
  const completedOrders = orders.filter(o => o.status === "completed").length;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef Dashboard</Text>
      <Text style={styles.welcome}>Welcome, Chef Christofell</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Revenue</Text>
        <Text style={styles.cardValue}>R{totalRevenue}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Active Orders</Text>
        <Text style={styles.cardValue}>{activeOrders}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Pending Requests</Text>
        <Text style={styles.cardValue}>{pendingRequests}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Completed Orders</Text>
        <Text style={styles.cardValue}>{completedOrders}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total Menu Items</Text>
        <Text style={styles.cardValue}>{menuCount}</Text>
      </View>

      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AddDish")}>
        <Text style={styles.buttonText}>Add / Edit Dish</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("ManageOrders")}>
        <Text style={styles.buttonText}>Manage Orders</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FullMenu")}>
        <Text style={styles.buttonText}>View Full Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b132b", padding: 16 },
  title: { fontSize: 28, fontWeight: "bold", color: "#FFD700", marginBottom: 10 },
  welcome: { fontSize: 18, color: "#fff", marginBottom: 20 },
  card: { backgroundColor: "#fff", padding: 16, borderRadius: 8, marginBottom: 12 },
  cardTitle: { fontSize: 18, fontWeight: "600", color: "#0b132b" },
  cardValue: { fontSize: 20, fontWeight: "bold", color: "#FFD700", marginTop: 6 },
  button: { backgroundColor: "#FFD700", paddingVertical: 14, borderRadius: 8, alignItems: "center", marginTop: 12 },
  buttonText: { color: "#0b132b", fontSize: 18, fontWeight: "600" },
});

export default ChefDashboardScreen;





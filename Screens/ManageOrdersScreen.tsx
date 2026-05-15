import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";


let orders = [
  { id: 1, total: 220, status: "active" },
  { id: 2, total: 95, status: "pending" },
  { id: 3, total: 280, status: "active" },
  { id: 4, total: 150, status: "completed" },
];

const ManageOrdersScreen: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  const updateOrderStatus = (id: number, newStatus: string) => {
    const orderIndex = orders.findIndex(o => o.id === id);
    if (orderIndex !== -1) {
      orders[orderIndex].status = newStatus;
      setRefresh(!refresh); 
    }
  };

  const filterOrders = (status: string) => orders.filter(o => o.status === status);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Orders</Text>

      {/* Active Orders */}
      <Text style={styles.sectionTitle}>Active Orders</Text>
      <FlatList
        data={filterOrders("active")}
        keyExtractor={item => item.id.toString()}
        extraData={refresh}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Order #{item.id} - R{item.total}</Text>
            <TouchableOpacity
              style={styles.completeButton}
              onPress={() => updateOrderStatus(item.id, "completed")}
            >
              <Text style={styles.completeText}>Mark Completed</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Pending Requests */}
      <Text style={styles.sectionTitle}>Pending Requests</Text>
      <FlatList
        data={filterOrders("pending")}
        keyExtractor={item => item.id.toString()}
        extraData={refresh}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Order #{item.id} - R{item.total}</Text>
            <TouchableOpacity
              style={styles.completeButton}
              onPress={() => updateOrderStatus(item.id, "completed")}
            >
              <Text style={styles.completeText}>Approve & Complete</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Completed Orders */}
      <Text style={styles.sectionTitle}>Completed Orders</Text>
      <FlatList
        data={filterOrders("completed")}
        keyExtractor={item => item.id.toString()}
        extraData={refresh}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <Text style={styles.orderText}>Order #{item.id} - R{item.total}</Text>
            <Text style={styles.completedLabel}>✔ Completed</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0b132b", padding: 16 },
  title: { fontSize: 26, fontWeight: "bold", color: "#FFD700", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "600", color: "#fff", marginTop: 16, marginBottom: 8 },
  orderCard: { backgroundColor: "#fff", padding: 12, borderRadius: 8, marginBottom: 10 },
  orderText: { fontSize: 16, fontWeight: "500", color: "#0b132b" },
  completeButton: { marginTop: 8, backgroundColor: "#FFD700", padding: 8, borderRadius: 6 },
  completeText: { color: "#0b132b", fontWeight: "bold", textAlign: "center" },
  completedLabel: { marginTop: 6, color: "green", fontWeight: "bold" },
});

export default ManageOrdersScreen;


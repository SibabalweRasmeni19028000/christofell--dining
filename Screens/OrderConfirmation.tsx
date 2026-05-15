import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type OrderConfirmationRouteProp = RouteProp<RootStackParamList, "OrderConfirmation">;
type OrderConfirmationNavigationProp = StackNavigationProp<RootStackParamList, "OrderConfirmation">;

type Props = {
  route: OrderConfirmationRouteProp;
  navigation: OrderConfirmationNavigationProp;
};

const OrderConfirmationScreen: React.FC<Props> = ({ route, navigation }) => {
  const { total, items } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thank you, Lelethu!</Text>
      <Text style={styles.details}>Pickup: R{total}</Text>
      <Text style={styles.details}>{items} Items R{total}</Text>
      <Text style={styles.details}>Total R{total}</Text>
      <Text style={styles.details}>Order #12546789</Text>

      {/* Styled Home button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#0b132b", 
    padding: 20 
  },
  title: { 
    fontSize: 26, 
    fontWeight: "bold", 
    color: "#ffffff", 
    marginBottom: 20 
  },
  details: { 
    fontSize: 18, 
    color: "#ffffff", 
    marginVertical: 5 
  },
  button: {
    marginTop: 30,
    backgroundColor: "#ffffff", 
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  buttonText: { 
    color: "#0b132b", 
    fontSize: 18, 
    fontWeight: "600" 
  },
});

export default OrderConfirmationScreen;


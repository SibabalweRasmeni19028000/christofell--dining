import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    
    navigation.navigate("ChefDashboard");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christofell Dining</Text>
      <Text style={styles.subtitle}>Chef Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#0b132b" },
  title: { fontSize: 28, fontWeight: "bold", color: "#FFD700", marginBottom: 10, textAlign: "center" },
  subtitle: { fontSize: 18, color: "#ffffff", marginBottom: 20, textAlign: "center" },
  input: { backgroundColor: "#fff", borderRadius: 8, padding: 12, marginBottom: 15, color: "#000" },
  button: { backgroundColor: "#FFD700", paddingVertical: 14, borderRadius: 8, alignItems: "center" },
  buttonText: { color: "#0b132b", fontSize: 18, fontWeight: "600" },
});

export default LoginScreen;





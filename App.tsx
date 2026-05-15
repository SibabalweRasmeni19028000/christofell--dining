import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens (folder name must match exactly: Screens)
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import MenuScreen from "./Screens/MenuScreen";
import DishScreen from "./Screens/DishScreen";
import OrderConfirmationScreen from "./Screens/OrderConfirmation";
import ChefDashboardScreen from "./Screens/ChefDashboardScreen";
import AddDishScreen from "./Screens/AddDishScreen";
import FullMenuScreen from "./Screens/FullMenuScreen";
import ManageOrdersScreen from "./Screens/ManageOrdersScreen";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Menu: undefined;
  Dish: undefined;
  OrderConfirmation: undefined;
  ChefDashboard: undefined;
  AddDish: { dishId?: number }; // optional for editing
  FullMenu: undefined;
  ManageOrders: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* Customer Flow */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Restaurant Home" }}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{ title: "Tonight's Menu" }}
        />
        <Stack.Screen
          name="Dish"
          component={DishScreen}
          options={{ title: "Dish Details" }}
        />
        <Stack.Screen
          name="OrderConfirmation"
          component={OrderConfirmationScreen}
          options={{ title: "Order Confirmation" }}
        />

        {/* Chef Flow */}
        <Stack.Screen
          name="ChefDashboard"
          component={ChefDashboardScreen}
          options={{ title: "Chef Dashboard" }}
        />
        <Stack.Screen
          name="AddDish"
          component={AddDishScreen}
          options={{ title: "Add / Edit Dish" }}
        />
        <Stack.Screen
          name="FullMenu"
          component={FullMenuScreen}
          options={{ title: "Full Menu" }}
        />
        <Stack.Screen
          name="ManageOrders"
          component={ManageOrdersScreen}
          options={{ title: "Manage Orders" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;









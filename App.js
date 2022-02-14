import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Poll from "./pages/Poll";
import Userlist from "./pages/Userlist";
import Createpoll from "./pages/Createpoll";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator backBehavior="none">
      
        <Drawer.Screen name="Poll" component={Poll} />
        <Drawer.Screen name="Createpoll" component={Createpoll} />
        <Drawer.Screen name="Userlist" component={Userlist} />
        
        {/* <Drawer.Screen name="LogOut" component={Login}/> */}
        
      
    </Drawer.Navigator>

  );
};

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Home" component={DrawerRoutes} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

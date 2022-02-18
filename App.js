import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomDrawer from "./src/navigation/CustomDrawer";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import Poll from "./src/pages/Poll";
import Userlist from "./src/pages/Userlist";
import Createpoll from "./src/pages/Createpoll";
import { Provider } from "react-redux";
import store from "./src/redux/store";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        Options={{ headerShown: false }}
        name="Poll"
        component={Poll}
      />
      <Drawer.Screen
        Options={{ headerShown: false }}
        name="Createpoll"
        component={Createpoll}
      />
      <Drawer.Screen
        Options={{ headerShown: false }}
        name="Userlist"
        component={Userlist}
      />

      {/* <Drawer.Screen cname="LogOut" component={Login}/> */}
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

const styles = StyleSheet.create({});

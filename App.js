import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomDrawer from "./pages/CustomDrawer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Poll from "./pages/Poll";
import Userlist from "./pages/Userlist";
import Createpoll from "./pages/Createpoll";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      
        <Drawer.Screen Options={{headerShown:false}} name="Poll" component={Poll} />
        <Drawer.Screen Options={{headerShown:false}} name="Createpoll" component={Createpoll} />
        <Drawer.Screen Options={{headerShown:false}} name="Userlist" component={Userlist} />
        
        {/* <Drawer.Screen cname="LogOut" component={Login}/> */}
        
      
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

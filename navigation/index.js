import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account";
import { Fontisto, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Home") {
              return <Fontisto name="home" size={size} color={color} />;
            } else if (route.name === "Account") {
              return (
                <FontAwesome5 name="user-circle" size={size} color={color} />
              );
            }
          },
          tabBarActiveTintColor: "#2D2332",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;

import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screens/Account";

const Tab = createBottomTabNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Tab.Screen name="Account" component={Account} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default Navigation;
import TabNavigation from "./Tab";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createNavigationContainerRef, NavigationContainer } from "@react-navigation/native";

const navigationContainerRef = createNavigationContainerRef()

const Stack = createNativeStackNavigator()

export default function RootNavigation() {

  return (
    <NavigationContainer ref={navigationContainerRef}>
      <Stack.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
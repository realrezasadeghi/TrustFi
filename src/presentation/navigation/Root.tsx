import TabNavigation from "./Tab";
import { useTheme } from "@/presentation/hooks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createNavigationContainerRef, NavigationContainer, DefaultTheme } from "@react-navigation/native";

const navigationContainerRef = createNavigationContainerRef()

const Stack = createNativeStackNavigator()

export default function RootNavigation() {
  const { mode, colors } = useTheme()
  return (
    <NavigationContainer ref={navigationContainerRef} theme={{ dark: mode === 'dark', colors: { ...DefaultTheme.colors, background: colors?.background as string } }}>
      <Stack.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
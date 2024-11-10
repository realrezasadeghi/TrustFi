import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  MarketScreen,
  PortfolioScreen,
  ProfileScreen,
  RewardsScreen,
} from '@/presentation/screens';

type TabParamList = {
  Home: undefined;
  Portfolio: undefined;
  Rewards: undefined;
  Market: undefined;
  Profile: undefined;
};

type IconLabelMapping = Record<keyof TabParamList, { icon: string; label: string }>;

const ICON_LABEL_MAPPING: IconLabelMapping = {
  Home: { icon: 'home-outline', label: 'Home' },
  Rewards: { icon: 'gift-outline', label: 'Rewards' },
  Profile: { icon: 'person-outline', label: 'Profile' },
  Market: { icon: 'trending-up', label: 'Market' },
  Portfolio: { icon: 'briefcase-outline', label: 'Portfolio' },
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const { icon, label } = ICON_LABEL_MAPPING[route.name]
        return {
          tabBarLabel: label,
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: styles.tabBarStyle,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name={icon} size={size} color={color} />
          },
        }
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 12,
  },
  tabBarStyle: {
    height: 70,
    paddingTop: 10,
    borderTopWidth: 0,
    paddingBottom: 10,
  },
});

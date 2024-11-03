import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  MarketScreen,
  PortfolioScreen,
  ProfileScreen,
  RewardsScreen,
} from '@/presentation/screens';
import { StyleSheet, Text, View } from 'react-native';

type TabParamList = {
  Home: undefined;
  Portfolio: undefined;
  Rewards: undefined;
  Market: undefined;
  Profile: undefined;
};

type IconLabelMapping = Record<keyof TabParamList, { icon: string; label: string }>;

type CustomTabBarIconProps = {
  icon: string;
  color: string;
  label: string;
  size: number;
};

const ICON_LABEL_MAPPING: IconLabelMapping = {
  Home: { icon: 'home', label: 'Home' },
  Rewards: { icon: 'gift', label: 'Rewards' },
  Profile: { icon: 'person', label: 'Profile' },
  Market: { icon: 'trending-up', label: 'Market' },
  Portfolio: { icon: 'briefcase', label: 'Portfolio' },
};

const Tab = createBottomTabNavigator<TabParamList>();

const CustomTabBarIcon: React.FC<CustomTabBarIconProps> = ({ icon, color, label, size }) => (
  <View style={styles.iconContainer}>
    <Ionicons name={icon} size={size} color={color} />
    <Text style={[styles.iconLabel, { color }]}>{label}</Text>
  </View>
);

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ color, size }) => {
          const { icon, label } = ICON_LABEL_MAPPING[route.name];
          return <CustomTabBarIcon size={size} icon={icon} color={color} label={label} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Market" component={MarketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
    elevation: 0,
    paddingTop: 10,
    borderTopWidth: 0,
    paddingBottom: 10,
  },
  iconContainer: {
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLabel: {
    fontSize: 12,
  },
});

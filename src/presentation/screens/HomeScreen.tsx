import { StyleSheet, View } from "react-native";
import { spacings } from "@/presentation/theme";
import { HeaderCard, TrendingCoins } from "@/presentation/components/home";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderCard />
      <TrendingCoins data={[]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacings.large,
    padding: spacings.medium
  }
})
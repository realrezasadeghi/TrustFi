import { memo } from "react";
import { fontSize } from "@/presentation/theme";
import { useTheme } from "@/presentation/hooks";
import { FlatList, StyleSheet, Text } from "react-native";
import { CoinCard } from "@/presentation/components/shared";

type TrendingCoinsProps<T> = {
  data: ArrayLike<T>;
};

const TrendingCoins = memo(<T extends { id: string | number }>({ data }: TrendingCoinsProps<T>) => {
  const { colors } = useTheme()
  return (
    <FlatList
      data={data}
      ListHeaderComponent={<Text style={[styles.title, { color: colors?.onSurface }]}>Trending Coins</Text>}
      renderItem={({ item }) => (<CoinCard />)}
      keyExtractor={(item) => item.id.toString()}
    />
  );
});

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: fontSize.large,
  }
})

export default TrendingCoins;

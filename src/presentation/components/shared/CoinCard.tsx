import { memo } from "react";
import { StyleSheet, View } from "react-native";

type CoinCardProps = {}

const CoinCard: React.FC<CoinCardProps> = memo(({}) => {
  return (
    <View style={styles.container}>

    </View>
  )
})

const styles = StyleSheet.create({
  container: {

  }
})

export default CoinCard
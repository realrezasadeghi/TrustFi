import { memo } from "react";
import { useTheme } from "@/presentation/hooks";
import { fontSize, spacings, shapes } from "@/presentation/theme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HeaderCard: React.FC = memo(() => {
  const { colors } = useTheme()
  return (
    <View style={[styles.container, { backgroundColor: colors?.primary }]}>
      <Text style={[styles.title, { color: colors?.onPrimary }]}>Welcome Reza</Text>
      <Text style={[styles.description, { color: colors?.onPrimary }]}>Make you first Investment today</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: colors?.background }]} activeOpacity={0.9}>
        <Text style={[styles.labelButton, { color: colors?.primary }]}>
          Invest Today
        </Text>
      </TouchableOpacity>
    </View>
  )
})


const styles = StyleSheet.create({
  container: {
    gap: spacings.small,
    padding: spacings.medium,
    borderRadius: shapes.medium,
  },
  title: {
    fontSize: fontSize.medium
  },
  description: {
    fontWeight: 'bold',
    fontSize: fontSize.large,
  },
  button: {
    width: 140,
    height: 40,
    justifyContent: 'center',
    marginTop: spacings.medium,
    borderRadius: shapes.small,
  },
  labelButton: {
    textAlign: 'center',
    fontSize: fontSize.medium
  }
})

export default HeaderCard;
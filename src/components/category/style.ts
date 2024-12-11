import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    height: 36,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderColor: colors.gray[300],
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    gap: 10,
  },
  name: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray[500],
  },

  containerSelected: {
    backgroundColor: colors.green.base,
    borderWidth: 1,
    borderColor: colors.green.base,
  },
  nameSelected: {
    color: colors.gray[100],
  },
});
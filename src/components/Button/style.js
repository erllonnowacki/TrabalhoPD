import { StyleSheet } from 'react-native';
import colors from "../Colors/index";

const styles = StyleSheet.create({
 container: {
  backgroundColor: colors.baseColor,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 16,
  marginBottom: 10,
  marginTop: 30,
  height: 56,
  marginHorizontal: 40
 },
 text: {
  fontSize: 16,
  color: colors.white,
  fontWeight: "bold"
  // fontFamily: fonts.heading
 },
});

export default styles
import UserData from "@/components/user-data";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View>
      <Text style={styles.title}>P&G PROJECT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#FFFFFF",
    fontWeight: "300",
  },
});

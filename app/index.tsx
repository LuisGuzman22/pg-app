import Login from "@/components/login";
import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>P&G PROJECT</Text>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5A61FF",
  },
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

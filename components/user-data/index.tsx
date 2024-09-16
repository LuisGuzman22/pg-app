import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useLogin from "@/hooks/useLogin";

export default function UserData() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>John Wick</Text>
      <Text style={styles.rol}>Capataz</Text>
      <Text style={styles.lastUpdate}>
        Última actualizacion: 10/09/24 - 10:10:00
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#5A61FF",
  },
  name: {
    marginBottom: 5,
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  rol: {
    marginBottom: 5,
    fontSize: 14,
    color: "#FFFFFF",
  },
  lastUpdate: { fontSize: 14, color: "#FFFFFF", marginBottom: 20 },
});

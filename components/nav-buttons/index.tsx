import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useLogin from "@/hooks/useLogin";
import { Button, Icon } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

export default function NavButtons() {
  const router = useRouter();

  const handleAsignClick = () => {
    console.log("click asignar");
    router.replace(`/asign-rol`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleAsignClick();
          }}
        >
          <Icon size={10} source={"camera"}></Icon>
        </TouchableOpacity>
        <Text style={styles.label}>Asignar</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon size={10} source={"camera"}></Icon>
        </TouchableOpacity>
        <Text style={styles.label}>Registrar actividad</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon size={10} source={"camera"}></Icon>
        </TouchableOpacity>
        <Text style={styles.label}>Cargar datos</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon size={10} source={"camera"}></Icon>
        </TouchableOpacity>
        <Text style={styles.label}>Sincronizar</Text>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: "flex",
    // flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
    margin: 30,
    // height: 100,
    flexDirection: "row",
    padding: 20,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
  },
  button: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#21005D",
    borderRadius: 50,
  },
  label: {
    fontSize: 10,
  },
});

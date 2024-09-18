import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import { useRouter } from "expo-router";
import useLogin from "@/hooks/useLogin";

export default function Login() {
  const router = useRouter();

  const { login } = useLogin();

  const handleOnClick = () => {
    // router.replace("/main");
    login({ user: "oficina@mpm.cl", password: "mpm#123456" });
  };

  return (
    <SafeAreaView style={styles.loginBox}>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        id="user"
        mode="flat"
        dense={true}
        //   onChangeText={onChangeText}
        value={""}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        id="password"
        secureTextEntry={true}
        mode="flat"
        dense={true}
        //   onChangeText={onChangeText}
        value={""}
      />
      <Button
        mode="elevated"
        style={styles.button}
        buttonColor="black"
        textColor="white"
        onPress={() => {
          handleOnClick();
        }}
      >
        Iniciar sesión
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  loginBox: {
    backgroundColor: "#D9D9D9",
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 40,
    paddingBottom: 40,
    borderRadius: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 16, // Android
  },
  input: {
    height: 40,
    margin: 12,
    backgroundColor: "white",
    // borderRadius: 8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  button: {},
});

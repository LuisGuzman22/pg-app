import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput } from "react-native-paper";
import { Link } from "expo-router";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ABOUT</Text>
      <SafeAreaView style={styles.loginBox}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          //   onChangeText={onChangeText}
          //   value={text}
        />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          secureTextEntry={true}
          //   onChangeText={onChangeText}
          //   value={text}
        />
        <Button
          mode="elevated"
          style={styles.button}
          buttonColor="black"
          textColor="white"
          onPress={() => console.log("Pressed")}
        >
          <Link href={"/"}>About</Link>
        </Button>
      </SafeAreaView>
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

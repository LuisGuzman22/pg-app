import NavButtons from "@/components/nav-buttons";
import UserData from "@/components/user-data";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Main() {
  return (
    <View style={styles.container}>
      <UserData />
      <SafeAreaView style={styles.navContainer}>
        <NavButtons />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5A61FF",
    height: "100%",
  },
  navContainer: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});

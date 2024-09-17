import NavButtons from "@/components/nav-buttons";
import UserData from "@/components/user-data";
import { SetStateAction, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";

export default function Main() {
  const [selected, setSelected] = useState("");

  const data = [
    { key: "1", value: "Juan Perez", disabled: true },
    { key: "2", value: "Panchito" },
    { key: "3", value: "Teniente Bello" },
    { key: "5", value: "Jaimeme" },
    { key: "6", value: "Steve" },
    { key: "7", value: "Lucas" },
  ];

  return (
    <PaperProvider>
      <View style={styles.container}>
        <SafeAreaView style={styles.navContainer}>
          <View style={styles.formContainer}>
            <SelectList
              setSelected={(val: SetStateAction<string>) => setSelected(val)}
              data={data}
              save="value"
              placeholder="Trabajadores"
              searchPlaceholder="Buscar"
              //   dropdownShown={true}
              boxStyles={{
                marginBottom: 20,
                borderColor: "#D9D9D9",
              }}
              inputStyles={{
                fontSize: 18,
              }}
            />
            <SelectList
              setSelected={(val: SetStateAction<string>) => setSelected(val)}
              data={data}
              save="value"
              placeholder="Tareas"
              searchPlaceholder="Buscar"
              //   dropdownShown={true}
              boxStyles={{
                borderColor: "#D9D9D9",
              }}
              inputStyles={{
                fontSize: 18,
              }}
            />
          </View>
        </SafeAreaView>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5A61FF",
    height: "100%",
    padding: 20,
  },
  navContainer: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  formContainer: {
    padding: 40,
    marginTop: 100,
  },
});

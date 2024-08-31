import { Link } from "expo-router";
import { Text, View, TextInput, StyleSheet, Pressable } from "react-native";

export default function Auth() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Hello World!</Text>
      <TextInput
        style={styles.input}
        placeholder="User ID"
        keyboardType="numeric"
      />
      <TextInput style={styles.input} placeholder="Password" />
      <Link href="/home" style={styles.button}>
        <Pressable>
          <Text>Log in</Text>
        </Pressable>
      </Link>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexDirection: "column",
    alignItems: "center",
    gap: 18,
    paddingTop: 240,
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  logo: {
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#0078ff",
  },
});

import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  return (
    <View>
      <Text>Hello World</Text>
      <Link href="/auth">Login</Link>
    </View>
  );
}

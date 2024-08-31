import { Tabs } from "expo-router";

export default function Tab() {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="map" />
    </Tabs>
  );
}

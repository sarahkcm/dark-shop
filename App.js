import { StatusBar } from "expo-status-bar";
import StackNav from "./src/common/utils/stack-nav";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <StackNav />
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}

import { useFonts } from "expo-font";
import { fonts } from "./styles/fonts";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Text } from "./components/Text";
import { View } from "react-native";

export const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <View style={{ backgroundColor: "black" }}>
        <Text>Hello!</Text>
      </View>
    </ThemeProvider>
  );
};

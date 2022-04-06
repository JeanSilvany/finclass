import { useFonts } from "expo-font";
import { fonts } from "./styles/fonts";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { Text } from "./components/Text";
import { Button } from "./components/Button";
import { View } from "react-native";
import { Separator } from "./components/Separator";
import { BackButton } from "./components/BackButton";
import { Dots } from "./components/Dots";

export const App = () => {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <View
        style={{
          backgroundColor: "black",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Hello!</Text>
        <Dots amount={20} />
        <BackButton />
        {/* <Separator height={20} /> */}
        <Button title="Assine agora" textType="bold" />
      </View>
    </ThemeProvider>
  );
};

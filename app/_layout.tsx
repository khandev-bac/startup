import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";
export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    "Qreg": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Qmed": require("../assets/fonts/Quicksand-Medium.ttf"),
    "Qblod": require("../assets/fonts/Quicksand-Bold.ttf"),
    "Qsemi": require("../assets/fonts/Quicksand-SemiBold.ttf")
  })
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  if (!fontsLoaded) {
    return null
  }
  return <Stack screenOptions={{ headerShown: false }}></Stack>;
}

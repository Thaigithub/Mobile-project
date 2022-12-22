import * as React from "react";
import SplashScreen from "./SplashScreen.component";
import LoginScreen from "./LoginScreen.component";

const DELAY_SECONDS = 2;

export default function StartScreen() {
  const [currentScreen, setCurrentScreen] = React.useState(<SplashScreen />);
  React.useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(<LoginScreen />);
    }, DELAY_SECONDS * 1000);
  });
  return currentScreen;
}

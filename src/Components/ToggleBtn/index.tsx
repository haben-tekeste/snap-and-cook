import { useState } from "react";
// import { Switch } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../../store";
import { changeTheme } from "../../store/slices/theme";
import { darkTheme, defaultTheme } from "../../../constants/theme";
import Switch from "expo-dark-mode-switch";

function Toggle() {
  const { darkMode } = useAppSelector((state) => state.theme);
  const [isSwitchOn, setIsSwitchOn] = useState(darkMode ?? false);
  const dispatch = useAppDispatch();

  const onToggleSwitch = () => {
    const newSwitchValue = !isSwitchOn;
    setIsSwitchOn(newSwitchValue);
    if (newSwitchValue) {
      dispatch(changeTheme({ theme: darkTheme, darkMode: true }));
    } else {
      dispatch(changeTheme({ theme: defaultTheme, darkMode: false }));
    }
  };

  return (
    <Switch
      value={isSwitchOn}
      onChange={onToggleSwitch}
      style={{ marginRight: 4 }}
    />
  );
}

export default Toggle;

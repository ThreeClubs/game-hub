import React, { useState } from "react";
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const [toggleLabel, setToggleLabel] = useState<string>("Light");
  
  const handleToggleLabel = () => {
    toggleColorMode()
    setToggleLabel(toggleLabel === "Dark" ? "Light" : "Dark")
  }

  return (
    <HStack>
      <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={handleToggleLabel}/>
      <Text>{toggleLabel} Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;

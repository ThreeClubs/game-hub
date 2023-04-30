import { Box } from "@chakra-ui/react";
import React from "react";
import { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width="300px"
      borderRadius={10}
      overflow="hidden"
      transition="transform 0.3s ease-in-out"
      _hover={{
        boxShadow: "lg",
        size: "1.1rem",
        transform: "scale(1.05)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;

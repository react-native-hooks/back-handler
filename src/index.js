/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { BackHandler } from "react-native";

const initialState = 0;

export default backHandler => {
  const [count, updateCount] = useState(initialState);
  function handleBackPress() {
    updateCount(prevCount => prevCount + 1);
    if (typeof backHandler === "function" && backHandler !== "exit") {
      backHandler();
      return true;
    }
    return false;
  }

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);

  return count;
};

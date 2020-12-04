import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home";
import Chat from "./screens/Chat";
import { color } from "react-native-reanimated";
import { Actions, Router, Scene } from 'react-native-router-flux';

export default function App() {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} initial title="Home" />
        <Scene key="Chat" component={Chat} title="Chat" />
      </Scene> 
    </Router>
  );
}

import * as React from "react";
import { View } from "react-native";
import { WebView } from 'react-native-webview';

//permet d afficher la video dans un nouvelle ecran
const WebviewScreen = ({ route }) => {
  const { url } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: url }} />
    </View>
  );
};

export default WebviewScreen;

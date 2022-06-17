import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { Text } from "../typography/text.component";
import WebView from "react-native-webview";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-itmes: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestuarantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption">
        {restaurant.name}
      </Text>
    </Item>
  );
};

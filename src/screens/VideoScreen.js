import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import BackgroundImage from "../component/PersonnalBackground";
import styled from 'styled-components/native';

//liste des liens Youtube a retouner
const videos = [
  {
    id: 1,
    title: "Analyse: Ocarina of time",
    url: "https://www.youtube.com/embed/rNq-Md-wmP0",
    thumbnailUrl: "",
  },
  {
    id: 2,
    title: "Un peu de Rap",
    url: "https://www.youtube.com/embed/mO1QBTG6EXs",
    thumbnailUrl: "",
  },
  {
  id: 3,
  title: "Euh en français",
  url: "https://www.youtube.com/embed/X8yqwvYo5PA",
  thumbnailUrl: "",
  },
  {
  id: 4,
  title: "Mieux que GoT",
  url: "https://www.youtube.com/embed/O6nuwrR6u90",
  thumbnailUrl: "",
  },
  {
  id: 5,
  title: "Vous êtes presser, lui aussi",
  url: "https://www.youtube.com/embed/vzfd7nf4p5M",
  thumbnailUrl: "",
  },
  {
  id: 6,
  title: "Un monde pas JOJO",
  url: "https://www.youtube.com/embed/dqc4gno0Hso",
  thumbnailUrl: "",
  },
  {
  id: 7,
  title: "Un top 10?",
  url: "https://www.youtube.com/embed/sTaY4k5d60Y",
  thumbnailUrl: "",
  },
  {
  id: 8,
  title: "On n'oublie pas les méchants",
  url: "https://www.youtube.com/embed/svWZVWO7IDg",
  thumbnailUrl: "",
  },
  {
  id: 9,
  title: "Next GEN",
  url: "https://www.youtube.com/embed/Ln0WWfNn6ZU",
  thumbnailUrl: "",
  },
  {
  id: 10,
  title: "Détente ou travail",
  url: "https://www.youtube.com/embed/nvq2yHYYxCU",
  thumbnailUrl: "",
  },
  {
  id: 11,
  title: "Un peu de douceur",
  url: "https://www.youtube.com/embed/b3KUyPKbR7Q",
  thumbnailUrl: "",
  },
];

//renvoie toute la liste des videos du tableau avec un lien actif pour lire la video dans un autre screen
const VideoScreen = ({ navigation }) => {
  return (
    <BackgroundImage source={require('../../public/Twiligth_princess.png')}>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <StyledText>{item.title}</StyledText>
            <TouchableOpacity onPress={() => navigation.navigate('Webview', { url: item.url })}>
              <StyledButton>Regarder la video</StyledButton>
            </TouchableOpacity>
          </View>
        )}
      />
    </BackgroundImage>
  );
};
  
const StyledText = styled.Text`
  margin-top: 20px;
  font-size: 22px;
  font-weight: normal;
  color: black;
  text-align: center;
`;

const StyledButton = styled.Text`
  color: #2065b7;
  font-size: 16px;
  font-weight: normal;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
`;

export default VideoScreen;

import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import axios from "axios";
import BackgroundImage from "../component/PersonnalBackground";
import styled from "styled-components/native";

const GamesScreen = ({ navigation }) => {
  const [games, setGames] = useState([]);

  //recupere l api de zelda et la liste des jeux (20 jeux)
  useEffect(() => {
    axios
      .get("https://zelda.fanapis.com/api/games")
      .then((response) => {
        setGames(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //redirection pour un jeu avec son descriptif vers un autre ecran
  const handleGamePress = (game) => {
    navigation.navigate("Article", { game });
  };

  //pour les likes
  const handleLikePress = (gameId) => {
    setGames((prevGames) =>
      prevGames.map((game) =>
        game.id === gameId ? { ...game, isLiked: !game.isLiked } : game
      )
    );
  };

  //render
  return (
    <BackgroundImage source={require("../../public/the-legend-of-zelda-breath-of-the-wild.jpg")}>
      <Container>
        <GameList
          data={games}
          keyExtractor={(game) => game.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleGamePress(item)}>
              <Game>
                <GameName>{item.name}</GameName>
                <TouchableOpacity onPress={() => handleLikePress(item.id)}>
                  <LikeText>
                    {item.isLiked ? " Love" : " liked ?"}
                  </LikeText>
                </TouchableOpacity>
              </Game>
            </TouchableOpacity>
          )}
        />
      </Container>
    </BackgroundImage>
  );
};

const Container = styled(View)`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Game = styled(View)`
  margin: 10px;
  align-items: center;
`;

const GameName = styled(Text)`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: black;
  text-decoration-line: underline;
`;

const LikeText = styled(Text)`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: red;
`;

const GameList = styled.FlatList`
  flex-grow: 1;
`;

export default GamesScreen;

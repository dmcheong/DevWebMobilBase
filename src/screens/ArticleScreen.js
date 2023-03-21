import React from "react";
import styled from "styled-components/native";
import BackgroundImage from "../component/PersonnalBackground";

//retourne le details d un jeux de la liste
const ArticleScreen = ({ route }) => {
  const { game } = route.params;

  //render
  return (
    <BackgroundImage source={require('../../public/Skyward_Sword.jpg')}>
      <Container>
        <Name>{game.name}</Name>
        <Description>{game.description}</Description>
        <Developer>Develop by: {game.developer}</Developer>
        <Publisher>Edit by: {game.publisher}</Publisher>
        <ReleasedDate>Released: {game.released_date}</ReleasedDate>
      </Container>
    </BackgroundImage>  
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Name = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  text-decoration-line: underline;
`;

const Description = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: normal;
  color: black;
`;

const Developer = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: red;
`;

const Publisher = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: red;
`;

const ReleasedDate = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export default ArticleScreen;

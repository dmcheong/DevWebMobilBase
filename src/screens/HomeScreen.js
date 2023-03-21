import React from 'react';
import styled from 'styled-components/native';
import BackgroundImage from '../component/PersonnalBackground';

//ecran d'accueil avec liens de navigation
const HomeScreen = ({ navigation }) => {
  return (
    <BackgroundImage source={require('../../public/the-legend-of-zelda-tears-of-the-kingdom-jaquette-1.jpg')}>
      <TextStyled>Bienvenue au Royaume de Hyrule.</TextStyled>
      <Container>
        <Button onPress={() => navigation.navigate('Game')}>
          <ButtonText>Games</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Video')}>
          <ButtonText>Vidéos</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Ocarina')}>
          <ButtonText>Ocarina</ButtonText>
        </Button>
      </Container>
    </BackgroundImage>
  );
};

// creation des Styled Components
const TextStyled = styled.Text`
  font-family: "Zelda";
  font-size: 20px;
  padding: 10px;
  color: #fff;
  text-align: center;
  text-shadow-color: #000;
  text-shadow-offset: { width: -1, height: 1 };
  text-shadow-radius: 10px;
`;

const Container = styled.View`
  position: absolute;
  top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: green;
  padding: 10px;
  border-radius: 99px;
  margin: 14px;
`;

const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;

export default HomeScreen;

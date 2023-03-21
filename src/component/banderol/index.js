import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

//Renvoie une image dans l ecran de login
const Bandeau = () => {
  return (
    <ImageStyled
      source={require('../../../public/the-legend-of-zelda-tears-of-the-kingdom-jaquette-1.jpg')}
    />
  );
};

const ImageStyled = styled(Image)`
  resizeMode: stretch;
  width: 100%;
  height: 60%;
  bottom: 10px;
`;

export default Bandeau;

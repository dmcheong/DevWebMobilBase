import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Sound from 'react-native-sound';
import BackgroundImage from '../component/PersonnalBackground';
import styled from 'styled-components';

//permet de lire des fichiers audio mp3
const Ocarina = () => {
  
  //liste des fichiers audios
  const [audioList, setAudioList] = useState([
    { title: 'Fairy Flying', file: require('../../sounds/Fairy_Flying.mp3') },
    { title: 'LonLon Ranch', file: require('../../sounds/Lon_Lon_Ranch.mp3') },
    { title: 'Noctune of Shadow 3', file: require('../../sounds/NocturneofShadow.mp3') },
    { title: 'Ocarina of Zeldad', file: require('../../sounds/OcarinaZeldas_Lullaby.mp3') },
  ]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    if (sound) {
      sound.release();
    }

    const currentAudio = audioList[currentAudioIndex].file;
    const newSound = new Sound(currentAudio, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('Error loading sound: ', error);
      }
    });

    setSound(newSound);

    return () => {
      newSound.release();
    };
  }, [currentAudioIndex]);

  //playSoun et stop sound sexecute sur les mêmes boutons
  const playSound = () => {
    if (sound) {
      sound.play(() => {
        setIsPlaying(false);
        sound.release();
      });
      setIsPlaying(true);
    }
  };

  const stopSound = () => {
    if (sound) {
      sound.stop(() => {
        setIsPlaying(false);
        sound.release();
      });
    }
  };

  const handleAudioPress = index => {
    if (index !== currentAudioIndex) {
      setCurrentAudioIndex(index);
      setIsPlaying(false);
    } else if (isPlaying) {
      stopSound();
    } else {
      playSound();
    }
  };

  return (
    <BackgroundImage source={require('../../public/the-gate-of-time-phone-wallpaperfan-zelda-skyward.jpg')}>
      <Container>
        {audioList.map((audio, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => handleAudioPress(index)}>
            <AudioView>
              <AudioText>{audio.title}</AudioText>
            </AudioView>
          </TouchableWithoutFeedback>
        ))}
      </Container>
    </BackgroundImage>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const AudioView = styled.View`
  width: 200px;
  height: 50px;
  background-color: red;
  margin-vertical: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 99px;
`;

const AudioText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;

export default Ocarina;

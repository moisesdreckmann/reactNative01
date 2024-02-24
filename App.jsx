import React, { useState } from 'react';
import { Alert, View, Text, Image, Switch, TouchableOpacity, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './components/Estilos.jsx';
import imagem from './assets/gerador.png';

function App() {
  const [switchLigado, setSwitchLigado] = useState(true);
  const [valueInput, setValueInput] = useState('');
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const length = 7; 
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
    setValueInput(newPassword);
  };

  function handleSwitch() {
    setSwitchLigado(!switchLigado);
  }

  function handleCopy() {
    Alert.alert('Senha copiada: ' + password);
  }

  return (
    <View style={switchLigado ? styles.sectionContainer : styles.sectionContainer2}>
      <Switch
        style={styles.switchStyle}
        value={switchLigado}
        onValueChange={handleSwitch}
        thumbColor={'#FA7F08'}
      />
      <Image source={imagem} style={styles.imgStyle} />

      <TextInput
        style={styles.textStyle2}
        placeholderTextColor={'white'}
        value={valueInput}
        onChangeText={text => setValueInput(text)}
      />

      <TouchableOpacity onPress={generatePassword}>
        <Text style={styles.textStyle}>GENERATE</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCopy}>
        <View style={styles.buttonContainer}>
          <Button
            title='COPY'
            onPress={handleCopy}
            accessibilityLabel='COPY'
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default App;

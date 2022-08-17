import {CustomImage} from './CustomImage';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ButtonDevam = props => {
  const {text, onPressHandler, bgColor, image} = props;
  return (
    <TouchableOpacity style={styles.buttondevam} onPress={onPressHandler}>
      <CustomImage
        style={styles.customImage}
        width={20}
        height={20}
        source={image}
      />

      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonDevam;

const styles = StyleSheet.create({
  buttondevam: {},
  customImage: {},
  buttonText: {},
});

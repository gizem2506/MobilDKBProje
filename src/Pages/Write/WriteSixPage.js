import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import Image from '../../assets/manzara.png';
import {Dimensions} from 'react-native';
import ButtonDevam from '../../components/Common/ButtonDevam';
class WriteSecondPage extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <ImageBackground
            style={styles.imageContainer}
            source={Image}
            resizeMode="stretch"
            alt="background"></ImageBackground>
        </View>
        <View style={styles.writeContainer}>
          <Text style={styles.writetext}>6</Text>
          <Text style={styles.writetitle}>
            Bazen ilham ne yaparsan yap gelmez. Eğer hala ilham gelmediyse
            düşünme dışarı çık ve sosyalleş! Başka insanların düşünceleri sende
            bir ilham ışığı yakabilir.
          </Text>
        </View>
        <Text style={styles.writeyazi}>
          Unutma, gününe devam ederken aklına gelen her şeyi not almalısın
        </Text>
        <ButtonDevam
          image={require('../../assets/icons/home.png')}
          onPressHandler={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}
export default WriteSecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageContainer: {
    height: height,
    width: width,
  },
  writetitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingTop: 8,
    color: 'white',
  },

  writetext: {
    fontWeight: 'bold',
    color: 'white',
  },
  writeContainer: {
    margin: 20,
    paddingTop: 100,
    marginTop: 90,

  },
  writeyazi: {
    margin: 20,
    color: 'white',
  },
});
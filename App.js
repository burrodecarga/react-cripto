import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.porta_imagen}>
        <Image style={styles.imagen} source={require('./assets/img/bg.jpg')} />
      </View>
      <View style={styles.porta_scroll}>
        <Text style={styles.titulo}>Que globo escojer</Text>
        <ScrollView horizontal={true}>
          <View>
            <Image source={require('./assets/img/bg1.png')} style={styles.bg} />
          </View>

          <View>
            <Image source={require('./assets/img/bg2.png')} style={styles.bg} />
          </View>

          <View>
            <Image source={require('./assets/img/bg1.png')} style={styles.bg} />
          </View>

          <View>
            <Image source={require('./assets/img/bg2.png')} style={styles.bg} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.porta_scroll}>
      <Text style={styles.titulo}>Mejores selecciones</Text>  

        <View style={styles.porta_cuadrado}>
          <View>
            <Image
              source={require('./assets/img/bg2.png')}
              style={styles.mejores}
            />
          </View>
          <View>
            <Image
              source={require('./assets/img/bg2.png')}
              style={styles.mejores}
            />
          </View>
          <View>
            <Image
              source={require('./assets/img/bg2.png')}
              style={styles.mejores}
            />
          </View>
          <View >
            <Image
              source={require('./assets/img/bg2.png')}
              style={styles.mejores}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  porta_imagen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  porta_scroll: {
    marginTop: 40,
    flex: 1,
  },
  imagen: {
    width: 320,
    height: 300,
  },
  total: {
    flex: 1,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  banner: {
    height: 250,
    flex: 1,
  },
  bg: {
    width: 200,
    height: 180,
    marginRight: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 20,
  },
  porta_cuadrado: {
   flexDirection: 'row',
   flexWrap: 'wrap',
   justifyContent: 'space-between',
  },
  mejores: {  
   flexBasis:'49%',
  

  },
});

export default App;

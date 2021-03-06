import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerStyle}>

        <Image
          style={styles.logoStyle}
          source={require("./assets/logo.png")}
          resizeMode="contain"
        />

      </View>

      <ScrollView>

        <Text style={styles.h1Style}>Interstellar</Text>

        <Text style={styles.normalStyle}>2014 PG-13 2h49min Adventure, Drama, Sci-Fic</Text>

        <View style={styles.bandeauFilm}>


          <Image
            style={styles.imgFilmStyle}
            source={require("./assets/film.jpg")}
            resizeMode="contain"
          />

          <View style={styles.droiteStyle}>
            <Text style={styles.normalStyle}>jerigjerio gjige rjoiej giorejg jgrigjreiogjeri jgi jierjreiogjerijg</Text>

            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.8}
              onPress={() => {
                console.log("pressed !");
              }}
            >
              <Text style={styles.textButtonStyle}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>


        </View>

        <View style={styles.bandeauRateStyle}>
          <View style={styles.insideRateStyle}>
            <FontAwesome style={styles.icon} name="star" size={32} color="yellow" />
            <Text style={[styles.smallStyle, styles.spaceStyle]} ><Text style={styles.boldStyle}>8.6</Text>/10</Text>
            <Text style={[styles.smallStyle, styles.spaceStyle]}>1.1M</Text>
          </View>
          <View style={styles.insideRateStyle}>
            <FontAwesome style={styles.icon} name="star-o" size={32} color="yellow" />
            <Text style={[styles.smallStyle, styles.spaceStyle]}>Rate this</Text>
          </View>
          <View style={styles.insideRateStyle}>
            <FontAwesome style={styles.icon} name="square" size={32} color="green" />
            <Text style={[styles.smallStyle, styles.spaceStyle]}>Metascore</Text>
            <Text style={[styles.smallStyle, styles.spaceStyle]}>46 critics reviews</Text>
          </View>

        </View>


        <Text style={styles.titleStyle}>
          Top Billed Cast
        </Text>

        <ScrollView horizontal={true}>

          <View style={styles.bandeauStyle}>

            <Image
              style={styles.imgStyle}
              source={require("./assets/jessica.jpg")}
            />

            <Image
              style={styles.imgStyle}
              source={require("./assets/mackenzie.jpg")}
            />

            <Image
              style={styles.imgStyle}
              source={require("./assets/mackenzie.jpg")}
            />

            <Image
              style={styles.imgStyle}
              source={require("./assets/mackenzie.jpg")}
            />

            <Image
              style={styles.imgStyle}
              source={require("./assets/mackenzie.jpg")}
            />

            <Image
              style={styles.imgStyle}
              source={require("./assets/mackenzie.jpg")}
            />

          </View>

        </ScrollView>

        <View style={styles.bandeauDirectorStyle}>
          <View>
            <Text style={styles.h2Style}>Director</Text>
            <Text style={styles.normalStyle}>Christopher Nolan</Text>
          </View>
          <View>
            <Text style={styles.h2Style}>Writer</Text>
            <Text style={styles.normalStyle}>Jonathan Nolan (written by) and Christopher (written by)</Text>
          </View>
        </View>

        <StatusBar style="auto" />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  h1Style: {
    fontSize: 40,
    color: "lightgrey",
  },

  h2Style: {
    fontSize: 22,
    color: "lightgrey",
  },

  headerStyle: {
    marginTop: 10,
    height: 50,
    width: "100%",
    backgroundColor: 'rgb(57,57,57)',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: Constants.statusBarHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  button: {
    backgroundColor: "rgb(2,119,189)",
    height: 50,
    marginTop: 10,
    width: "90%",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButtonStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  droiteStyle: {
    flex: 1,
  },

  imgStyle: {
    height: 150,
    width: 100,
    margin: 5,
    resizeMode: "cover",
  },

  imgFilmStyle: {
    height: 150,
    width: 150,
    marginTop: 10,

  },

  bandeauFilm: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-around',
    width: "100%",
  },

  bandeauStyle: {
    flexDirection: "row",
    flex: 1,
  },

  bandeauRateStyle: {
    backgroundColor: '#0E0E0E',
    // backgroundColor: 'pink',
    // height:80,
    marginTop: 5,
    flexDirection: "row",
    // flex: "block",
    justifyContent: 'space-between',
    alignItems: "flex-start",
    paddingTop: 1,
    marginBottom: 5,
  },

  bandeauDirectorStyle: {
    flex: 1,
  },

  logoStyle: {
    height: "80%",
    width: 60,
    marginLeft: 10,
  },

  titleStyle: {
    fontSize: 30,
    color: "lightgrey",
  },

  insideRateStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    // justifyContent: 'flex-start',
    paddingTop: 2,
    // height: 30,
  },

  // spaceStyle: {
  //   alignItems: 'flex-start',
  //   justifyContent: 'flex-start',
  //   flex: 1,
  // },

  normalStyle: {
    fontSize: 18,
    color: "grey",
    margin: 5,
  },

  smallStyle: {
    fontSize: 16,
    color: "grey",
    margin: 5,
  },

  littleStyle: {
    fontSize: 15,
    color: "grey",
    margin: 5,
  },


  boldStyle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "lightgrey",
  },

});

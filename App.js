import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
//import { Dimensions } from "react-native";



const Header = ({ }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        style={styles.ImageSize}
        source={require("./assets/house.png")}
      />
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "#3bbcb8", marginLeft: 10 }}>SmartHome</Text>
    </View>
  )
}
const RoomPictures = ({ }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.RoomView}>
        <Image style={styles.RoomImages} source={require("./assets/living-room.png")} />
        <Text>Living Room</Text>
      </View>

      <View style={styles.RoomView}>
        <Image style={styles.RoomImages} source={require("./assets/bed.png")} />
        <Text>Bedroom</Text>
      </View>

      <View style={styles.RoomView}>
        <Image style={styles.RoomImages} source={require("./assets/kitchen.png")} />
        <Text>Kitchen</Text>
      </View>

    </View>
  )
}
const DeviceButtons = ({ lampColor: Color, setLampColor: setColor, devicesOnNum, setDevicesOnNum, nameOfDevice }) => {

  return (
    <View>
      <View style={styles.DeviceBar}>

        <View style={{ flexDirection: "row", alignItems: 'center' }}>

          <View style={{ height: 10, width: 10, backgroundColor: Color, marginRight: 10, marginLeft: 10 }}></View>
          <Text>{nameOfDevice}</Text>

        </View>

        <View style={{ marginRight: 10 }}>
          <Button title='on'
            onPress={() => {
              if (Color == "red") {
                setDevicesOnNum(devicesOnNum + 1)
                setColor("green")
              }

            }} />

          <Button title='off'
            onPress={() => {
              if (Color == "green") {
                setDevicesOnNum(devicesOnNum - 1)
                setColor("red")
              }
            }} />
        </View>
      </View>
    </View>
  )
}

export default function App() {

  const [lampColor, setLampColor] = useState("red")
  const [tvColor, setTvColor] = useState("red")
  const [heaterColor, setHeaterColor] = useState("red")
  const [devicesOnNum, setDevicesOnNum] = useState(0)

  return (
    <View style={styles.container}>

      <Header />

      <Text style={{ marginBottom: 10, marginTop: 10, fontSize: 26, fontWeight: "bold" }}>Rooms</Text>

      <RoomPictures />

      <Text style={{ marginBottom: 10, marginTop: 20, fontSize: 26, fontWeight: "bold" }}>Devices</Text>

      <DeviceButtons lampColor={lampColor} setLampColor={setLampColor} devicesOnNum={devicesOnNum} setDevicesOnNum={setDevicesOnNum} nameOfDevice="Living Room" />
      <DeviceButtons lampColor={heaterColor} setLampColor={setHeaterColor} devicesOnNum={devicesOnNum} setDevicesOnNum={setDevicesOnNum} nameOfDevice="Heater" />
      <DeviceButtons lampColor={tvColor} setLampColor={setTvColor} devicesOnNum={devicesOnNum} setDevicesOnNum={setDevicesOnNum} nameOfDevice="TV" />


      <Text style={{ fontWeight: "bold" }}>Total Devices On: {devicesOnNum}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,

  },
  ImageSize: {
    width: 50,
    height: 50,
  },
  RoomImages: {
    width: 75,
    height: 75,

  },
  RoomView: {
    backgroundColor: "#3bbcb8",
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10
  },
  DeviceBar: {
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between',
    marginBottom: 20,
    height: 85,
    backgroundColor: "#fef6a5",
  }
});

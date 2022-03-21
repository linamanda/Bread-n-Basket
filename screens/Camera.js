import React, { Component } from "react";
import { View, Text } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import Scanner from "../components/Scanner";

class Camera extends Component {
  constructor(props) {
    super(props);
  }

  onSwipeLeft(gestureState) {
    const { navigation } = this.props;
    navigation.navigate("ShoppingList");
  }

  onSwipeRight(gestureState) {
    const { navigation } = this.props;
    navigation.navigate("Profile");
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
        onSwipeRight={(state) => this.onSwipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: "lightblue",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Scanner />
        </View>
      </GestureRecognizer>
    );
  }
}

export default Camera;

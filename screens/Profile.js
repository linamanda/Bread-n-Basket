import React, { Component } from "react";
import { View, Text } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  onSwipeLeft(gestureState) {
    const { navigation } = this.props;
    navigation.navigate("Camera");
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };

    return (
      <GestureRecognizer
        onSwipeLeft={(state) => this.onSwipeLeft(state)}
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
          <Text>Profile</Text>
        </View>
      </GestureRecognizer>
    );
  }
}

export default Profile;

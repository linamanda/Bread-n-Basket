import React, { Component } from "react";
import { View, Text } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

class ShoppingList extends Component {
  constructor(props) {
    super(props);
  }

  onSwipeRight(gestureState) {
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
          <Text>Shopping List</Text>
        </View>
      </GestureRecognizer>
    );
  }
}

export default ShoppingList;

import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Tab from './Tab';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Timeline');
  const { routes } = state;
  const colorMap = {
    Timeline: '#FC257E',
    Speakers: '#FC9F25',
    Highlights: '#A41BE4',
    Info: '#FC257E',
  };

  const renderColor = (currentRoute) => {
    if (currentRoute !== selected) {
      return '#000000';
    }

    return colorMap[currentRoute];
  };

  const handleClick = (currentRoute) => {
    setSelected(currentRoute);
    navigation.navigate(currentRoute);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route) => (
          <Tab
            tab={route}
            onPress={() => handleClick(route.name)}
            color={renderColor(route.name)}
            selected={route.name === selected}
            key={route.key}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 20,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    width: width * 0.9,
    flexDirection: 'row',
    borderRadius: 9.42,
    padding: 5,
    elevation: 4,
  },
});

export default TabBar;

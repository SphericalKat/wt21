import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Timeline from '../drawables/Timeline';
import Highlights from '../drawables/Highlights';
import Info from '../drawables/Info';
import Speakers from '../drawables/Speakers';

const Tab = ({ tab, color, selected, onPress }) => {
  const iconMap = {
    Timeline: <Timeline color={color} />,
    Speakers: <Speakers color={color} />,
    Highlights: <Highlights color={color} />,
    Info: <Info color={color} />,
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {iconMap[tab.name]}
      {selected ? <Text style={styles.text}>{tab.name}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: 6,
    paddingEnd: 6,
    paddingTop: 4,
  },
  text: {
    fontSize: 12,
    paddingTop: 4,
    fontFamily: 'Poppins-Regular',
  },
});

export default Tab;

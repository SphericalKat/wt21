import React from 'react';
import { FlatList, StyleSheet, Dimensions, View } from 'react-native';
import { Text, ListItem, Left, Body, Icon, Right, Title } from 'native-base';
import { Card } from 'react-native-paper';
import { useState } from 'react/cjs/react.development';

const { width } = Dimensions.get('screen');

const Timeline = () => {
  const data = [
    { name: 'Day 1', header: true },
    {
      time: '11 am',
      content: 'Opening Ceremony',
      color: '#FC257E',
    },
    {
      time: '11 am',
      content: 'Opening Ceremony',
      color: '#FC257E',
    },
    {
      time: '11 am',
      content: 'Opening Ceremony',
      color: '#FC257E',
    },
    {
      time: '11 am',
      content: 'Opening Ceremony',
      color: '#FC257E',
    },
    {
      time: '11 am',
      content: 'Opening Ceremony',
      color: '#FC257E',
    },
    { name: 'Day 2', header: true },
    {
      time: '11 am',
      content: 'Opening Ceremony',
      color: '#FC257E',
    },
    {
      time: '11 am',
      content: 'Opening Ceremony',
      color: '#FC257E',
    },
    {
      time: '11 am',
      content: 'Opening Ceremony',
      color: '#FC257E',
    },
    {
      time: '11 am',
      content: 'Opening Ceremony',
      color: '#FC257E',
    },
  ];

  // const headerShadow = {
  //   elevation: 8,
  //   shadowOpacity: 0.2,
  // };

  // const [headerStyle, setHeaderStyle] = useState({});

  const renderItem = ({ item }) => {
    if (item.header) {
      return (
        <ListItem itemDivider>
          <Text style={styles.header}>{item.name}</Text>
        </ListItem>
      );
    } else if (!item.header) {
      return (
        <View>
          <View style={styles.itemContainer}>
            <Text style={styles.timeText}>{item.time}</Text>
            <View style={styles.itemDivider} />
          </View>
          <Card style={[styles.card, { backgroundColor: item.color }]}>
            <Text style={styles.cardContent}>{item.content}</Text>
          </Card>
        </View>
      );
    }
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      stickyHeaderIndices={[0]}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginStart: 16,
    marginEnd: 16,
    marginBottom: 8,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Poppins-Black',
  },
  itemDivider: {
    backgroundColor: '#919191',
    height: 1,
    flex: 1,
    marginStart: 8,
  },
  timeText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#676767',
    fontFamily: 'Poppins-Light',
  },
  card: {
    height: 72,
    marginStart: 48,
    marginEnd: 16,
  },
  cardContent: {
    padding: 8,
    color: 'white',
    fontFamily: 'Poppins-Regular',
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
});

export default Timeline;

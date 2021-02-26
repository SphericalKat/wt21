import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import { Card } from 'react-native-paper';

const Timeline = () => {
  const data = [
    { name: 'Day 1', header: true },
    {
      time: '11 am',
      content: 'Opening Ceremony',
      color: '#A41BE4',
    },
    {
      time: '12 pm',
      content: 'Hackathon is Live!',
      color: '#FC257E',
    },
    {
      time: '6 pm',
      content: 'Ice Breaker Session',
      color: '#A41BE4',
    },
    {
      time: '9 pm',
      content: 'Review 1',
      color: '#FC257E',
    },
    {
      time: '11 pm',
      content: 'Game Night',
      color: '#FC9F25',
    },
    { name: 'Day 2', header: true },
    {
      time: '11 am',
      content: 'Opening Ceremony1',
      color: '#FC257E',
    },
    {
      time: '11 am',
      content: 'Opening Ceremony2',
      color: '#FC257E',
    },
    {
      time: '11 am',
      content: 'Opening Ceremony3',
      color: '#FC257E',
    },
    {
      time: '11 am',
      content: 'Opening Ceremony4',
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
        <View style={{ padding: 16, backgroundColor: 'white' }}>
          <Text style={styles.header}>{item.name}</Text>
        </View>
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
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.content ?? item.name}
        stickyHeaderIndices={[0]}
        style={{ backgroundColor: 'white' }}
      />
    </SafeAreaView>
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

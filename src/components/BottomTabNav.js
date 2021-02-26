import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Timeline from '../pages/Timeline';
import TabBar from '../components/TabBar';
import Speakers from '../pages/Speakers';
import Highlights from '../pages/Highlights';
import Info from '../pages/Info';

const Tabs = createBottomTabNavigator();
const BottomTabNav = () => {
  return (
    <Tabs.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="Timeline" component={Timeline} />
      <Tabs.Screen name="Speakers" component={Speakers} />
      <Tabs.Screen name="Highlights" component={Highlights} />
      <Tabs.Screen name="Info" component={Info} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomTabNav;

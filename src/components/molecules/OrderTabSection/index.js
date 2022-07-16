import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import ItemListFood from '../ItemListFood';
import {FoodDummy1, FoodDummy2, FoodDummy3} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={styles.indicator}
    style={styles.tabBarStyle}
    renderLabel={({route, focused}) => (
      <Text style={styles.tabText(focused)}>{route.title}</Text>
    )}
  />
);

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.containerNewTaste}>
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price="200.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price="200.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price="200.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price="200.000"
          name="Sop Bumil"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type="in-progress"
          items={3}
          price="200.000"
          name="Sop Bumil"
        />
      </View>
    </ScrollView>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.containerPopular}>
      <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="200.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="200.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
          status="Cancel"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="200.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
          status="Cancel"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy3}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="200.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
          status="Cancel"
        />
        <ItemListFood
          rating={3}
          image={FoodDummy1}
          onPress={() => navigation.navigate('OrderDetail')}
          type="past-orders"
          items={3}
          price="200.000"
          name="Sop Bumil"
          date="Jun 12, 14:00"
        />
      </View>
    </ScrollView>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
};

export default OrderTabSection;

const styles = StyleSheet.create({
  tabView: {backgroundColor: 'white'},
  indicator: {
    backgroundColor: '#020202',
    height: 3,
    width: '10%',
    marginLeft: '14.5%',
  },
  tabBarStyle: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
    marginRight: 24,
  },
  tabText: focused => ({
    fontFamily: 'Poppins-Medium',
    color: focused ? '#020202' : '#8D92A3',
  }),
  containerNewTaste: {paddingTop: 8, paddingHorizontal: 24},
  containerPopular: {paddingTop: 8, paddingHorizontal: 24},
  containerRecommended: {paddingTop: 8, paddingHorizontal: 24},
});

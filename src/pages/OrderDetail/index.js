import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import React from 'react';
import {FoodDummy1} from '../../assets';

const OrdedrDetail = () => {
  return (
    <ScrollView>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => {}}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          image={FoodDummy1}
          items={14}
          type="order-summary"
          name="Sop Bumil"
          price="200.000"
          item={14}
        />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue label="Sop Bumil" value="IDR 18.390.000" />
        <ItemValue label="Driver" value="IDR 50.000" />
        <ItemValue label="Tax 10%" value="IDR 1.800.390" />
        <ItemValue
          label="Total Price"
          value="IDR 390.803.000"
          valueColor="#1ABC9C"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Delivered to</Text>
        <ItemValue label="Name" value="Syafii" />
        <ItemValue label="phone" value="0822 0819 9688" />
        <ItemValue label="Address" value="Setra Duta Palima" />
        <ItemValue label="House No." value="A5 Hook" />
        <ItemValue label="City" value="Bandung" />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Order Status</Text>
        <ItemValue label="#FM209391" value="Paid" valueColor="#1ABC9C" />
      </View>

      <View style={styles.button}>
        <Button
          text="Cancel My Order"
          onPress={() => navigation.navigate('OrderSuccess')}
          color="#D9435E"
          textColor="white"
        />
      </View>
      <Gap height={24} />
    </ScrollView>
  );
};

export default OrdedrDetail;

const styles = StyleSheet.create({
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 12,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, paddingTop: 24},
});

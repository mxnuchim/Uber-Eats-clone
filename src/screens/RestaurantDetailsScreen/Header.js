import { Text, View, Image } from 'react-native'
import React from 'react';
import styles from './styles';

const RestaurantHeader = ({restaurant}) => {
  return (
    <View style={styles.page}>
        <Image source={{ uri: restaurant.image }} style={styles.image} />

        <View style={styles.container}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subTitle}>${restaurant.deliveryFee} • {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
            <Text style={styles.menuTitle}>Menu</Text>
      </View>
    </View>
  )
}

export default RestaurantHeader;
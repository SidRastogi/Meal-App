import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const defaultNavOptionConfig = {
  // initialRouteName: 'Categories',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
      marginVertical: Platform.OS === 'ios' ? 20 : 0,
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen',
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
    },
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  defaultNavOptionConfig
);

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
    },
    MealDetail: MealDetailScreen,
  },
  defaultNavOptionConfig
);

const tabConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarColor: Colors.primaryColor,
      tabBarIcon: (iconInfo) => {
        return (
          <Ionicons
            name={'ios-restaurant'}
            size={20}
            color={iconInfo.tintColor}
          />
        );
      },
    },
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarColor: Colors.accentColor,
      tabBarIcon: (iconInfo) => {
        return (
          <Ionicons name={'ios-star'} size={20} color={iconInfo.tintColor} />
        );
      },
    },
  },
};

const MealBottomTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabConfig, {
        activeTintColor: 'white',
        shifting: true,
      })
    : createBottomTabNavigator(tabConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

export default createAppContainer(MealBottomTabNavigator);

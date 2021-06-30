import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const FavoritesScreen = (props) => {
  const displayedMeals = MEALS.filter(
    (meal) => meal.id === 'm1' || meal.id === 'm2'
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = {
  headerTitle: 'Favorites',
};

export default FavoritesScreen;

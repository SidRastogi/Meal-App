import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
const FavoritesScreen = (props) => {
  const displayedMeals = MEALS.filter(
    (meal) => meal.id === 'm1' || meal.id === 'm2'
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

FavoritesScreen.navigationOptions = (navProps) => {
  return {
    headerTitle: 'Favorites',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title={'Drawer'}
          iconName={'ios-menu'}
          onPress={() => navProps.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

export default FavoritesScreen;

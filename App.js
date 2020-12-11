import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen.js';
import ResultsScreen from './src/screens/ResultsScreen.js';

const navigator = createStackNavigator(
    {
    Search: SearchScreen,
    Results: ResultsScreen
    },
  {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Home',
    headerMode: 'none',
    headerShown: false,
    cardStyle: { backgroundColor: '#9298D6' },
    }
  });

export default createAppContainer(navigator);

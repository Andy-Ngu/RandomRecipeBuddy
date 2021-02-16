import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen.js';
import ResultsScreen from './src/screens/ResultsScreen.js';
import AboutScreen from './src/screens/AboutScreen.js';
import ContactScreen from './src/screens/ContactScreen.js';

const navigator = createStackNavigator(
    {
    Search: SearchScreen,
    Results: ResultsScreen,
    About: AboutScreen,
    Contact: ContactScreen,
    },
  {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Home',
    headerMode: 'none',
    headerShown: false,
    cardStyle: { backgroundColor: '#FFF' },
    }
  });

export default createAppContainer(navigator);

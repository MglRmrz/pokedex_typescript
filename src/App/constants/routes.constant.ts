import {theme} from '../../assets/themes';
import {IRoute} from '../interfaces/routes.interface';

// Screens
import DetailsScreen from '../screens/Details';
import HomeScreen from '../screens/Home';

export const routes: IRoute[] = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      headerStyle: {
        backgroundColor: theme().primary,
      },
      headerTitleStyle: {
        color: theme().white,
      },
    },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: {
      headerStyle: {
        backgroundColor: theme().primary,
      },
      headerTitleStyle: {
        color: theme().white,
      },
    },
  },
];

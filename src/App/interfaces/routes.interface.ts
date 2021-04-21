import {StackNavigationOptions} from '@react-navigation/stack';
import {FC} from 'react';

export interface IRoute {
  name: string;
  component: FC<any>;
  options?: StackNavigationOptions;
}

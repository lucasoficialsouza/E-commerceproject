import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserConstextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStacks'

export default () => {
    return (
      <UserConstextProvider>
        < NavigationContainer >
          <MainStack />
          </NavigationContainer>
      </UserConstextProvider>
    );
}
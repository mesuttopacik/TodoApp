import {render} from '@testing-library/react-native';
import ToDoCard from './ToDoCard';
import React from 'react';

test('should match with snapshot', () => {
  const comp = render(<ToDoCard />);
  expect(comp).toMatchSnapshot();
});

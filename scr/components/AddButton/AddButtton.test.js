import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import Addbutton from './AddButton';

test('shoulg match with snapshot', () => {
  const comp = render(<Addbutton />);
  expect(comp).toMatchSnapshot();
});

test('should trigger onPress', () => {
  const mockFunction = jest.fn();
  const comp = render(<Addbutton onClick={mockFunction} />);

  const buttonToucable = comp.getByTestId('button-toucable');
  fireEvent(buttonToucable, 'press');

  expect(mockFunction).toBeCalled();
});

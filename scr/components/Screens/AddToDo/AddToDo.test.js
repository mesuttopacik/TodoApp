import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import AddToDo from './AddToDo';
import {Provider} from 'react-redux';
import {store} from '../../../redux/Provider';

describe('AddToDo tests', () => {
  let comp, input, submitButton, list;
  beforeEach(() => {
    comp = render(
      <Provider store={store}>
        <AddToDo />
      </Provider>,
    );
    input = comp.getByTestId('todo-input');
    submitButton = comp.getByTestId('button-toucable');
    list = comp.getByTestId('undone-task').props;
  });

  test('should match with snapshot', () => {
    expect(comp).toMatchSnapshot();
  });

  test('should add item to todolist if clicked AddButton', () => {
    fireEvent.changeText(input, 'do something');
    fireEvent.press(submitButton);
    list = comp.getByTestId('undone-task').props;
    expect(list.data.length).toBe(1);
  });

  test('should not add item to todolist if input is null AddButton', () => {
    fireEvent.press(submitButton);
    expect(list.data.length).toBe(0);
  });
});

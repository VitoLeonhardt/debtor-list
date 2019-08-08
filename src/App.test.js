import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'

import {render, fireEvent} from '@testing-library/react'

test('basic test', () => {
  const {queryByText, getByLabelText, getByText} = render(
    <App/>
  )

  // We want to see a known row.
  expect(queryByText("Cyberpunk")).toBeInTheDocument();

  // We click on a row and expect the modal to pop up - it has an OK button.
  fireEvent.click(getByText("Cyberpunk"));
  expect(queryByText("OK")).toBeInTheDocument();

  // We want to also see the input field that has a correct default value
  const input = getByLabelText("modal-input");
  expect(input.value).toBe("10,000.00"); // for some reason, this shallow rendering doesn't display the value correctly

  // We change the value to something invalid, and click on the button - but the modal is still there (didn't work)
  fireEvent.change(input, { target: { value: '100' } });
  fireEvent.click(getByText("OK"));
  expect(queryByText("OK")).toBeInTheDocument();

  // This time we change to a valid value, click the button and expect the modal to be gone!
  fireEvent.change(input, { target: { value: '10000' } });
  fireEvent.click(getByText("OK"));
  expect(queryByText("OK")).toBeNull();
})
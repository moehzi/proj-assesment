import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormInput from '..';
import { store } from '../../../store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Form Input Test', () => {
  it('Input name', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormInput />
        </BrowserRouter>
      </Provider>
    );
    userEvent.type(screen.getByLabelText('Name'), 'Mawar');

    await waitFor(() => {
      expect(screen.getByLabelText('Name')).toHaveValue('Mawar');
    });
  });

  it('Address input', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormInput />
        </BrowserRouter>
      </Provider>
    );
    userEvent.type(
      screen.getByLabelText('Address'),
      'Jl. Perum Pesona Prima No. 20'
    );

    await waitFor(() => {
      expect(screen.getByLabelText('Address')).toHaveValue(
        'Jl. Perum Pesona Prima No. 20'
      );
    });
  });

  it('Job Input', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormInput />
        </BrowserRouter>
      </Provider>
    );
    userEvent.type(screen.getByLabelText('Job'), 'Student');

    await waitFor(() => {
      expect(screen.getByLabelText('Job')).toHaveValue('Student');
    });
  });

  it('Datepicker change', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormInput />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.change(screen.getByLabelText('Date Of Birth'), {
      target: { value: '2023-03-24' },
    });

    await waitFor(() => {
      expect(screen.getByLabelText('Date Of Birth')).toHaveValue('2023-03-24');
    });
  });

  it('eKTP input', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormInput />
        </BrowserRouter>
      </Provider>
    );
    userEvent.type(screen.getByLabelText('eKTP'), '7318324523401242');

    await waitFor(() => {
      expect(screen.getByLabelText('eKTP')).toHaveValue(7318324523401242);
    });
  });

  it('family name input', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormInput />
        </BrowserRouter>
      </Provider>
    );
    userEvent.type(screen.getByTestId('family-name-0'), 'Lisa');

    await waitFor(() => {
      expect(screen.getByTestId('family-name-0')).toHaveValue('Lisa');
    });
  });

  it('family date picker change', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormInput />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.change(screen.getByTestId('family-dateOfBirth-0'), {
      target: { value: '2023-05-21' },
    });

    await waitFor(() => {
      expect(screen.getByTestId('family-dateOfBirth-0')).toHaveValue(
        '2023-05-21'
      );
    });
  });

  it('Phone number input', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormInput />
        </BrowserRouter>
      </Provider>
    );
    userEvent.type(screen.getByLabelText('Phone Number'), '081354599234');

    await waitFor(() => {
      expect(screen.getByLabelText('Phone Number')).toHaveValue(
        Number('081354599234')
      );
    });
  });

  it('relation ship status input', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FormInput />
        </BrowserRouter>
      </Provider>
    );
    fireEvent.change(screen.getByTestId('family-relationshipStatus-0'), {
      target: { value: 'brother' },
    });
    await waitFor(() => {
      expect(screen.getByTestId('option-0')).toBeTruthy();
    });
  });
});

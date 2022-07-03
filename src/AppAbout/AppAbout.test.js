import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AppAbout from './AppAbout';

describe('<AppAbout />', () => {
  test('it should mount', () => {
    render(<AppAbout />);
    
    const appAbout = screen.getByTestId('AppAbout');

    expect(appAbout).toBeInTheDocument();
  });
});
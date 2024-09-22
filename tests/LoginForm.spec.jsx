// src/components/LoginForm.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, beforeEach } from 'vitest';
import LoginForm from '../src/Login/LoginForm';

describe('LoginForm', () => {

  beforeEach(() => render(<LoginForm />));

  it('should display error message when submitting without a password', () => {
    
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'vitest@gmail.com' } });
    const submit = screen.getByTestId("submit");
    fireEvent.click(submit);
    
    expect(screen.getByText(/Email and password fields are required/)).toBeInTheDocument();
  });

  it('should display error message when submitting without an email', () => {
    
    fireEvent.change(screen.getByLabelText(/Password/), { target: { value: 'vitest12345' } });
    const submit = screen.getByTestId("submit");
    fireEvent.click(submit);
    
    expect(screen.getByText(/Email and password fields are required/)).toBeInTheDocument();
  });

  it('should display success message when both fields are filled', () => {
   
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/Password/), { target: { value: 'password123' } });
    const submit = screen.getByTestId("submit");
    fireEvent.click(submit);
    
    expect(screen.getByText(/Successfully logged in/)).toBeInTheDocument();
  });
});

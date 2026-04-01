import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Counter from './Counter';

describe('Counter tests', () => {
  
  // Test to verify that the counter component initializes with a count of 0
  it('must start at 0', () => {
    render(<Counter />);
    
    // Get the element displaying the initial count value
    const initialCount = screen.getByText('0');
    
    // Assert that the initial count element is rendered on the page
    expect(initialCount).toBeDefined();
  });

  // Test to verify that clicking the increment button increases the counter value by 1
  it('must increase the count when the increment button is clicked', () => {
    render(<Counter />);
    
    // Find the increment button in the DOM
    const incrementButton = screen.getByText('increase +');
    
    // Simulate a click event on the increment button
    fireEvent.click(incrementButton);
    
    // Get the updated count element after the click
    const newCount = screen.getByText('1');
    
    // Assert that the count has been updated to 1
    expect(newCount).toBeDefined();
  });

});
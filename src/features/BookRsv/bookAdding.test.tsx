import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import AddBook from './BookAdding/AddBook';

it('should contain the Add Book button', () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <AddBook />
    </BrowserRouter>,
  );
  const addBookBtn = getByTestId('addBook-button');

  expect(addBookBtn).toBeInTheDocument();
});

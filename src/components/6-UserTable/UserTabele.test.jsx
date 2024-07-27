import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserTable from './UserTable';
import fetchMock from 'jest-fetch-mock';


fetchMock.enableMocks();

describe('UserTable', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('fetches and renders a table of users', async () => {
 
    const users = [
      { id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', phone: '1-770-736-8031 x56442' },
      { id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', phone: '010-692-6593 x09125' },
      { id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', phone: '1-463-123-4447' },
    ];

    fetch.mockResponseOnce(JSON.stringify(users))


    render(<UserTable />)

    await waitFor(() => {
      const userRows = screen.getAllByTestId('user-row')
      expect(userRows).toHaveLength(users.length); 
  
      users.forEach((user, index) => {
        expect(userRows[index]).toHaveTextContent(user.id)
        expect(userRows[index]).toHaveTextContent(user.name)
        expect(userRows[index]).toHaveTextContent(user.email)
        expect(userRows[index]).toHaveTextContent(user.phone)
      });
    });
  });
});
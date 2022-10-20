import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAppDispatch } from '@/common/redux';

import { IncrementButton } from '../components/IncrementButton';
import { fetchUsers, selectHome } from '../redux/home.slice';

export const HomeContainer = () => {
  const { counter, users, loading } = useSelector(selectHome);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>{counter}</h2>
      <IncrementButton />
      {!loading ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

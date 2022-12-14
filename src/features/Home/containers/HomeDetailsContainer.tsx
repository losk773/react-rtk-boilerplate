import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { useAppDispatch } from '@/common/redux';

import { fetchUserById, selectIsLoading, selectUserById } from '../redux/home.slice';

export const HomeDetailsContainer = () => {
  const { id = '' } = useParams();
  const isLoading = useSelector(selectIsLoading);
  const userDetails = useSelector(selectUserById(Number(id)));

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userDetails) {
      dispatch(fetchUserById(id));
    }
  }, [id, dispatch, userDetails]);

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (!userDetails) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <h2>
        {userDetails.name} | {userDetails.username}
      </h2>
      <p>{userDetails.email}</p>
      <p>{userDetails.phone}</p>
    </div>
  );
};

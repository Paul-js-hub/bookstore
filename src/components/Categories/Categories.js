import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const checkCategoriesStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <h3>This is the categories page</h3>
      <button type="button" onClick={checkCategoriesStatus}>Check status</button>
    </div>
  );
};

export default Categories;

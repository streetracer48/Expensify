import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducer/expense';
import filtersReducer from '../reducer/filter';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  return store;
};

import React from 'react';
import SimpleListState from './SimpleListState';

export default React.createContext<SimpleListState>({
  categories: [],
  total: 0
});

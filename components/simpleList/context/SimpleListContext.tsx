import React from 'react';
import SimpleListState, { LineItem } from './SimpleListState';

export default React.createContext<SimpleListState>({
  categories: [],
  total: 0,
  addLineItem: (newLineItem: LineItem) => {
    throw Error('[addLineItem] Function not implemented');
  },
  removeLineItem: (lineItemId: string) => {
    throw Error('[removeLineItem] Function not implemented');
  }
});

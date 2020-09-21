import React, { useEffect, useState } from 'react';
import {
  getCategories,
  createLineItem,
  deleteLineItem
} from '../../../services/apiService';
import SimpleListContext from './SimpleListContext';
import { BaseItem, Category, LineItem } from './SimpleListState';

const getTotalPrice = (items: BaseItem[]) =>
  items.map(({ price }) => price).reduce((total, current) => total + current);

export const SimpleListProvider: React.FC = ({ children }) => {
  // TODO: replace useState with useReduce
  const [categories, setCategories] = useState<Category[]>([]);
  const [total, setTotal] = useState<number>(0);

  const fetchData = () => {
    getCategories().then((response) => {
      if (response && response.data) {
        const categories = response.data.map((category: Category) => {
          return { ...category, price: getTotalPrice(category.lineItems) };
        });
        setCategories(categories);
        setTotal(getTotalPrice(categories));
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addLineItem = (newLineItem: LineItem) => {
    createLineItem(newLineItem).then((response) => {
      if (response && response.data) {
        fetchData();
      }
    });
  };

  const removeLineItem = (lineItemId: string) => {
    deleteLineItem(lineItemId).then((response) => {
      if (response && response.data) {
        fetchData();
      }
    });
  };

  return (
    <SimpleListContext.Provider
      value={{ categories, total, addLineItem, removeLineItem }}
    >
      {children}
    </SimpleListContext.Provider>
  );
};

export default SimpleListProvider;

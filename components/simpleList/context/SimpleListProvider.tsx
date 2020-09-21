import React, { useEffect, useState } from 'react';
import { getCategories } from '../../../services/apiService';
import SimpleListContext from './SimpleListContext';
import { BaseItem, Category } from './SimpleListState';

const getTotalPrice = (items: BaseItem[]) =>
  items.map(({ price }) => price).reduce((total, current) => total + current);

export const SimpleListProvider: React.FC = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    getCategories().then((response) => {
      if (response && response.data) {
        const categories = response.data.map((category: Category) => {
          return { ...category, price: getTotalPrice(category.lineItems) };
        });
        setCategories(categories);
        setTotal(getTotalPrice(categories));
      }
    });
  }, []);
  return (
    <SimpleListContext.Provider value={{ categories, total }}>
      {children}
    </SimpleListContext.Provider>
  );
};

export default SimpleListProvider;

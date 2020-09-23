import React, { useEffect, useState } from 'react';
import {
  getCategories,
  createLineItem,
  deleteLineItem
} from '../../../services/apiService';
import SimpleListContext from './SimpleListContext';
import { BaseItem, Category, LineItem } from './SimpleListState';

const getTotalPrice = (items: BaseItem[]) => {
  return items.length === 0
    ? 0
    : items.map(({ price }) => price).reduce((total, current) => total + current);
}


const compareString = (a: string, b: string) => {
  const text1 = a.toLocaleLowerCase();
  const text2 = b.toLocaleLowerCase();
  return a > b ? 1 : -1;
};

export const SimpleListProvider: React.FC = ({ children }) => {
  // TODO: replace useState with useReduce
  const [categories, setCategories] = useState<Category[]>([]);
  const [total, setTotal] = useState<number>(0);

  const fetchData = () => {
    getCategories().then((response) => {
      if (response && response.data) {
        const categories = response.data
          .map((category: Category) => {
            return {
              ...category,
              lineItems: category.lineItems.sort((a, b) =>
                compareString(a.name, b.name)
              ),
              price: getTotalPrice(category.lineItems)
            };
          })
          .sort((a, b) => compareString(a.name, b.name));
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

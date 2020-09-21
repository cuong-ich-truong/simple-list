import React, { useContext } from 'react';
import SimpleListContext from './simpleList/context/SimpleListContext';
import LineItem from './simpleList/LineItem';
import StHeader from './simpleList/StHeader';
import StFooter from './simpleList/StFooter';
import StItem from './simpleList/StItem';
import LineItemForm from './simpleList/LineItemForm';

const SimpleList: React.FC = () => {
  const { categories, total } = useContext(SimpleListContext);

  return (
    <>
      {categories.map(({ id: categoryId, name, price, lineItems }) => (
        <div key={categoryId}>
          <StHeader>
            <LineItem name={name} price={price} />
          </StHeader>
          <StItem>
            {lineItems.map(({ id: subItemId, name, price }) => (
              <LineItem key={subItemId} name={name} price={price} />
            ))}
          </StItem>
        </div>
      ))}
      <StFooter>
        <LineItem name="TOTAL" price={total} />
      </StFooter>
      <LineItemForm />
    </>
  );
};

export default SimpleList;

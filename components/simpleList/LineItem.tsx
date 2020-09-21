import React, { useContext } from 'react';
import LineItemProps from './lineItem/LineItemProps';
import StLine from './lineItem/StLine';
import StTitle from './lineItem/StTitle';
import StPrice from './lineItem/StPrice';
import StDeleteIcon from './lineItem/StDeleteIcon';
import SimpleListContext from '../simpleList/context/SimpleListContext';

const formatMoney = (price: number, locale?: string) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(price);
};

const LineItem: React.FC<LineItemProps> = ({
  id,
  name,
  price,
  canDelete = false
}) => {
  const { removeLineItem } = useContext(SimpleListContext);

  return (
    <StLine>
      <StTitle>{name}</StTitle>
      <StPrice>
        <div>{formatMoney(price, 'en-US')}</div>
        {canDelete && <StDeleteIcon onClick={() => removeLineItem(id)} />}
      </StPrice>
    </StLine>
  );
};

export default LineItem;

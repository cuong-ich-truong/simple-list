import LineItemProps from './lineItem/LineItemProps';
import StLine from './lineItem/StLine';
import StTitle from './lineItem/StTitle';
import StPrice from './lineItem/StPrice';

const formatMoney = (price: number, locale?: string) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD',
  });

  return formatter.format(price);
};

const LineItem: React.FC<LineItemProps> = ({ name, price }) => {
  return (
    <StLine>
      <StTitle>{name}</StTitle>
      <StPrice>{formatMoney(price, 'en-US')}</StPrice>
    </StLine>
  );
};

export default LineItem;

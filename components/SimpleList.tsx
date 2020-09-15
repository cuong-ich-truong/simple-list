import LineItem from './simpleList/LineItem';
import StHeader from './simpleList/StHeader';
import StFooter from './simpleList/StFooter';
import StItem from './simpleList/StItem';

interface Category {
  id: string;
  name: string;
}

interface SubItem extends Category {
  price: number;
  categoryId: string;
}

const filterByCategoryId = (item: SubItem, categoryId: string) =>
  item.categoryId === categoryId;
const getTotalPrice = (items: SubItem[]) =>
  items.map(({ price }) => price).reduce((total, current) => total + current);

const SimpleList: React.FC = () => {
  const items: SubItem[] = [
    { id: 'itm_1', name: 'TV', price: 2000, categoryId: 'ctg_1' },
    { id: 'itm_2', name: 'Play Station', price: 400, categoryId: 'ctg_1' },
    { id: 'itm_3', name: 'Stereo', price: 1600, categoryId: 'ctg_1' },
    { id: 'itm_4', name: 'Shirts', price: 1100, categoryId: 'ctg_2' },
    { id: 'itm_5', name: 'Jeans', price: 1100, categoryId: 'ctg_2' },
    { id: 'itm_6', name: 'Pots and Pans', price: 3000, categoryId: 'ctg_3' },
    { id: 'itm_7', name: 'Flatware', price: 500, categoryId: 'ctg_3' },
    { id: 'itm_8', name: 'Knife Set', price: 500, categoryId: 'ctg_3' },
    { id: 'itm_9', name: 'Misc', price: 1000, categoryId: 'ctg_3' },
  ];

  const categories: Category[] = [
    { id: 'ctg_1', name: 'Electronics' },
    { id: 'ctg_2', name: 'Clothing' },
    { id: 'ctg_3', name: 'Kitchen' },
  ];
  return (
    <>
      {categories.map(({ id: categoryId, name }) => (
        <div key={categoryId}>
          <StHeader>
            <LineItem
              name={name}
              price={getTotalPrice(
                items.filter((item) => filterByCategoryId(item, categoryId))
              )}
            />
          </StHeader>
          <StItem>
            {items
              .filter((item) => filterByCategoryId(item, categoryId))
              .map(({ id: subItemId, name, price }) => (
                <LineItem key={subItemId} name={name} price={price} />
              ))}
          </StItem>
        </div>
      ))}
      <StFooter>
        <LineItem name="TOTAL" price={getTotalPrice(items)} />
      </StFooter>
    </>
  );
};

export default SimpleList;

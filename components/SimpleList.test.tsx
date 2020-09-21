import { render } from '@testing-library/react';
import Chance from 'chance';
import SimpleList from './SimpleList';
import SimpleListContext from './simpleList/context/SimpleListContext';
import SimpleListState, {
  Category
} from './simpleList/context/SimpleListState';

const MockProvider: React.FC<Partial<SimpleListState>> = ({
  categories = [],
  total = 0,
  addLineItem = jest.fn(),
  removeLineItem = jest.fn(),
  children
}) => {
  return (
    <SimpleListContext.Provider
      value={{ categories, total, addLineItem, removeLineItem }}
    >
      {children}
    </SimpleListContext.Provider>
  );
};

describe('Home', () => {
  let container: HTMLElement;
  let asFragment: () => DocumentFragment;
  let mockCategories: Category[];
  const chance = new Chance();

  beforeEach(() => {
    mockCategories = [
      { id: chance.guid(), name: chance.string(), price: 0, lineItems: [] },
      { id: chance.guid(), name: chance.string(), price: 0, lineItems: [] },
      { id: chance.guid(), name: chance.string(), price: 0, lineItems: [] }
    ];

    ({ container, asFragment } = render(
      <MockProvider categories={mockCategories}>
        <SimpleList />
      </MockProvider>
    ));
  });

  it('should render without crashing', () => {
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render category names', () => {
    expect(container).toHaveTextContent(mockCategories[0].name);
    expect(container).toHaveTextContent(mockCategories[1].name);
    expect(container).toHaveTextContent(mockCategories[2].name);
  });
});

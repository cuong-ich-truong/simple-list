import { render } from '@testing-library/react';
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

  beforeEach(() => {
    mockCategories = [
      {
        id: '6c8f51aa-9361-48b7-8600-aaa1cf60dd8e',
        name: '81df986b-a2ce-4b70-b4b2-12e3a41bf13a',
        price: 0,
        lineItems: []
      },
      {
        id: 'e350f15e-343c-45d6-a314-ee5984f3482b',
        name: '1754cdd9-7a6f-4f48-9816-4ee29949caa5',
        price: 0,
        lineItems: []
      }
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
  });
});

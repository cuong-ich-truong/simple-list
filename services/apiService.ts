import { LineItem } from '../components/simpleList/context/SimpleListState';

const getCategories = () => {
  const options = {
    method: 'GET'
  };

  return fetch(`${process.env.BASE_URL}/api/categories`, options)
    .then((r) => r.json())
    .catch((error) => {
      // TODO: handle error
    });
};

const createLineItem = (newLineItem: LineItem) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newLineItem)
  };
  return fetch(`${process.env.BASE_URL}/api/lineitems`, options)
    .then((r) => r.json())
    .catch((error) => {
      // TODO: handle error
    });
};

const deleteLineItem = (lineItemId: string) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${process.env.BASE_URL}/api/lineitems/${lineItemId}`, options)
    .then((r) => r.json())
    .catch((error) => {
      // TODO: handle error
    });
};

export { getCategories, createLineItem, deleteLineItem };

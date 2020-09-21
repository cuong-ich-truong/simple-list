import fetch from 'isomorphic-fetch';
import { LineItem } from '../components/simpleList/context/SimpleListState';

// const checkStatus = (response) => {
//   if (response.ok) {
//     return response;
//   } else {
//     var error = new Error(response.statusText);
//     error.message = response.toString();
//     return Promise.reject(error);
//   }
// };

const getCategories = () => {
  const options = {
    method: 'GET'
  };

  return (
    fetch(`${process.env.BASE_URL}/api/categories`, options)
      // .then(checkStatus)
      .then((r) => r.json())
      .catch((error) => {
        // TODO: handle error
      })
  );
};

const createLineItem = (newLineItem: LineItem) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newLineItem)
  };

  return (
    fetch(`${process.env.BASE_URL}/api/lineitems`, options)
      // .then(checkStatus)
      .then((r) => r.json())
      .catch((error) => {
        // TODO: handle error
      })
  );
};

export { getCategories, createLineItem };

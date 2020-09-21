import fetch from 'isomorphic-fetch';

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
export { getCategories };

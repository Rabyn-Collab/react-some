



// const data = [{
//   'id': 1
// }];

// const d = `${data}`;


export const crudLocal = (userInfo) => {
  localStorage.setItem('users', JSON.stringify(userInfo))
}


export const getData = () => {
  const data = localStorage.getItem('users');
  return data === null ? [] : JSON.parse(data);
}
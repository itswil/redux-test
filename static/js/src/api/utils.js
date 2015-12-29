export function getAllItems() {
  let url = '//localhost:3333/items';

  return fetch(url).then(response => {
     return response.json();
  });
}

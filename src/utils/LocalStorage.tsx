interface ILocalStorage {
  key: string;
  information: string | object | number | boolean | null;
}

export function saveLocalStorage({ key, information }: ILocalStorage) {
  localStorage.setItem(key, JSON.stringify(information));
}

export function readLocalStorage({ key }: ILocalStorage) {
  const item = localStorage.getItem(key);

  if (item !== null) {
    return JSON.parse(item);
  }
}

export function deleteFromLocalStorage({ key }: ILocalStorage) {
  localStorage.removeItem(key);
}

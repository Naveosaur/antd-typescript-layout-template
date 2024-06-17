export function getLocalStorage(key: string) {
  const _data = JSON.parse(localStorage.getItem(key) ?? "{}");

  return _data;
}

export function setLocaltorage(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}

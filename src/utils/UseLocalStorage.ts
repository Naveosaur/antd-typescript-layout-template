export function getLocalStorage(key) {
  const _data = JSON.parse(localStorage.getItem(key) || "{}");

  return _data;
}

export function setLocaltorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}


"use client";

import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// This is a custom implementation of the redux-persist storage interface.
// It is used to persist the redux store to the local storage of the browser.
// If the window object is not available (e.g. during server-side rendering),
// it will use a noop storage instead.

const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export default storage;

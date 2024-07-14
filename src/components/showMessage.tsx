import { message } from "antd";

export const showSuccessMessage = (content: string, duration = 5000) => {
  message.success(content);
  setTimeout(() => {
    message.destroy();
  }, duration);
};

export const showErrorMessage = (content: string, duration = 5000) => {
  message.error(content);
  setTimeout(() => {
    message.destroy();
  }, duration);
};

export const showLoadingMessage = (content: string, duration = 5000) => {
  message.loading(content);
  setTimeout(() => {
    message.destroy();
  }, duration);
};

import { notification } from "antd";

export const showSuccessNotification = (content: string, duration = 5000) => {
  notification.success({
    message: "Success",
    description: content,
    showProgress: true,
    placement: "topRight",
    duration: duration / 1000, // Ant Design's notification duration is in seconds
  });
};

export const showErrorNotification = (content: string, duration = 5000) => {
  notification.error({
    message: "Error",
    description: content,
    showProgress: true,
    placement: "topRight",
    duration: duration / 1000,
  });
};

export const showWarningNotification = (content: string, duration = 5000) => {
  notification.warning({
    message: "Warning",
    description: content,
    showProgress: true,
    placement: "topRight",
    duration: duration / 1000,
  });
};

export const showInfoNotification = (content: string, duration = 5000) => {
  notification.info({
    message: "Info",
    description: content,
    showProgress: true,
    placement: "topRight",
    duration: duration / 1000,
  });
};

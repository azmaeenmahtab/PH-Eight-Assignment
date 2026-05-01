"use client";

import { ToastContainer } from "react-toastify";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="light"
    />
  );
};

export default ToastProvider;

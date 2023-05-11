import { Provider } from "react-redux";
import store from "./utils/store";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#2E3840",
          colorBorder: "#2E3840",
        },
      }}
    >
      <App />
    </ConfigProvider>
    </Provider>
);


reportWebVitals();

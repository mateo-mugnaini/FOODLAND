import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
//import {store} from './redux/store'

/* NUEVO STORE*/
import { store2 } from "./redux/store2";

import { BrowserRouter } from "react-router-dom";
const domainAuth =
  process.env.REACT_APP_DOMAIN ?? "dev-7azhwajhv4hw38nz.us.auth0.com";
const clientIdAuth =
  process.env.REACT_APP_CLIENT_ID ?? "e3gB8LMAjd1Klyt5asWWQTY5xPBSu07g";
console.log(domainAuth, clientIdAuth);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store2}>
    <Auth0Provider
      domain={domainAuth}
      clientId={clientIdAuth}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);

reportWebVitals();

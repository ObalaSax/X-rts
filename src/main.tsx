import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { XApi } from "./Features/Redux/Api/XApi.ts";
import { Provider } from "react-redux";
import { Xstore } from "./Features/Redux/XMainStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApiProvider api={XApi}>
      <Provider store={Xstore}>
        <App />
      </Provider>
    </ApiProvider>
  </StrictMode>,
);

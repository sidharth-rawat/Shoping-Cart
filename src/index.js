import React , { Suspense }from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store  from "./store/Store";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import  {QueryClient, QueryClientProvider} from 'react-query'
import "./index.css";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Header } from "./components/navbar";
import  { Loading } from "./components/loading"
import {ReactQueryDevtools } from 'react-query/devtools'
import {Cart} from "./views";
import { Home } from "./views";
const container = document.getElementById("root");
const root = createRoot(container);
const query = new QueryClient()
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={query}>
      <BrowserRouter>
          <Header/>
          <Suspense  fallback={<Loading/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h2 className="text-center p-20 uppercase"> Not Found </h2>} />
          {/* <Route path="/cart" element= {<Cart/>} */}
        </Routes>
        </Suspense>
      </BrowserRouter>
      {/* <ReactQueryDevtools/> */}
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

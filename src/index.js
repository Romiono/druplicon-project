import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import {createBrowserRouter, RouterProvider, createRoutesFromElements, Route} from "react-router-dom";
import ServicesScrin from "./сomponents/Services/ServiceScreen/ServicesScrin";


const container = document.getElementById('root');
const root = createRoot(container);
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <App/>
//     },
// ]);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
        path={'/'}
        element={<App/>}
        >
        </Route>
    )
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);



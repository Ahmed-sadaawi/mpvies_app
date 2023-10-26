// بسم الله الرحمن الرحيم

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieDetails from "./components/MovieDetails";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MovieCard from "./components/MovieCard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

    },
    {
        path: "/movie/:id",
        element: <MovieDetails />

    }

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>

  </React.StrictMode>
);


// الحمد لله رب العالمين
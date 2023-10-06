import {} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Error from './routes/Error.jsx';
import Home from './routes/Home.jsx';
import Produtos from './routes/Produtos.jsx';
import Inserir from './routes/Inserir.jsx';
import Editar from './routes/Editar.jsx';
import Excluir from './routes/Excluir.jsx';
import Conteudo from './routes/Conteudo.jsx';
import Login from './routes/Login.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login/> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/conteudo', element: <Conteudo /> },
      { path: '/cadastrar/produto', element: <Inserir /> },
      /*criando a rota editar produtos e passando o id do produto */
      { path: '/editar/produtos/:id', element: <Editar /> },
        /*criando a rota excluir produtos e passando o id do produto */
      { path: '/excluir/produtos/:id', element: <Excluir /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);

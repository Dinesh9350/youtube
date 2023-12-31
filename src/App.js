import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Body />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
      },
      {
        path: '/watch',
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;

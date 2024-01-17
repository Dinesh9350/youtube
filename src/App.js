import './App.css';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './store';

import Body from './components/Body';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>
  );
}

export default App;

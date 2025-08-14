import './App.css';
import CakeContainer from './Components/CakeContainer';
import HooksCake from './Components/HooksCake';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import IceCreamContainer from './Components/IceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import NewItemContainer from './Components/NewItemContainer';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewItemContainer cake/>
        <NewItemContainer />
        <CakeContainer />
        <HooksCake />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;

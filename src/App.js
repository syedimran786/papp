import './App.css';
import CakeShop from './my redux/cake shop/CakeShop';
import IcecreamShop from './my redux/icecream shop/IcecreamShop';

function App() {
  return (
    <div className="App">
    {/* <ReduxCounter/> */}
    <IcecreamShop/>
    <hr/>
    <CakeShop/>
    </div>
  );
}

export default App;

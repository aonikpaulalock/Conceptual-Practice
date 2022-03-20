import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import Menubar from './Component/Menubar/Menubar';
import Products from './Component/Products/Products';

function App() {
  const [count,setCount] = useState(0);
  const cartCount = () => {setCount(count + 1)}
  return (
    <div className="App">
    <Menubar count={count}></Menubar>
    <Products cartCount={cartCount}></Products>
    </div>
  );
}

export default App;

import './App.css';
import UseStateHook from './Components/UseStateHook/UseStateHook';
import UseStateHookArray from './Components/UseStateHook/UseStateHookArray';
import UseStateHookObject from './Components/UseStateHook/UseStateHookObject';

function App() {
  return (
    <div className="App">
     <UseStateHook/>
     <UseStateHookObject/>
     <UseStateHookArray/>
    </div>
  );
}

export default App;

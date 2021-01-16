import  HookCounter  from './components/HookCounter'
import  HookCounterFive  from './components/HookCounterFive'

function App() {
  return (
    <div className="App" style={{'text-align' : 'center'}}>
      <h1>useState Hook Demo</h1>
      <h2>useState with a number</h2> 
      <HookCounter />
      <HookCounterFive />
      <h2>useState with an Array</h2>
      
    </div>
  );
}

export default App;

import {useDispatch, useSelector} from "react-redux"

function App() {
  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch()

  const increment =() => {
    dispatch({type:"INC"})
  }
  const decrement =() => {
    dispatch({type:"DEC"})
  }  
  const addby =() => {
    dispatch({type:"ADD",payload:10})
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Min</button>
      <button onClick={addby}>Add</button>
    </div>
  );
}

export default App;

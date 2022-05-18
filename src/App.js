import {useDispatch, useSelector} from "react-redux"
import {actions} from "./store/index"

function App() {
  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch()

  const increment =() => {
    dispatch(actions.increment())
  }
  const decrement =() => {
    dispatch(actions.decrement())
  }  
  const addby =() => {
    dispatch(actions.addBy(10))
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

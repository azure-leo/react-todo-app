import './App.css'
import TodoContainer from "./components/TodoContainer.tsx";

function App() {
    // const {count} = useAppSelector(state => state.todoReducer)
    // const {increment} = todosSlice.actions
    // const dispatch = useAppDispatch();
    // console.log(increment(5))
    //
    // fetchUsers()
    //

    return (

      <div className="App">
            <TodoContainer />
      </div>
    )
}

export default App

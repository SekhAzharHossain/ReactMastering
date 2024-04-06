import { Provider } from "react-redux";
import { store } from "./app/store";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <Provider store={store}>
      <h1>Learn about tool kit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  );
}

export default App;

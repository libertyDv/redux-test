import './App.css'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "./state/userSlice";
import { Header } from "./components/Header";
import { Email } from "./components/Email";


/*
// store
interface CounterState { // interfaz para englobar al contador
  value:number;
}

interface UserState { // interfaz para englobar al user
  isSignedIn: boolean
}

// actions 

const increment = {type: "INCREMENT"} // esto es como se ve una acción
const incrementByAmount = {type: "INCREMENT", payload: 1}

// reducers - toman el estado, hacen una copia y los cambios se hacen en esa copia. nunca se hace en el original



*/
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
      <div className='App'>
        <Header />
        <Email/>

      </div>
    </>
  )
}

export default App

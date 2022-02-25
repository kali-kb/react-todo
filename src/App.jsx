import { useState, useEffect, createContext, useContext } from 'react'
import logo from './logo.svg'
import './App.css'

// function FormComponent(props){
//   return (
//     <div>
//       <form>
//         <input value={props.value}></input>
//         <button></button>
//       </form>
//     </div>
//   )
// }

function App() {
  // const car = useContext(CarContext)

  const [todos, setTodo] = useState([])
  let keys = []
  const [todostr, setTodoStr] = useState('')

  const handler = () => {
    if (todostr.length > 0){
      setTodo(prev => [...todos, todostr])
    }
    else{
      void(0)
    }
  }

  const changeEvent = (e) => {
    let value = e.target.value
    setTodoStr(value)
  }
  console.log(keys)
  const todoArray = todos.map(todo => {
    return (
      <div className="flex items-center space-y-2 space-x-2 translate-x-2">
        <input className="accent-indigo-500 w-5 h-5" type="checkbox" />
        <p className="inline align-middle font-semibold text-xl pb-4">{todo}</p>
      </div>
    )
  })
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4">
      {/* <FormComponent value={todostr} /> */}
      <div className="">
        <input className="border-2 px-2 border-indigo-500 py-1" onChange={changeEvent} name="item" type="text"></input>
        <button className="text-white bg-indigo-500 px-4 py-[6px]" onClick={handler}>Add</button>
      </div>
      
      {/* add checkbox and other stuff */}
      <span className="flex flex-col -translate-x-20">{todoArray}</span>
    </div>
     
  )
}




export default App

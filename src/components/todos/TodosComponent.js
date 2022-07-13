import {useEffect, useState} from "react";
import {getTodos} from "../../servises/services";
import TodoComponent from "./TodoComponent";

export default function TodosComponent(){

    const [todos, setTodos] = useState([])

    useEffect(()=> {
        getTodos().then(value => setTodos([...value]))
    })

    return(
        <div>
            {
                todos.map(value => <TodoComponent item={value} key={value.id}/>)
            }
            
        </div>
    )
}
import { useEffect, useState } from "react";
import Task from "../../Models/Task";

function TodoForm(){
    const [text, setText] = useState('')
    const [items, setItems] = useState([]);

    function pegaInput(event){
        let inputText = event.target.value;
        setText(inputText);

    }

    function adicionaItem(event){
        event.preventDefault();
        let task = new Task(text);
        setItems([...items, task])
    }
    return(
        <div>
            <input onChange={pegaInput} type="text"></input>
            <button onClick={adicionaItem}>Adicionar Tarefa</button>
            <ul>
                {items.map(task => 
                        <li key={task.id}>{task.text}</li>
                    )}
            </ul>
        </div>
    );
}

export default TodoForm;
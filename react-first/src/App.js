import {useState} from "react";

function App(){
    // 절대 state를 직접적으로 수정하지 않는다. set 함수를 이용해야한다. ex) toDo = "" (x)
    const [toDo, setToDo] = useState("");
    const [toDoList, setToDoList] = useState([]); // to do list는 array로 저장
    const handleChange = (event) => setToDo(event.target.value);
    const handleSubmit = (event) => {
        event.preventDefault(); // 자동 새로고침 방지
        if(toDo === "") return;
        // ...을 사용하여 array 안의 내용만 가져올 수 있다.
        // ex) currentArray = [1, 2, 3]  ->  ...currentArray = 1, 2, 3
        setToDoList((currentArray) => [toDo, ...currentArray]);
        setToDo("");
    };

    return(
        <div>
            <h1>My To Do List({toDoList.length})</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    value={toDo} type="text"
                    placeholder="Write your to do ..."
                />
                <button>Add To Do</button>
            </form>
            <hr/>
            <ul>
                {toDoList.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default App;
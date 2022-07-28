
import {useEffect, useState} from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const handleClick = () => {
        setCounter((current) => current+1)
    };
    const handleChange = (event) => {
        setKeyword(event.target.value);
    }

    // useEffect를 이용하여 해당 코드를 딱 한 번만 실행할 수 있다.
    useEffect(() => {
        console.log("CALL THE API AREA . . . // I run only once")
    }, [])

    // useEffect의 dependencies 인자를 이용하여 특정 state가 변화할 때만 해당 코드를 실행하도록 설정할 수 있다.
    useEffect(() => {
        console.log("SEARCH FOR . . . // I run when 'keyword' changes");
    }, [keyword])
    useEffect(() => {
        console.log("Click button . . . // I run when 'counter' changes");
    }, [counter])
    useEffect(() => {
        console.log("I run when 'keyword'&'counter' changes");
    },[keyword, counter])


    return (
        <div>
            <input
                value={keyword}
                onChange={handleChange}
                type="text"
                placeholder="Search here🔎"
            />
            <h1>Count: {counter}</h1>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default App;

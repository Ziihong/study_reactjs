
import {useEffect, useState} from "react";

function Greeting(){
    // clean up function: 해당 컴포넌트가 사라질때 뭔가 실행되도록 할 수 있다.

    // 첫번째 방법
    useEffect(() => {
        console.log("created");
        return () => console.log("destroyed");
    }, [])

    // 두번째 방법
    function destroyFn(){
        console.log("destroyed")
    }
    function createFn(){
        console.log("created");
        return destroyFn;
    } // 컴포넌트가 사라질 때 실행될 함수를 return 해주어야 한다!
    useEffect(createFn, [])

    return (
        <h1>Hello</h1>
    );
}


function App() {
    const [showing, setShowing] = useState(false);
    const handleClick = () => setShowing((prev) => !prev)

    return (
        <div>
            {showing ? <Greeting/> : null}
            <button onClick={handleClick}>{showing ? "Hide" : "Show"}</button>
        </div>
    );
}

export default App;

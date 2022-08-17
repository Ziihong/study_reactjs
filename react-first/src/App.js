import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
// react-router-dom 버전6 이후 변경 사항
// <Switch></Switch> => <Routes></Routes> 로 변경
// 렌더링할 컴포넌트 -> Route 컴포넌트 사이에 위치x, Route 컴포넌트의 element prop으로 설정하도록  ex) <Route path="/" element={<Home/>}></Route>

// :/id -> react Router에 이 url이 변수를 받을 것이라고 설정
// Detail.js 에서 useParams() 함수를 사용하여 react Router의 변수 값을 넘겨 받을 수 있다
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/movie/:id">
                    <Detail />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link // -> Link 컴포넌트는 브라우저 새로고침 없어도 유저를 다른 페이지로 이동시켜주는 컴포넌트이다.
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
// react-router-dom 버전6 이후 변경 사항
// <Switch></Switch> => <Routes></Routes> 로 변경
// 렌더링할 컴포넌트 -> Route 컴포넌트 사이에 위치x, Route 컴포넌트의 element prop으로 설정하도록  ex) <Route path="/" element={<Home/>}></Route>

function App() {
    // Switch -> Route(url)를 찾고, 해당 컴포넌트를 렌더링함
    return (
        <Router>
            <Switch>
                <Route path="/movie">
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
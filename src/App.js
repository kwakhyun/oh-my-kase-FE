import "./App.css";
import Main from "./pages/Main";
import {Route, Routes} from 'react-router-dom'
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
import Join from "./pages/Join";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/mypage" element={<MyPage/>}/>
        <Route path="/join" element={<Join/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;

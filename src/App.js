import "./App.css";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
import Join from "./pages/Join";
import Login from "./pages/Login";
import { useMediaQuery } from "react-responsive";
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
function App() {
  return (
    <div className="App">
      <div>
        <Desktop>Desktop or laptop</Desktop>
        <Mobile>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/:district" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Mobile>
      </div>
    </div>
  );
}

export default App;

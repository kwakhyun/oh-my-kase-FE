import "./App.css";
import Main from "./pages/Main";
import { Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
import Join from "./pages/Join";
import Login from "./pages/Login";
import { useMediaQuery } from "react-responsive";
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
function App() {
  return (
    <div className="App">
      <div>
        <Desktop>Desktop or laptop</Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile><Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
      </Routes></Mobile>
      </div>
    </div>
  );
}

export default App;

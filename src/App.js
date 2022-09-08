import "./App.css";
import Main from "./pages/Main";
import Filtered from "./pages/Filtered";
import Detail from "./pages/Detail";
import MyPage from "./pages/MyPage";
import Join from "./pages/Join";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Oauth from "./pages/Oauth";

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
            <Route path="/:district" element={<Filtered />} />
            <Route path="/detail/:restaurant_id" element={<Detail />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/oauth" element={<Oauth />} />
          </Routes>
        </Mobile>
      </div>
    </div>
  );
}

export default App;

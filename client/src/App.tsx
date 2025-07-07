import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import HomePage from "./pages/index";
import { useAuthStore } from "./stores/authStore";
import "./styles/globals.css";

function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  console.log("로그인 상태:", isLoggedIn);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<HomePage />} /> {/* ✅ 연결 완료 */}
      <Route path="/me" element={<MyPage />} />
    </Routes>
  );
}

export default App;

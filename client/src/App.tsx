import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import { useAuthStore } from "./stores/authStore";

function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <div>
            홈 페이지
            <br />
            로그인 상태: {isLoggedIn ? "✅ 로그인됨" : "❌ 로그아웃됨"}
          </div>
        }
      />
      <Route path="/me" element={<MyPage />} />
    </Routes>
  );
}

export default App;

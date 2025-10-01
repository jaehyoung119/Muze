import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import HomePage from "./pages";
import SongCreate from "./pages/SongCreate";
import PlaylistCreate from "./pages/PlaylistCreate";
import MuzerRank from "./pages/MuzerRank";
import SongRank from "./pages/SongRank";
import MuzeRank from "./pages/MuzeRank";

function App() {
  return (
    <Routes>
      {/* 로그인은 레이아웃 없이 */}
      <Route path="/login" element={<LoginPage />} />

      {/* MainLayout 안에 들어가는 화면들 */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/songs/create" element={<SongCreate />} />
        <Route path="/playlist/create" element={<PlaylistCreate />} />
        <Route path="/rank/muzer" element={<MuzerRank />} />
        <Route path="/rank/song" element={<SongRank />} />
        <Route path="/rank/muze" element={<MuzeRank />} />
        <Route path="/me" element={<MyPage />} />
      </Route>
    </Routes>
  );
}

export default App;

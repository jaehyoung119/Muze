import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";

function MePage() {
  const user = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);
  const logout = useAuthStore((s) => s.logout);
  const token = useAuthStore((s) => s.token);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUser(res.data);
      } catch (err) {
        console.error("유저 정보를 불러올 수 없습니다", err);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>내 정보</h2>
      {user ? (
        <>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button onClick={handleLogout}>로그아웃</button>
        </>
      ) : (
        <p>불러오는 중...</p>
      )}
    </div>
  );
}

export default MePage;

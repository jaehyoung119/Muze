import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
import logo from "../assets/Muze.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
        { email, password }
      );
      login(res.data.access_token);
      navigate("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setErrorMsg(err.response?.data?.message || "로그인 실패");
      } else {
        setErrorMsg("알 수 없는 에러");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f7fa]">
      {/* 전체 로그인 카드 */}
      <div className="bg-white rounded-3xl shadow-md w-[1000px] h-[350px] flex justify-between p-16 relative">
        {/* 왼쪽 섹션 */}
        <div className="flex flex-col w-1/2 h-full relative">
          {/* 로고: 좌측 상단 고정 */}
          <img
            src={logo}
            alt="Muze Logo"
            className="w-24 h-24 object-contain absolute top-[-20px] left-[-20px]"
          />
        </div>

        {/* 오른쪽 섹션 */}
        <div className="flex flex-col justify-center w-1/2 pl-16">
          {/* 이메일 입력 */}
          <input
            type="email"
            placeholder="이메일 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[360px] border border-gray-400 rounded-md px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#a88bff] text-[15px] transition-all"
          />

          {/* 비밀번호 입력 */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[360px] border border-gray-400 rounded-md px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#a88bff] text-[15px] transition-all"
          />

          {/* 비밀번호 표시 */}
          <label className="flex items-center gap-2 mb-10 text-sm text-gray-600 select-none">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="accent-[#a88bff] w-4 h-4"
            />
            비밀번호 표시
          </label>

          {/* 하단 버튼 */}
          <div className="flex items-center justify-between w-[360px]">
            <button
              className="text-[#1a73e8] text-sm font-medium hover:underline"
              onClick={() => alert("비밀번호 찾기 페이지로 이동")}
            >
              비밀번호 찾기
            </button>

            <button
              onClick={handleLogin}
              className="bg-[#a88bff] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#9a7ef8] active:scale-[0.98] transition-all"
            >
              로그인
            </button>
          </div>

          {/* 오류 메시지 */}
          {errorMsg && <p className="text-red-500 text-sm mt-4">{errorMsg}</p>}
        </div>
      </div>
    </div>
  );
}

import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function MainLayout() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <div className="flex h-screen w-screen overflow-hidden relative">
      {/* 사이드바 */}
      <div className="w-[312px] h-full bg-[#F0F3F7]">
        <Sidebar />
      </div>

      {/* 오른쪽 */}
      <div className="flex-1 flex flex-col h-full relative">
        {/* 헤더 */}
        <div className="h-[70px]">
          <Header />
        </div>

        {/* 광고/알림 줄 */}
        {showBanner && (
          <div className="bg-[#F8FAFC] border-b border-gray-200 flex items-center justify-center relative h-[50px]">
            <span className="text-lg font-medium text-gray-800">
              ✨ NEW! Muze 최신 버전이 출시되었습니다. 지금 바로 체험해 보세요!
            </span>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-4 flex items-center justify-center w-8 h-8 rounded-full hover:bg-[#E8F0FE] transition-colors"
            >
              <span className="material-symbols-outlined text-gray-600 text-lg">
                close
              </span>
            </button>
          </div>
        )}

        {/* 메인 콘텐츠 */}
        <main className="flex-1 overflow-y-auto flex items-center justify-center bg-white">
          <Outlet /> {/* 📌 라우팅되는 Main 영역 */}
        </main>
      </div>
    </div>
  );
}

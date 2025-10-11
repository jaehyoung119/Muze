import { useState } from "react";
import logo from "../../assets/Muze.png";

function VersionSelect() {
  const [open, setOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState("v1.0");

  const handleSelect = (version: string) => {
    setSelectedVersion(version);
    setOpen(false);
  };

  return (
    <div className="relative mt-0.9">
      {/* 버튼 */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 bg-[#F0F3F7] text-sm font-semibold px-3 py-1.5 rounded-full hover:bg-gray-200 transition-colors duration-200 mt-[2px]"
      >
        {selectedVersion}
        <span
          className="material-symbols-outlined text-gray-500 ml-0.5 relative top-[1px]"
          style={{ fontSize: "11px" }}
        >
          expand_more
        </span>
      </button>

      {/* 드롭다운 메뉴 */}
      {open && (
        <div className="absolute left-0 mt-2 w-56 bg-[#F0F3F7] rounded-xl shadow-lg border border-gray-200 p-4 z-50">
          <p className="text-sm text-gray-500 mb-2">모델을 선택하세요</p>

          <div className="space-y-3">
            <button
              onClick={() => handleSelect("v1.0")} // ✅ 클릭 시 버전 변경
              className="w-full flex justify-between items-center text-left text-sm hover:bg-gray-200 rounded-lg px-3 py-2"
            >
              <div>
                <p className="font-medium">신규, 테스트 버전</p>
                <p className="text-gray-600">1.0 Beta</p>
              </div>
              <span className="text-xs bg-blue-600 text-white rounded-full px-2 py-0.5">
                신규
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="w-full h-full px-5 py-2 flex items-center justify-between">
      {/* 왼쪽: 로고 + 텍스트 + 버전 */}
      <div className="flex items-center h-full gap-3">
        <div className="flex items-center gap-1">
          <img
            src={logo}
            alt="Muze logo"
            className="w-12 h-12 object-contain translate-y-[2px]"
          />
          <h1 className="text-2xl font-medium">Muze</h1>
        </div>
        <VersionSelect />
      </div>

      {/* 오른쪽: 프로필 버튼 */}
      <div>
        <button className="px-3 py-1 rounded-full hover:bg-black/5">
          프로필
        </button>
      </div>
    </header>
  );
}

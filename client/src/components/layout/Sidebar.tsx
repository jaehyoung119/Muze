import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="h-full p-6 flex flex-col justify-between">
      {/* 상단 영역 */}
      <div className="space-y-8">
        {/* 햄버거 */}
        <div className="flex items-center justify-between">
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5"
            aria-label="메뉴 열기"
          >
            <span className="material-symbols-outlined text-3xl leading-none">
              menu
            </span>
          </button>
        </div>

        {/* Muze 탐색하기 */}
        <nav className="space-y-2">
          <Link
            to="/"
            className="w-full flex items-center gap-4 px-2 py-3 rounded-2xl hover:bg-black/5 text-left"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              search
            </span>
            <p className="text-[color:var(--g-text-secondary)]">
              Muze 탐색하기
            </p>
          </Link>
        </nav>

        {/* Songs */}
        <div className="space-y-2">
          <h3 className="px-2 text-[color:var(--g-text-primary)] font-medium mb-4">
            Songs
          </h3>
          <Link
            to="/songs/create"
            className="w-full flex items-center gap-4 px-2 py-3 rounded-2xl hover:bg-black/5 text-left"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              music_note
            </span>
            <p className="text-[color:var(--g-text-secondary)]">Song 생성</p>
          </Link>
          <Link
            to="/playlist/create"
            className="w-full flex items-center gap-4 px-2 py-3 rounded-2xl hover:bg-black/5 text-left"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              playlist_add
            </span>
            <p className="text-[color:var(--g-text-secondary)]">
              Playlist 생성
            </p>
          </Link>
        </div>

        {/* Rank */}
        <div className="space-y-2">
          <h3 className="px-2 text-[color:var(--g-text-primary)] font-medium mb-4">
            Rank
          </h3>
          <Link
            to="/rank/muzer"
            className="w-full flex items-center gap-4 px-2 py-3 rounded-2xl hover:bg-black/5 text-left"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              group
            </span>
            <p className="text-[color:var(--g-text-secondary)]">Muzer</p>
          </Link>
          <Link
            to="/rank/song"
            className="w-full flex items-center gap-4 px-2 py-3 rounded-2xl hover:bg-black/5 text-left"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              album
            </span>
            <p className="text-[color:var(--g-text-secondary)]">Song 차트</p>
          </Link>
          <Link
            to="/rank/muze"
            className="w-full flex items-center gap-4 px-2 py-3 rounded-2xl hover:bg-black/5 text-left"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              leaderboard
            </span>
            <p className="text-[color:var(--g-text-secondary)]">Muze 차트</p>
          </Link>
        </div>
      </div>

      {/* 하단 영역 */}
      <div className="space-y-4 px-2">
        <button className="w-full flex items-center gap-4 px-2 py-3 rounded-2xl hover:bg-black/5">
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "20px" }}
          >
            settings
          </span>
          <p className="text-[color:var(--g-text-secondary)]">설정 및 도움말</p>
        </button>

        <div className="text-sm leading-snug px-4">
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-lg">•</span>
            <p className="text-[#0B57D0]">
              대한민국 성남시 김재형 개인프로젝트
            </p>
          </div>
          <div className="pl-5 text-[color:var(--g-text-secondary)]">
            알고리즘 기반 · <span className="text-[#0B57D0]">Playlist</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

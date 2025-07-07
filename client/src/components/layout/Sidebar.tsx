export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">Muze</h2>
        <nav className="space-y-4">
          <button className="text-left">홈</button>
          <button className="text-left">탐색</button>
        </nav>
      </div>
      <div className="text-sm text-gray-500">
        <p>설정 및 위치 정보</p>
      </div>
    </aside>
  );
}

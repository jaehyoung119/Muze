export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto">
      <h1 className="mb-4 leading-tight">AI가 당신의 취향을 분석해</h1>
      <p className="mb-8">나만의 음악 플레이리스트를 만들어드려요.</p>
      <button className="px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
        🎵 지금 시작하기
      </button>
    </section>
  );
}

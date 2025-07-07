import { FaMusic } from "react-icons/fa";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    console.log("Hero 컴포넌트 렌더됨!");
  }, []);

  return (
    <section className="flex flex-col justify-center items-center text-center py-20 px-4 bg-white">
      <h1 className="text-3xl font-bold mb-4">AI가 당신의 취향을 분석해</h1>
      <h2 className="text-xl text-gray-600 mb-8">
        나만의 음악 플레이리스트를 만들어드려요.
      </h2>
      <button className="flex items-center gap-2 bg-gray-100 text-lg font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition">
        <FaMusic />
        지금 시작하기
      </button>
    </section>
  );
}

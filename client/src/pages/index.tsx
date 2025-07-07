import MainLayout from "../components/layout/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-500">
        재형님, 안녕하세요
      </h1>
      <p className="mt-4 text-gray-600">당신만의 AI 음악 비서를 만나보세요.</p>
    </MainLayout>
  );
}

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <div className="w-64 h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col bg-white">
        <Header />

        <main className="flex-1 overflow-y-auto min-h-screen flex items-center justify-center bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}

import Sidebar from "./Sidebar";
import Header from "./Header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 relative bg-white">
        <Header />
        <main className="p-8 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

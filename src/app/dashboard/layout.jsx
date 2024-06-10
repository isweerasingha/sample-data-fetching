import Sidebar from "@/components/sidebar/sidebar";


export default function DashboardLayout({ children }) {
  return (
    <>
      <div className="w-100 h-[100vh] flex">
        <div className="w-1/4 h-full border border-red-950">
          <Sidebar />
        </div>
        <div className="w-3/4 h-full flex flex-col">
          <div className="w-100 border border-red-950 p-5">Header</div>
          <div className="w-100 grow border border-red-950 p-5">{children}</div>
        </div>
      </div>
    </>
  );
}

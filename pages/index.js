import Head from "next/head";
import Cards from "../components/Cards";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-[1600px] mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1">
          <div className="lg:col-span-2">
            <Sidebar />
          </div>
          <div className="lg:col-span-10">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

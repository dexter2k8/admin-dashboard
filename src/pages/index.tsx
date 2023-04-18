import styles from "@/styles/Home.module.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/sidebarContext";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const { collapsed } = useContext(SidebarContext);
  return (
    <>
      <Sidebar />
      <div className={`${styles.content} ${collapsed ? styles.collapsed : undefined}`}>
        <Navbar />
        <Dashboard />
      </div>
    </>
  );
}

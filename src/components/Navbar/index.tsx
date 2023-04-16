import { SidebarContext } from "@/contexts/sidebarContext";
import styles from "./styles.module.css";
import Image from "next/image";
import { memo, useContext } from "react";
import { MdMenu, MdSearch } from "react-icons/Md";
import { FaBell } from "react-icons/fa";

function Navbar() {
  const { collapsed, setCollapsed } = useContext(SidebarContext);
  return (
    <div className={`${styles.content} ${collapsed ? styles.collapsed : undefined}`}>
      <nav>
        <MdMenu onClick={() => setCollapsed(!collapsed)} />
        <a href="#" className={styles.menu}>
          Categories
        </a>
        <form action="#">
          <div>
            <input type="search" placeholder="Search..." />
            <button type="submit">
              <MdSearch />
            </button>
          </div>
        </form>
        <a href="#" className={styles.bell}>
          <FaBell />
          <span>8</span>
        </a>
        <a href="#" className={styles.avatar}>
          <Image src={"/dexter.png"} alt="avatar" width={29} height={36} />
        </a>
      </nav>
    </div>
  );
}

export default memo(Navbar);

import { memo, useContext, useState } from "react";
import styles from "./styles.module.css";
import { FaReact, FaShoppingBag, FaCog } from "react-icons/fa";
import { MdDashboard, MdDonutLarge } from "react-icons/Md";
import { RiMessage2Fill, RiGroupFill, RiLogoutBoxFill } from "react-icons/Ri";
import { SidebarContext } from "@/contexts/sidebarContext";

const sidebarItems = [
  { name: "Dashboard", icon: <MdDashboard /> },
  { name: "My Store", icon: <FaShoppingBag /> },
  { name: "Analytics", icon: <MdDonutLarge /> },
  { name: "Message", icon: <RiMessage2Fill /> },
  { name: "Team", icon: <RiGroupFill /> },
];

function Sidebar() {
  const { collapsed } = useContext(SidebarContext);
  const [active, setActive] = useState<number>(0);
  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : undefined}`}>
      <a href="#" className={styles.brand}>
        <FaReact />
        <span>AdminHub</span>
      </a>
      <ul className={styles.items}>
        {sidebarItems.map((item, i) => (
          <li key={i} className={i === active ? styles.active : undefined} onClick={() => setActive(i)}>
            <a href="#">
              {item.icon}
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className={styles.menu}>
        <li>
          <a href="#">
            <FaCog />
            <span>Settings</span>
          </a>
        </li>
        <li className={styles.logoff}>
          <a href="#">
            <RiLogoutBoxFill />
            <span>Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default memo(Sidebar);

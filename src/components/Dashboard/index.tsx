import styles from "./styles.module.css";
import { memo } from "react";
import { MdKeyboardArrowRight, MdCloudDownload } from "react-icons/Md";
import { BsCalendarCheckFill, BsFilter, BsSearch, BsThreeDotsVertical } from "react-icons/Bs";
import { BiGroup } from "react-icons/Bi";
import { AiFillDollarCircle, AiOutlinePlus } from "react-icons/Ai";
import Image from "next/image";

function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <section className={styles.cards}>
        <div>
          <h1>Dashboard</h1>
          <ul className={styles.headline}>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <MdKeyboardArrowRight />
            </li>
            <li>
              <a className={styles.active} href="#">
                Home
              </a>
            </li>
          </ul>
        </div>
        <a className={styles.btnDownload} href="#">
          <MdCloudDownload />
          <span>Download PDF</span>
        </a>
      </section>

      <ul className={styles.boxInfo}>
        <li>
          <i>
            <BsCalendarCheckFill />
          </i>
          <span>
            <h3>1020</h3>
            <p>New Order</p>
          </span>
        </li>
        <li>
          <i>
            <BiGroup />
          </i>
          <span>
            <h3>2834</h3>
            <p>Visitors</p>
          </span>
        </li>
        <li>
          <i>
            <AiFillDollarCircle />
          </i>
          <span>
            <h3>$2543</h3>
            <p>Total Sales</p>
          </span>
        </li>
      </ul>

      <section className={styles.tableData}>
        <div className={styles.order}>
          <div className={styles.head}>
            <h3>Recent Orders</h3>
            <BsSearch />
            <BsFilter />
          </div>

          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Date Order</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <figure>
                    <Image src="/dexter.png" alt="avatar" width={29} height={36} />
                  </figure>
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className={`${styles.status} ${styles.completed}`}>Completed</span>
                </td>
              </tr>
              <tr>
                <td>
                  <figure>
                    <Image src="/dexter.png" alt="avatar" width={29} height={36} />
                  </figure>
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <figure>
                    <Image src="/dexter.png" alt="avatar" width={29} height={36} />
                  </figure>
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className={`${styles.status} ${styles.process}`}>Process</span>
                </td>
              </tr>
              <tr>
                <td>
                  <figure>
                    <Image src="/dexter.png" alt="avatar" width={29} height={36} />
                  </figure>
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                </td>
              </tr>
              <tr>
                <td>
                  <figure>
                    <Image src="/dexter.png" alt="avatar" width={29} height={36} />
                  </figure>
                  <p>John Doe</p>
                </td>
                <td>01-10-2021</td>
                <td>
                  <span className={`${styles.status} ${styles.completed}`}>Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.todo}>
          <div className={styles.head}>
            <h3>Todos</h3>
            <AiOutlinePlus />
            <BsFilter />
          </div>
          <ul>
            <li className={styles.completed}>
              <p>Todo List</p>
              <BsThreeDotsVertical />
            </li>
            <li className={styles.completed}>
              <p>Todo List</p>
              <BsThreeDotsVertical />
            </li>
            <li className={styles.notCompleted}>
              <p>Todo List</p>
              <BsThreeDotsVertical />
            </li>
            <li className={styles.completed}>
              <p>Todo List</p>
              <BsThreeDotsVertical />
            </li>
            <li className={styles.notCompleted}>
              <p>Todo List</p>
              <BsThreeDotsVertical />
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default memo(Dashboard);

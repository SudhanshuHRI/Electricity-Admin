import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import {
  FaLaptop,
  FaUserLarge,
  FaBusinessTime,
  FaClipboardList,
  FaSuitcase,
  FaRectangleList,
  FaBox,
  FaBookBookmark,
  FaTicket,
} from "react-icons/fa6";

const Sidebar = () => {
  const router = useRouter()

  const [heightLight, setHeightlight] = useState('/home')

  const handleRoute = ()=>{
    router.push('/hello')
  }
  


  return (
    <>
      <aside className="app-sidebar ps ps--active-y">
        {/* <div className="app-sidebar__user">
          <div className="dropdown user-pro-body text-center">
            <div className="user-pic">
              <img
                src="/HD.png"
                alt="user-img"
                className="avatar-lg rounded-circle mb-1"
              />
            </div>
            <div className="user-info">
              <h6 className=" mb-0 font-weight-semibold">{username}</h6>
              <span className="text-muted app-sidebar__user-name text-sm">
                Admin
              </span>
            </div>
          </div>
        </div> */}
        <ul className="side-menu">
          <li className="slide is-expanded" onClick={()=>{setHeightlight('/home')}}>
            <Link
              className={`side-menu__item ${heightLight == "/home" ? " active" : ''}`}
              href="/home"
              data-toggle="slide"
            >
              <FaLaptop />
              <span className="side-menu__label">Dashboard</span>
            </Link>
          </li>
          <li className="slide" onClick={()=>{setHeightlight('/employees')}}>
            <Link
              className={`side-menu__item ${heightLight == "/employees" ? " active" : ''}`}
              href="/employees"
              data-toggle="slide"
            >
              <FaUserLarge />
              <span className="side-menu__label">List of Employee</span>
            </Link>
          </li>
          {/* <li className="slide">
            <Link
              className="side-menu__item"
              data-toggle="slide"
              href="/serviceschedule"
            >
              <FaBusinessTime />
              <span className="side-menu__label">Scheduled Services</span>
            </Link>
          </li> */}
          <li className="slide" >
            <Link
              className={`side-menu__item ${heightLight == "/customers" ? " active " : ''}`}
              data-toggle="slide"
              href="/customers"
            >
              <FaClipboardList />
              <span className="side-menu__label">List of Customers</span>
            </Link>
          </li>
          <li className="slide" >
            <Link
              className={`side-menu__item ${heightLight == "/requested" ? " active" : ''}`}
              data-toggle="slide"
              href="/requested"
            >
              <FaSuitcase />
              <span className="side-menu__label">Scheduled Services</span>
            </Link>
          </li>
          <li className="slide" >
            <Link className={`side-menu__item ${heightLight == "detailedServices" ? " active" : ''}`} href="/detailedServices">
              <FaRectangleList />
              <span className="side-menu__label">Services</span>
            </Link>
          </li>
          <li className="slide" >
            <Link
              className={`side-menu__item ${heightLight == "/subscription" ? " active" : ''}`}
              data-toggle="slide"
              href="/subscription"
            >
              <FaBox />
              <span className="side-menu__label">Subscription</span>
            </Link>
          </li>
          <li className="slide" >
            <Link className={`side-menu__item ${heightLight == "/role" ? " active" : ''}`} data-toggle="slide" href="/role">
              <FaBookBookmark />
              <span className="side-menu__label">News Letter</span>
            </Link>
          </li>
          <li className="slide" >
            <Link
              className={`side-menu__item ${heightLight == "/location" ? " active" : ''}`}
              data-toggle="slide"
              href="/location"
            >
              <FaTicket />
              <span className="side-menu__label">Locations</span>
            </Link>
          </li>
          <li className="slide" >
            <Link
              className={`side-menu__item ${heightLight == "/ticket" ? " active" : ''}`}
              data-toggle="slide"
              href="/ticket"
            >
              <FaTicket />
              <span className="side-menu__label">Tickets</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;

import React from "react";
import {
  IoMdHome,
  IoSearch,
  IoNotificationsOutline,
  FaMessage,
  HiOutlineClipboardList,
  FaRegBookmark,
  SlPeople,
  FaXTwitter,
  CgProfile,
  CgMoreO,
} from "./icon";
import { Link } from "react-router-dom";

const SideBar = () => {
  const SideBarLink = [
    {
      icon: <IoMdHome />,
      name: "Home",
    },
    {
      icon: <IoSearch />,
      name: "Explore",
    },
    {
      icon: <IoNotificationsOutline />,
      name: "Notification",
    },
    {
      icon: <FaMessage />,
      name: "Messages",
    },
    {
      icon: <HiOutlineClipboardList />,
      name: "Lists",
    },
    {
      icon: <FaRegBookmark />,
      name: "Bookmarks",
    },
    {
      icon: <SlPeople />,
      name: "Communities",
    },
    {
      icon: <CgProfile />,
      name: "Profile",
    },
    {
      icon: <FaXTwitter />,
      name: "Premium",
    },
    {
      icon: <CgMoreO />,
      name: "More",
    },
  ];
  return (
    <section className="h-screen cursor-pointer">
      <FaXTwitter className="h-8 w-8" />

      <ul className="flex flex-col">
        {SideBarLink.map((Navlink) => (
          <>
            <li
              key={Navlink.name}
              className="flex items-center py-3 gap-1 hover:text-slate-900"
            >
              {Navlink.icon}
              <span>{Navlink.name}</span>
            </li>
          </>
        ))}
      </ul>
    </section>
  );
};

export default SideBar;

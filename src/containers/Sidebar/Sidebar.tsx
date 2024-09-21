import Body from "../Body/Body";
import SidebarSidebar from "./SidebarSidebar";
import s from "./sidebar.module.css"
type Props = {
  isActive?: boolean;
};

const Sidebar = (props: Props) => {
  return (
    <>
      <div className={s.sidebar}>
        <div className="row flex-nowrap">
          <SidebarSidebar />
          <div className="col py-3">
            <Body />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

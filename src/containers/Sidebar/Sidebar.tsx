import Body from "../Body/Body";
import SidebarSidebar from "./SidebarSidebar";
type Props = {
  isActive?: boolean;
};

const Sidebar = (props: Props) => {
  return (
    <>
      <div className="container-fluid">
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

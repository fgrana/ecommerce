import SidebarComponent from "./Sidebar-component";

type Props = {};

const SidebarSidebar = (props: Props) => {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a
          href="/"
          className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-5 d-none d-sm-inline">Poke-project</span>
        </a>
        <ul
          className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <SidebarComponent text={"Pokemon"} minisidebar={[]} />
          <SidebarComponent text={"Trainers"} minisidebar={[]} />
          <SidebarComponent text={"Items"} minisidebar={["pokeballs", "berrys"]} />
          <SidebarComponent text={"Catch"} minisidebar={[]} />
          <SidebarComponent text={"Pokedex"} minisidebar={[]} />
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default SidebarSidebar;

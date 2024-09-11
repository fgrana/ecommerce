import MiniSidebarComponent from "./mini-sidebar-component";

type Props = {
  text: string;
  minisidebar: string[];
};

const SidebarComponent = (props: Props) => {
  return (
    <li>
      <a
        href="#submenu2"
        data-bs-toggle="collapse"
        className="nav-link px-0 align-middle "
      >
        <i className="fs-4 bi-bootstrap"></i>{" "}
        <span className="ms-1 d-none d-sm-inline">{props.text}</span>
      </a>
      <ul
        className="collapse nav flex-column ms-1"
        id="submenu2"
        data-bs-parent="#menu"
      >
        {props.minisidebar.map((text) => (
          <MiniSidebarComponent text={text} />
        ))}
      </ul>
    </li>
  );
};

export default SidebarComponent;

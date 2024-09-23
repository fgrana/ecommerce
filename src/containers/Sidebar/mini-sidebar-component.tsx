import React from "react";

type Props = {
  text: string;
};

const miniSidebarComponent = (props: Props) => {
  return (
    <li className="w-100">
      <a href="#" className="nav-link px-0">
        {" "}
        <span className="d-none d-sm-inline">{props.text}</span>
      </a>
    </li>
  );
};

export default miniSidebarComponent;

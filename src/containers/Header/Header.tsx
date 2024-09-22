import header from "./Header.module.css"

function Header() {
  return (
    <>
      <div className={header.header}>
        <div className={header.stats}>
          <div>
          <button type="button" className="btn btn-primary">
            Home
          </button>
          <button type="button" className="btn btn-primary">
            Projects
          </button>
          <button type="button" className="btn btn-primary">
            About me
          </button>
          <button type="button" className="btn btn-primary">
            Contact
          </button>
          <p>player 1 name and stats</p>
        </div>
        </div>
      </div>
    </>
  );
}

export default Header;

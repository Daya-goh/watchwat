import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigateHome = useNavigate();
  const handleHome = () => {
    navigateHome("/");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" onClick={handleHome}>
          WatchWat
        </a>
        <div className="w-10 rounded-full">
          <img src="https://img.icons8.com/bubbles/500/tv-show.png" />
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-2 gap-3">
          <li>
            <a>WatchList</a>
          </li>
          <li>
            <a>Favorites</a>
          </li>
          <button
            data-toggle-theme="dracula"
            data-act-class="pl-4"
            className="btn btn-primary h-4 w-4"
          >
            {" "}
            💡
          </button>
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.pinimg.com/736x/f8/79/28/f879280dd2ea46948fec482792070bca.jpg" />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;

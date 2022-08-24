const NavBar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">WatchWat </a>
        <div class="w-10 rounded-full">
          <img src="https://img.icons8.com/bubbles/500/tv-show.png" />
        </div>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal p-0">
          <li>
            <a>WatchList</a>
          </li>
          <li>
            <a>Favorites</a>
          </li>
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-10 rounded-full">
                <img src="https://i.pinimg.com/736x/f8/79/28/f879280dd2ea46948fec482792070bca.jpg" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <span class="badge">New</span>
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

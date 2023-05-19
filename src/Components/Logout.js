import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { logout, selectUser } from "../features/userSlice";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="logout">
    <div className="col">
<img src = 'https://viragtea.com/backend/img/admin-login.jpg '></img>;
</div>
 <div className="col">
      <h1>
        Welcome <span className="user--name">{user.name}</span>{" "}
      </h1>
      <button className="logout-btn" onClick={(e) => handleLogout(e)}>
        Log Out
      </button>
      </div>
    </div>
  );
};

export default Logout;

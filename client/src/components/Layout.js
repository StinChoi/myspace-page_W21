import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {

  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

// import React, { useContext } from "react";
// import { Link, Outlet, useNavigate } from "react-router-dom"
// import { AuthContext } from "../providers/AuthProvider";

// const Layout = () => {
//   let x = useNavigate();
//   const { authenticated, handleLogout } = useContext(AuthContext);
//   const renderAuthLinks = () => {
//     if (authenticated) {
//       return <button onClick={() => handleLogout(x)}>Logout</button>
//     }
//     return (
//       <>
//         <div>
//           <Link to="/register">Create User Profile</Link>
//         </div>
//         <div>
//           <Link to="/login">Login User Profile</Link>
//         </div>
//       </>
//     );
//   };
//   return (
//     <div>
//       <div styles={styles.navbar}>
//         <div>
//           <Link to="/">Home</Link>
//         </div>
//         <div>
//           <Link to="/public">Public</Link>
//         </div>
//         <div>
//           <Link to="/protected">User Profile</Link>
//         </div>
//         {renderAuthLinks()}
//         <div style={styles.pageContainer}>
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// const styles = {
//   navbar: {
//     display: 'flex',
//     border: '1.5px solid'
//   },
//   pageContainer: {
//     maxWidth: '1000px',
//     margin: 'auto',
//     // border: '2px solid blue',
//     padding: '15px',
//   }
// }
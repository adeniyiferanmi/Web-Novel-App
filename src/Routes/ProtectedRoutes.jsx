import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const [checking, setChecking] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getToken = async () => {
      try {
        const auth = await isAuthenticated();
        if (!auth) {
          navigate("/login");
          return;
        }
      } catch (error) {
        console.log(error);
      } finally {
        setChecking(false);
      }
    };
    getToken();
  }, [navigate, isAuthenticated]);
  if (checking) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#EEE9E1]">
        <p className="font-serif text-[#40223E] text-[1.2rem]">Loading...</p>
      </div>
    );
  }

  return <Outlet />;
};
//   return (
//     <div>
//       <Outlet />
//     </div>
//   );
// };

export default ProtectedRoutes;

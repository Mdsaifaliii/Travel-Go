import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const LogoutButton = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  const handleLogout = async () => {
    await signOut(auth);
    alert("👋 Logged out!");
    navigate("/login");
  };

  if (loading || !user) return null; 

  return (
    <button
      onClick={handleLogout}
      className="w-30 py-2 fixed top-3 left-155 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50"
    >
      Logout
    </button>
  );
};

export default LogoutButton;

import { getSession } from "next-auth/react";
import Login from "./Login"
import ReactDOM from 'react-dom';
import RegisterComponent from "./Register";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Home({ session }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  if (!session) {
    return (
      <div>
        <Navbar /> 
        <button  className="bg-blue-500 text-white px-4 py-2 rounded-md m-2 hover:bg-blue-600" onClick={handleLoginClick}>Login</button>
        <button  className="bg-blue-500 text-white px-4 py-2 rounded-md m-2 hover:bg-blue-600" onClick={handleRegisterClick}>Register</button>
        {showLogin && <Login />}
        {showRegister && <RegisterComponent />}
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Head>
        <title>Home page</title>
      </Head>
    

      <main className="flex bg-gray-100">
       home page
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}

import React from "react";
import { Navbar } from "../../components/navbar/Navbar";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = ({}) => {
  return (
    <div>
      <Navbar />
      <div>LoginPage</div>
    </div>
  );
};

export default LoginPage;

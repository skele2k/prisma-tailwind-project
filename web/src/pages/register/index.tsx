import React from "react";
import { Navbar } from "../../components/navbar/Navbar";

interface RegisterPageProps {}

const RegisterPage: React.FC<RegisterPageProps> = ({}) => {
  return (
    <div>
      <Navbar />
      <div>RegisterPage</div>
    </div>
  );
};

export default RegisterPage;

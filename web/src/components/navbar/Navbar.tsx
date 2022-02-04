import React, { MouseEvent } from "react";
import { useRouter } from "next/router";

type NavbarProps = {
  styles?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ styles }) => {
  const router = useRouter();

  const handleHomeClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/");
  };

  const handleLoginClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/login");
  };

  const handleRegisterClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/register");
  };

  return (
    <div className={`bg-gray-100 p-5 shadow-md ${styles}`}>
      <div className="max-w-4xl flex flex-row mx-auto justify-between">
        <a href="/" onClick={handleHomeClick} className="text-2xl font-bold">
          Tody
        </a>
        <div className="flex space-x-2 items-center">
          <a href="/login" onClick={handleLoginClick}>
            Login
          </a>
          <a href="/register" onClick={handleRegisterClick}>
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

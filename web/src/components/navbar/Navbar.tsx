import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <div className="flex flex-row mx-w-md space-x-3 p-4">
      <div className="text-lg font-bold bg-red-200 mx-auto ">Tody</div>
      <div>AA</div>
    </div>
  );
};

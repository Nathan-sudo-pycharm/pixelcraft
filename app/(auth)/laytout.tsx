import React from "react";
// Layout has to always have a 'children ' property
const Laytout = ({ children }: { children: React.ReactNode }) => {
  return <main className="auth">{children}</main>;
};

export default Laytout;

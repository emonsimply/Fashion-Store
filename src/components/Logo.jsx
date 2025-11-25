import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div>
        <h1 className="font-bold">FashionStore</h1>
      </div>
    </Link>
  );
};

export default Logo;

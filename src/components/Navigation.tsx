"use client";

import Logo from "../../public/Logo/Gsynergy Logo V2 Long Description.svg";
import Link from "next/link";
import Image from "next/image";

interface NavigationProps {
  isAuthenticated: boolean;
  onAuthToggle: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isAuthenticated,
  onAuthToggle,
}) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        background: "#f4f4f4",
        color: "black",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Image src={Logo} alt="Company Logo" width={100} height={40} />
        <Link href="/stores">Stores</Link>
        <Link href="/skus">SKUs</Link>
        <Link href="/planning">Planning</Link>
        <Link href="/chart">Chart</Link>
      </div>
      <div>
        {isAuthenticated ? (
          <button onClick={() => onAuthToggle()}>Sign Out</button>
        ) : (
          <button onClick={() => onAuthToggle()}>Sign In</button>
        )}
      </div>
    </nav>
  );
};

"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <p>
          © {year || "2026"} Farouk Popoola. Built with 💚 and a lot of test cases.
        </p>
      </div>
    </footer>
  );
}

import React from "react";
import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/about">
      <a title="About Page">About Page</a>
    </Link>
    <br />
    <Link href="/projects">
      <a>My Projects</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;

import Link from "next/link";
import React from "react";

export default async function Blog() {
  return (
    <main>
      <h1>Blog</h1>
      <div>
        <li>
          <Link href={"/blog/posts"}>Artykuł</Link>
        </li>
      </div>
    </main>
  );
}

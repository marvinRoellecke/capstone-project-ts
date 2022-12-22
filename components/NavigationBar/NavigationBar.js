import Link from "next/link";
import styled from "styled-components";

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <Link href={"/favorites"}>fav</Link>
        </li>
      </ul>
    </nav>
  );
}

import Link from "next/link";
import styled from "styled-components";
import { IoListOutline } from "react-icons/io5";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>
            <IoListOutline />
          </Link>
        </li>
        <li>
          <Link href={"/favorites"}>
            <FavoriteButton />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

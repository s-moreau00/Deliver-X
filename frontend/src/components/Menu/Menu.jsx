/* eslint-disable import/no-unresolved */
import CartLink from "../cartLink/CartLink";
import CardList from "./cardList/cardList";
import "./menu.css";

export default function Menu() {
  return (
    <>
      <CardList />
      <CartLink />
    </>
  );
}

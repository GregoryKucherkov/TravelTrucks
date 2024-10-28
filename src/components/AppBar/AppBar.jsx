import { Link, NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import { Container } from "../Container/Container";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";

const AppBar = () => {
  const navLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <header className={css.header}>
      <Container>
        <nav className={css.nav}>
          <Link to="/" className={css.logo}>
            <svg className={css.logo}>
              <use href={`${sprite}#Logo`} />
            </svg>
          </Link>
          <ul className={css.headerMenu}>
            <li>
              <NavLink className={navLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/catalog" end className={navLinkClass}>
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default AppBar;

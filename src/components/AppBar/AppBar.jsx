import { Link, NavLink } from "react-router-dom";
import css from "./AppBar.module.css";
import { Container } from "../Container/Container";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";
import { selectChosen } from "../../redux/chosen/choseSelectors";
import { useSelector } from "react-redux";

const AppBar = () => {
  const navLinkClass = ({ isActive }) => clsx(css.link, isActive && css.active);
  const selected = useSelector(selectChosen);

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
            {selected.length > 0 && (
              <li>
                <NavLink to="/catalog/favorites" end className={navLinkClass}>
                  Favorites
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default AppBar;

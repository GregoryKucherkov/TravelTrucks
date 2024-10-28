import { useDispatch, useSelector } from "react-redux";
import { carDetails } from "../../redux/cars/CarsOps";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import {
  selectCarDetails,
  selectError,
  selectLoading,
} from "../../redux/cars/carsSelectors";
import BookForm from "../../components/BookForm/BookForm";
import { Suspense, useEffect, useRef } from "react";
import { Container } from "../../components/Container/Container";
import css from "./CatalogDetails.module.css";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMsg/ErrorMsg";

const CatalogDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectCarDetails);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const location = useLocation();
  const backPath = useRef(location.state);

  useEffect(() => {
    if (id) {
      dispatch(carDetails(id));
    }
  }, [dispatch, id]);

  const linkClassName = ({ isActive }) =>
    clsx(css.additionalLink, isActive && css.current);

  return (
    <section>
      <Container>
        <Link to={backPath.current} className={css.goBack}>
          Go back
        </Link>
        {details && (
          <>
            <h2 className={css.h2Name}>{details.name}</h2>
            <p className={css.details}>
              <svg
                className={css.svg}
                style={{ width: "16", height: "16", fill: "var(--rating)" }}
              >
                <use href={`${sprite}#star`} />
              </svg>
              {details.rating}({details.reviews.length} Reviews){" "}
              <svg
                className={css.svgMap}
                style={{ width: "16", height: "16", fill: "black" }}
              >
                <use href={`${sprite}#map`} />
              </svg>{" "}
              {details.location}
            </p>
            <h2 className={css.h2Price}>€ {details.price}.00</h2>

            <ul className={css.imgUl}>
              {details.gallery.map((pic) => (
                <li key={pic.original}>
                  <div className={css.thumb}>
                    <img
                      className={css.img}
                      src={pic.original}
                      alt="Gallery item"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className={css.description}>{details.description}</p>

            <ul className={css.additionalLinks}>
              <li>
                <h3>
                  <NavLink className={linkClassName} to="features">
                    Features
                  </NavLink>
                </h3>
              </li>
              <li>
                <h3>
                  <NavLink className={linkClassName} to="reviews">
                    Reviews
                  </NavLink>
                </h3>
              </li>
            </ul>
            <hr />

            <div className={css.outlets}>
              <Suspense fallback={<Loader />}>
                <Outlet />
                <BookForm />
              </Suspense>
            </div>
          </>
        )}
        {loading && <Loader />}
        {error && <ErrorMessage />}
      </Container>
    </section>
  );
};

export default CatalogDetails;

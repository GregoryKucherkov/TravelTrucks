import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./Home.module.css";
import { Container } from "../../components/Container/Container";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className={css.h1Section}>
      <Container>
        <h1 className={css.h1Slogan}>Campers of your dreams</h1>
        <p className={css.pText}>
          You can find everything you want in our catalog
        </p>
        <Button
          onClick={() => {
            navigate("/catalog");
          }}
        />
      </Container>
    </section>
  );
};

export default Home;

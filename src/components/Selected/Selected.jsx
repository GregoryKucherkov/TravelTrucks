// import { useSelector } from "react-redux";
// import { selectChosen } from "../../redux/chosen/choseSelectors";

import css from "./Selected.module.css";
import CarsList from "../CarsList/CarsList";

const Selected = () => {
  // const choosen = useSelector(selectChosen);
  //pass choosen as props to carlist
  return (
    <>
      <h2 className={css.h2Selected}>Selected</h2>
      <CarsList />
    </>
  );
};

export default Selected;

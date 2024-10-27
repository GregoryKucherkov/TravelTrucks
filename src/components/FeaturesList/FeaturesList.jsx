import sprite from "../../assets/sprite.svg";
import css from "./FeaturesList.module.css";

const FeaturesList = ({ car, addClass = "" }) => {
  const featureIcons = [
    { name: "AC", svgId: "ac" },
    { name: "bathroom", svgId: "bathroom" },
    { name: "kitchen", svgId: "kitchen" },
    { name: "TV", svgId: "tv" },
    { name: "radio", svgId: "radio" },
    { name: "refrigerator", svgId: "refrigerator" },
    { name: "microwave", svgId: "microwave" },
    { name: "gas", svgId: "gas" },
    { name: "water", svgId: "water" },
  ];

  return (
    <ul className={`${css.featuresUl} `}>
      {featureIcons.map(({ name, svgId }) => {
        return (
          car[name] && (
            <li className={`${css.itemLi} ${css[addClass]}`} key={name}>
              <svg style={{ width: "20px", height: "20px" }}>
                <use href={`${sprite}#${svgId}`} />
              </svg>
              <span className={css.name}>{name}</span>
            </li>
          )
        );
      })}
    </ul>
  );
};

export default FeaturesList;

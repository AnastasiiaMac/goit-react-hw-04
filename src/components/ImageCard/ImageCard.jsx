import css from "./ImageCard.module.css";
const ImageCard = ({ url, name }) => {
  return <img className={css.image} src={url} alt={name} />;
};
export default ImageCard;

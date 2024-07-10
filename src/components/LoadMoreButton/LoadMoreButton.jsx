import css from "./LoadMoreButton.module.css";
const LoadMoreButton = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick} type="button">
      Load more
    </button>
  );
};
export default LoadMoreButton;

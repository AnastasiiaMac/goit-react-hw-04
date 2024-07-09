import ImageCard from "../ImageCard/ImageCard";
import css from
const ImageGallery = ({ data }) => {
  return (
    <ul>
      {data.map((datum) => {
        return (
          <li key={datum.id}>
            <div>
              <ImageCard url={datum.urls.small} name={datum.alt_description} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default ImageGallery;

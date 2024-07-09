import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import fetchImagesBySearchQuery from "../images-api";
import Loader from "./Loader/Loader";
import ImageGallery from "./ImageGallery/ImageGallery";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleSearch = async (searchQuery) => {
    try {
      setImages([]);
      setError(false);
      setLoading(true);
      const data = await fetchImagesBySearchQuery(searchQuery);
      console.log(data);
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery data={images} />}
    </div>
  );
}

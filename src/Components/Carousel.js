import React, { useState } from "react";
import styles from "./Carousel.module.css";

const HookedCarousel = () => {
  const [images, setImages] = useState([
    {
      image: "https://picsum.photos/200/300",
      title: "Strong mask",
      subTitle: "Secondary text",
    },
    {
      image: "https://picsum.photos/id/237/200/300",
      title: "Strong mask",
      subTitle: "Secondary text",
    },
    {
      image: "https://picsum.photos/id/237/200/300",
      title: "Strong mask",
      subTitle: "Secondary text",
    },
  ]);

  const [currentImageIdx, setCurrentImagIdx] = useState(0);

  const getReviews = () => {
    const data = fetch(
      `https://mybusiness.googleapis.com/v4/accounts/6874287982/locations/ChIJNVyMGnhT4joRMj4VSn0hLak/reviews`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const prevSlide = () => {
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  const nextSlide = () => {
    // check if we need to start over from the first index
    const resetIndex = currentImageIdx === images.length - 1;

    const index = resetIndex ? 0 : currentImageIdx + 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
  };

  // create a new array with 5 elements from the source images
  const activeImageSourcesFromState = images.slice(
    currentImageIdx,
    currentImageIdx + 3
  );

  // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 3
      ? // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
        [
          ...activeImageSourcesFromState,
          ...images.slice(0, 3 - activeImageSourcesFromState.length),
        ]
      : activeImageSourcesFromState;

  return (
    <div style={{marginTop:"1rem"}}>
      <button onClick={prevSlide}>Prev</button>
      {/* render images */}
      {imageSourcesToDisplay?.map(
        (image, index) => {
          console.log(image);
          return <img src={image?.image} alt="image" />;
        }

        // <img key={index} src={image} alt="" style={{ maxWidth: '15%', display: 'inlie-block' }} />
      )}
      <button onClick={nextSlide}>Next</button>
    </div>
  );
};

export default HookedCarousel;

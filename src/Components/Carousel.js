import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";

const Carousel = ({ slides, infinite }) => {
  const [images, setImages] = useState([]);

  const [currentImageIdx, setCurrentImagIdx] = useState(0);
  const [nextButton, setNextButton] = useState(false);
  const [preButton, setPrevButton] = useState(false);

  const getSlides = () => {
    const data = fetch(`http://localhost:3600/api/carousel/?slides=${slides}`)
      .then((response) => response.json())
      .then((data) => setImages(data));
  };

  useEffect(() => {
    getSlides();
    setNextButton(false);
    setPrevButton(false);
  }, [slides, infinite]);

  const prevSlide = () => {
    // find out whether currentImageIdx eqals 0 and thus user reached beginning of carousel
    const resetToVeryBack = currentImageIdx === 0;

    const index = resetToVeryBack ? images.length - 1 : currentImageIdx - 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);
    if (index === 0) {
      setPrevButton(true);
    } else {
      setPrevButton(false);
    }

    if (index === images.length - 1) {
      setNextButton(true);
    } else {
      setNextButton(false);
    }
  };

  const nextSlide = () => {
    // check if we need to start over from the first index
    const resetIndex = currentImageIdx === images.length - 1;

    const index = resetIndex ? 0 : currentImageIdx + 1;

    // assign the logical index to current image index that will be used in render method
    setCurrentImagIdx(index);

    if (index === 0) {
      setPrevButton(true);
    } else {
      setPrevButton(false);
    }

    if (index === images.length - 1) {
      setNextButton(true);
    } else {
      setNextButton(false);
    }
  };

  // create a new array with 5 elements from the source images
  const activeImageSourcesFromState = images.slice(
    currentImageIdx,
    currentImageIdx + 1
  );

  // check the length of the new array (it’s less than 5 when index is at the end of the imagge sources array)
  const imageSourcesToDisplay =
    activeImageSourcesFromState.length < 3
      ? // if the imageSourcesToDisplay's length is lower than 5 images than append missing images from the beginning of the original array
        activeImageSourcesFromState
      : activeImageSourcesFromState;

  return (
    <div style={{ marginTop: "1rem" }}>
      <button onClick={prevSlide} disabled={preButton || !infinite}>
        {"<<"}
      </button>
      {/* render images */}
      {imageSourcesToDisplay?.map(
        (image, index) => {
          return (
            <span>
              <div className={styles.centered}>{image.title}</div>
              <div className={styles.centered2}>{image.subTitle}</div>
              <img src={image?.image} alt="image" />
            </span>
          );
        }

        // <img key={index} src={image} alt="" style={{ maxWidth: '15%', display: 'inlie-block' }} />
      )}
      <button onClick={nextSlide} disabled={nextButton || !infinite}>
        {">>"}
      </button>
    </div>
  );
};

export default Carousel;

const resize = (frame, image) => {
  const requiredWidth = frame.width;
  const requiredHeight = frame.height;

  let imageWidth = image.width;
  let imageHeight = image.height;
  const imageProportion = imageWidth / imageHeight;

  if (imageWidth === imageHeight) {
    if (requiredWidth >= requiredHeight) {
      imageWidth = Math.floor(requiredHeight * imageProportion);
      imageHeight = requiredHeight;
    } else {
      imageHeight = Math.floor(requiredWidth / imageProportion);
      imageWidth = requiredWidth;
    }
  } else if (imageWidth > imageHeight) {
    imageHeight = Math.floor(requiredWidth / imageProportion);
    imageWidth = requiredWidth;
  } else {
    imageWidth = Math.floor(requiredHeight * imageProportion);
    imageHeight = requiredHeight;
  }

  return {width: imageWidth, height: imageHeight};
};

export default resize;

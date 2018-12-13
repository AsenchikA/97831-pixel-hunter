const resize = (frame, image) => {
  const requiredWidth = frame.width;
  const requiredHeight = frame.height;

  let imageWidth = image.width;
  let imageHeight = image.height;

  const imageProportion = imageWidth / imageHeight;
  const frameProportion = requiredWidth / requiredHeight;

  if (frameProportion >= imageProportion) {
    imageHeight = requiredHeight;
    imageWidth = Math.floor(requiredHeight * imageProportion);
  } else {
    imageWidth = requiredWidth;
    imageHeight = Math.floor(requiredWidth / imageProportion);
  }

  return {width: imageWidth, height: imageHeight};
};

export default resize;

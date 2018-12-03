const resize = (frame, image) => {
  const requiredWidth = frame.width;
  const requiredHeight = frame.height;

  let imageWidth = image.width;
  let imageHeight = image.height;
  const imageProportion = imageWidth / imageHeight;

  if (imageWidth === imageHeight) {
    let isLandscapeContainer = Boolean((requiredWidth >= requiredHeight));
    imageWidth = isLandscapeContainer ? Math.floor(requiredHeight * imageProportion) : requiredWidth;
    imageHeight = isLandscapeContainer ? requiredHeight : Math.floor(requiredWidth / imageProportion);
  } else {
    let isLandscapeImage = Boolean(imageWidth >= imageHeight);
    imageHeight = isLandscapeImage ? Math.floor(requiredWidth / imageProportion) : requiredHeight;
    imageWidth = isLandscapeImage ? requiredWidth : Math.floor(requiredHeight * imageProportion);
  }

  return {width: imageWidth, height: imageHeight};
};

export default resize;

import resize from './resize.js';

export default (images) => {
  let sizes = [];
  images.forEach((image) => {
    const newSizes = resize({width: image.width, height: image.height}, {width: image.naturalWidth, height: image.naturalHeight});
    sizes.push({width: newSizes.width, height: newSizes.height});
  });
  return sizes;
};

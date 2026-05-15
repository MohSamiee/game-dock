import noImage from "../assets/placeHolderImage.svg";
const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  let index = url.indexOf(target);
  if (index === -1) {
    return url;
  }
  index = index + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;

const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  const target = "media/";
  let index = url.indexOf(target);
  if (index === -1) {
    return url;
  }
  index = index + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};
export default getCroppedImageUrl;

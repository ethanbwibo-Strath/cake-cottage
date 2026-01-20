// This script finds all .jpg, .png, and .webp files in the assets folder
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    // Stores the image with its filename as the key (e.g., 'vanilla-cake')
    images[item.replace('./', '').replace(/\.(png|jpe?g|svg|webp)$/, '')] = r(item);
  });
  return images;
};

// Adjust the path to match your actual assets folder location
export const cakeImages = importAll(require.context('../assets', false, /\.(png|jpe?g|svg|webp)$/));
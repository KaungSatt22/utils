const getUserPos = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const fetchPos = async (lat, lng) => {
  const res = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );
  const { city } = await res.json();
  return city;
};

const getPos = async () => {
  const data = await getUserPos();
  const { latitude, longitude } = data.coords;
  await fetchPos(latitude, longitude);
};

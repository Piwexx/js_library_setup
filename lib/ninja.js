const ninjas = ["Kakashi", "Itachi", "Shikamaru"];

export const getRandomNinja = () => {
  return ninjas[Math.floor(Math.random() * ninjas.length)];
}
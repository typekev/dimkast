import { Firebase } from "../../";

export default function getGigs(then = gigsList => []) {
  const db = Firebase.firestore();
  db.settings({
    timestampsInSnapshots: true
  });
  const gigsRef = db.collection("gigs");
  gigsRef
    .get()
    .then(querySnapshot => {
      let gigsListPromiseWatcher = [];
      let gigsList = [];
      querySnapshot.forEach(gig => {
        const gigData = gig.data();
        gigsListPromiseWatcher.push(gigData);
        gigsList.push({ id: gig.id, ...gigData });
      });
      Promise.all(gigsListPromiseWatcher).then(() => {
        then(gigsList);
      });
    })
    .catch(error => {
      console.error("Error getting gigs", error);
    });
}

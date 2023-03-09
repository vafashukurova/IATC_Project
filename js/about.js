import {
  db,
  set,
  ref,
  onValue,
  push,
  child,
  update,
  remove,
} from "./module.js";

//get page data
onValue(ref(db, "about"), (snapshot) => {
  $("#course").empty();
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    $(".about-item").append(`
      <h3 class="about-title"> ${childData.name}</h3>
      <p class="about-text">${childData.textarea}</p>
        `);
    $(".about-img").append(`
        <img src="${childData.ImgUrl}" alt="About_image">
        `);
  });
});

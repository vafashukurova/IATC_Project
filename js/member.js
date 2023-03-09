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
onValue(ref(db, "members"), (snapshot) => {
  $("#card-content").empty();
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    $("#content").append(`
                           <div  class="swiper-slide card cardTeachers">
                                <div  class="card-content">
                                <div class="image">
                                <img src="${childData.ImgUrl}" alt="">
                            </div>
                          
                            <div class="name-profession">
                                <span class="name">${childData.name}</span>
                                <span class="surName">${childData.surname}</span>
                                <span class="profession">${childData.position}</span>
                            </div>
                          
                            <div class="media-icons">
                            <a href="${childData.facebookLink}"><i class="fab fa-facebook"></i></a>
                            <a href="${childData.twitterLink}"><i class="fab fa-twitter"></i></a>
                            <a href="${childData.linkedinLink}"><i class="fab fa-linkedin"></i></a> 
                            </div>
                                </div>
                            </div>
      
        `);
  });
});

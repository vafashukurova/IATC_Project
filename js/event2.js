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
    onValue(ref(db, "events/-MvoYCTZyVaZ2O7_6b2X"), (snapshot) => {
        $(".event-cards").empty();

        $(".event-blog").append(`
        <div><img src="${snapshot.val().ImgUrl}" alt="IATC"></div>
        <div class="event-blog-article">
            <h3>${snapshot.val().title}</h3>
            <p>${snapshot.val().textarea}</p>
        </div>
           ` )
        // snapshot.forEach((childSnapshot) => {
        //   const childKey = childSnapshot.key;
        //   const childData = childSnapshot.val();
         
        // });
      });
     
  

 
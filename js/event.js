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
onValue(ref(db, "events"), (snapshot) => {
    $(".event-cards").empty();
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      $(".event-cards").append(`
      <div class="event-card" data-id="${childKey}">
          <div class="face face1" style="height:280px; width: 400px">
              <div class="content">
                  <div class="icon">
                      <span> <img src="${childData.ImgUrl}"
                              alt=""></span>
                  </div>
              </div>
          </div>
          <div class="face face2" style="height:110px; width: 400px">
              <div class="content">
                  <h3>
                  ${childData.title}
                  </h3>
                  <a href="${childData.url}" class="event-btn" >Ətraflı</a>
              </div>
          </div>
        `);
        
    });
  });
 

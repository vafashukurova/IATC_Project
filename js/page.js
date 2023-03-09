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

  onValue(ref(db, "pages"), (snapshot) => {
    $(".nav-links").empty();
    snapshot.forEach((childSnapshot) => {
      const childData = childSnapshot.val();

      if(childData.visible){
          $(".nav-links").append(`
                     <li><a href="${childData.url}">${childData.page}</a></li>
      `);
      }
    });
    // $(".nav-links").append(`
    //   <li class="login-btn"><a href="/index.html#course-section">Qeydiyyatdan keç</a></li>
    // `);
  });
  

  
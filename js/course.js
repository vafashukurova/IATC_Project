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
onValue(ref(db, "course"), (snapshot) => {
    $("#course").empty();
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      $("#course").append(`
             <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 course-item">
             <div class="row-1">
              <div class="row">
                  <div class="col-lg-6 col-md-6">
                      <span  class="course-img"><img src="${childData.ImgUrl}"></span>
                  </div>
                  <div class="col-lg-6 col-md-6 course-text">
                      <h5>${childData.name}</h5>
                      <span>Müəllim:</span>
                      <h6>${childData.teacher}</h6>
                      <ul>
                          <li><i class="fas fa-desktop"></i>${childData.duration}</li>
                          <li><i class="far fa-user"></i>${childData.student} tələbə</li>
                      </ul>
                      <div class="course-btn"> <a href="course1.html">Ətraflı</a></div>
                  </div>
              </div>
           </div>
        `);
    });
  });
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
onValue(ref(db, "course/-MvoR1FTZxk9bVVitOnP"), (snapshot) => {
    $("#courseContent").empty();
    
      $("#courseContent").append(`
      <div class="col-lg-4 col-md-12">
      <div class="course-info-img"> <a href="">
              <img src="${snapshot.val().ImgUrl}" alt="">
          </a>
      </div>
  </div>
  <div class="col-lg-8 col-md-12 course-info">
      <h3>${snapshot.val().name}</h3>
      <ul>
          <li><i class="far fa-calendar"></i></i>${snapshot.val().duration} </li>
          <li><i class="far fa-user"></i>${snapshot.val().student} tələbə</li>
      </ul>
      <p>
      ${snapshot.val().courseContent}
      </p>
  </div>
        `);
        $("#generalContent").append(`
            ${snapshot.val().information}
          `);
    });
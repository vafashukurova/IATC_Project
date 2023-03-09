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
  onValue(ref(db, "contact"), (snapshot) => {
    $('#adress').empty();
    $('#mail').empty();
    $('#phone').empty();
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      console.log(childData)
      $('#contactContent').append(childData.textarea)
      $('#adress').append(childData.address);
      $('#mail').append(childData.email);
      $('#phone').append(childData.phone);
    });
  });
  

  
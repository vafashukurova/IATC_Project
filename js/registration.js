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
  

 $(".register-form").on('click','#sendRegister',function(e){
    e.preventDefault();
    var program = $('.form-group input[name="program"]').val();
    var name = $('.form-group input[name="name"]').val();
    var phone = $('.form-group input[name="phone"]').val();
    var email = $('.form-group input[name="mail"]').val();
    var content = $("#content").val();
    
    if(program && name && phone && email && content){
      const userId = push(child(ref(db), "registration")).key;
      var branch = ref(db, "registration/" + userId);
      set(branch, {
        program,
        name,
        email,
        phone,
        content
      });
      $(".form-group input").val("");
      $("#content").val("");

    }
 })
  


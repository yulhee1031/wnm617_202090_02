



const checkSignupForm = () => {
   let username = $("#signup-username").val();
   let name = $("#signup-name").val();
   let email = $("#signup-email").val();
   let password = $("#signup-password").val();
   let passwordconfirm = $("#signup-password-confirm").val();

   console.log(username,name,email,password)

   if(password!=passwordconfirm) {
      throw "Passwords don't match";
   } else {
      query({
         type:'insert_user',
         params:[username,name,email,password]})
      .then(d=>{
         if(d.error) {
            throw d.error;
         }
         console.log(d)
         $.mobile.navigate("#signin-page");
      })
   }
}



const checkUserEditForm = () => {
   let username = $("#user-edit-username").val();
   let name = $("#user-edit-name").val();
   let phone = $("#user-edit-phone").val();
   let email = $("#user-edit-email").val();

   query({
      type:'update_user',
      params:[username,name,phone,email,sessionStorage.userId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
   })
}




const checkAnimalAddForm = () => {
   let name = $("#animal-add-name").val();
   let breed = $("#animal-add-breed").val();
   let gender = $("#animal-add-gender").val();
   let age = $("#animal-add-age").val();
   let description = $("#animal-add-description").val();


   query({
      type:'insert_animal',
      params:[sessionStorage.userId,name,breed,gender,age,description]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      console.log(d.id)

      sessionStorage.animalId = d.id;

      location.reload();
   })
}



const checkAnimalEditForm = () => {
   let name = $("#animal-edit-name").val();
   let breed = $("#animal-edit-breed").val();
   let gender = $("#animal-edit-gender").val();
   let age = $("#animal-edit-age").val();
   let description = $("#animal-edit-description").val();
   let image = $("#animal-edit-image").val();

   query({
      type:'update_animal',
      params:[name,breed,gender,age,description,image,sessionStorage.animalId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
   })
}




const checkAnimalDelete = id => {
   query({
      type:'delete_animal',
      params:[id]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   });
}




const checkLocationAddForm = () => {
   let lat = $("#location-add-lat").val();
   let lng = $("#location-add-lng").val();
   let description = $("#location-add-description").val();

   query({
      type:'insert_location',
      params:[sessionStorage.animalId,lat,lng,description]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      $("#location-add-form")[0].reset();
      window.history.go(-2);
   })
}





const checkSearchForm = async () => {
   let s = $("#list-search-input").val();
   console.log(s)

   let r = await query({type:"search_animals",params:[s,sessionStorage.userId]});

   drawAnimalList(r.result,'No results found');

   console.log(r)
}



const checkListFilter = async (d) => {
   let r = d.value=='all' ?
      await query({
         type:'animals_by_user_id',
         params:[sessionStorage.userId]
      }) :
      await query({
         type:'animal_filter',
         params:[d.field,d.value,sessionStorage.userId]
      });

   console.log(r)
   drawAnimalList(r.result,'No results found');
}





const checkUpload = file => {
   let fd = new FormData();
   fd.append("image",file);

   return fetch('data/api.php',{
      method:'POST',
      body:fd
   }).then(d=>d.json())
}

const checkUserUpload = () => {
   let upload = $("#user-upload-image").val()
   if(upload=="") return;

   query({
      type:'update_user_image',
      params:[upload,sessionStorage.userId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}
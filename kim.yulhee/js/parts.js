

const makeAnimalList = templater(o=>`
<div class="animallist-item js-animal-jump" data-id="${o.id}">
   <div class="animallist-image">
      <img src="${o.img}" alt="">
   </div>
   <div class="animallist-description">
      <div class="animallist-name">${o.name}</div>
      <div class="animallist-breed"><strong>breed</strong> ${o.breed}</div>
      <div class="animallist-gender"><strong>gender</strong> ${o.gender}</div>
      <div class="animallist-age"><strong>age</strong> ${o.age}</div>
   </div>
</div>
`);


const makeUserProfile = templater(o=>`
<div class="profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="profile-body">
	<div class="profile-name"><strong>${o.name}</strong></div>
    <div class="profile-phone">${o.phone}</div> 
    <div class="profile-email">${o.email}</div>
    <div class="profile-location">${o.location}</div>
</div>
`);



const makeAnimalProfile = templater(o=>`
<div class="profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="profile-body">
   <div class="profile-name">${o.name}</div>
   <div class="profile-breed"><strong>Breed</strong>: ${o.breed}</div>
</div>
`);


const makeAnimalPopup = o=>`
<div class="display-flex">
<div>
   <img src="${o.img}" alt="" style="width:100px;height:100px">
</div>
<div>
   <div class="profile-name">${o.name}</div>
   <div><strong>Breed</strong>: ${o.breed}</div>
    <div><strong>Gender</strong>: ${o.gender}</div>
     <div><strong>Age</strong>: ${o.age}</div>
</div>
</div>
<div>
<a href="#" class="form-button js-animal-jump" data-id="${o.animal_id}">Visit</a> 
</div>
`;



const FormControl = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
      <input id="${namespace}-${name}" type="${type}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
   </div>`;
}


const makeAnimalProfileUpdateForm = o => `
${FormControl({
   namespace:"animal-edit",
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type An Animal Name",
   value:o.name
})}
${FormControl({
   namespace:"animal-edit",
   name:"breed",
   displayname:"Breed",
   type:"text",
   placeholder:"Type Animal Breed",
   value:o.breed
})}
${FormControl({
   namespace:"animal-edit",
   name:"gender",
   displayname:"Gender",
   type:"text",
   placeholder:"Choose An Animal Gender",
   value:o.gender
})}
${FormControl({
   namespace:"animal-edit",
   name:"age",
   displayname:"Age",
   type:"text",
   placeholder:"Choose An Animal Age",
   value:o.age
})}
`;


const makeUserProfileUpdateForm = o => `
${FormControl({
   namespace:"user-edit",
   name:"username",
   displayname:"Username",
   type:"text",
   placeholder:"Type Your Username",
   value:o.username
})}
${FormControl({
   namespace:"user-edit",
   name:"name",
   displayname:"Full Name",
   type:"text",
   placeholder:"Type Your Full Name",
   value:o.name
})}
${FormControl({
   namespace:"user-edit",
   name:"email",
   displayname:"Email",
   type:"text",
   placeholder:"Type Your Email",
   value:o.email
})}
`;
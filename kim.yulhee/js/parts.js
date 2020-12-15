
const drawAnimalList = (a,empty_phrase='Hello, please add an animal.') => {
   $("#list-page .animallist")
      .html(a && 
         a.length?makeAnimalList(a):empty_phrase);
}

const highlistAnimalFilter = (d) => {
  $('.filter').css('color', 'grey');
  $('[data-value="' + d + '"]').css('color', 'black');
}

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
   <div class="floater right bottom">
      <a href="#user-upload-page">Edit Image</a>
   </div>
</div>
<div class="profile-body">
   <div class="user-image">
     <img src="${o.img}" alt="">
   </div>
	<div class="profile-name"><strong>${o.name}</strong></div>
   <div class="profile-phone">${o.phone}</div> 
   <div class="profile-email">${o.email}</div>
</div>
`);



const makeAnimalProfile = templater(o=>`
<div class="dog-image">
   <img src="${o.img}" alt="">
</div>
<ul class="dog-profile-list">
   <li class="dog-profile-item">Name: ${o.name}</li>
   <li class="dog-profile-item">Breed: ${o.breed}</li>
   <li class="dog-profile-item">Gender: ${o.gender}</li>
   <li class="dog-profile-item">Age: ${o.age}</li>
   <li class="dog-profile-item">Description: ${o.description}</li>
</ul>
<div class="dog-profile-delete">
   <a href="#" class="js-animal-delete" data-id="${o.id}">Delete</a>
</div>
`);


const makeAnimalPopup = o=>`
<div class="display-flex">
<div>
   <img src="${o.img}" alt="" style="width:100px;height:100px;padding:7px">
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


const makeAnimalEditForm = o => `
<div>
   <input type="hidden" id="animal-edit-image" value="${o.img}">
   <label class="image-uploader thumbnail picked" style="background-image:url('${o.img}');margin:0 auto;width:150px;height:150px;">
      <input type="file" data-role="none" id="animal-edit-upload">
   </label>
</div>
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
   placeholder:"Type Animal Gender",
   value:o.gender
})}
${FormControl({
   namespace:"animal-edit",
   name:"age",
   displayname:"Age",
   type:"text",
   placeholder:"Type Animal Age",
   value:o.age
})}
${FormControl({
   namespace:"animal-edit",
   name:"description",
   displayname:"Description",
   type:"text",
   placeholder:"Choose An Animal Description",
   value:o.description
})}
`;


const makeUserEditForm = o => `
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
${FormControl({
   namespace:"user-edit",
   name:"phone",
   displayname:"Phone Number",
   type:"text",
   placeholder:"Type Your Phone Number",
   value:o.phone
})}
`;





const filterList = (animals,type) => {
   let a = [...(new Set(animals.map(o=>o[type])))];
   return templater(o=>`<div class="filter" data-field="${type}" data-value="${o}" style="color:grey">${o[0].toUpperCase()+o.substr(1)}</div> |`)(a);
}

const makeFilterList = (animals) => {
   return `
   <div class="filter" data-field="type" data-value="all" style="color:black">All</div> | 
   ${filterList(animals,'breed')} 
   `;
}






const makeUploaderImage = (el,name,folder='') => {
   console.log(el,name)
   $(el).parent().css({'background-image':`url('${folder+name}')`})
      .prev().val(folder+name)
}
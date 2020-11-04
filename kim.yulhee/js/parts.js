

const makeAnimalList = templater(o=>`
<div class="animallist-item js-animal-jump" data-id="${o.id}">
   <div class="animallist-image">
      <img src="${o.img}" alt="">
   </div>
   <div class="animallist-description">
      <div class="animallist-name">${o.name}</div>
      <div class="animallist-breed"><strong>breed</strong> ${o.breed}</div>
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
<p><a href="#settings-page">Settings</a></p>
`)



const makeAnimalProfile = templater(o=>`
<div class="profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="profile-body">
   <div class="profile-name">${o.name}</div>
   <div class="profile-breed"><strong>Breed</strong>: ${o.breed}</div>
</div>
`);
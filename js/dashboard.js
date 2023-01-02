const currentEmail = JSON.parse(localStorage.getItem('userlogin'))
const localData=JSON.parse(localStorage.getItem('users'))
const userName = document.querySelector('.userName')
const email = document.querySelector('.email')  
const userInputImg = document.querySelector('.user-image')
const userImg = document.querySelector('.img')
let index=localData.findIndex((user)=>{
    console.log(currentEmail, user.email)
    return currentEmail== user.email
})
console.log(localData)
userName.innerHTML = localData[index].firstname
email.innerHTML = localData[index].email
setImage()
function getAlluser(){
   
  let local = [ ...localData.slice(0, index), ... localData.slice(index+1,localData.length)]
     local.map(user=>{
        let tempelate= `
        
        <div class="d-flex">
        
        <img
          src=${user.userimg?user.userimg:"../asset/img_avatar.png"}
          class="rounded-circle object-fit mt-3"
          width="50px"
          height="50px"
          alt="..."
        />
        <p class="ms-3 mt-auto">${user.firstname} </p>
      </div>`
        document.querySelector('.user').insertAdjacentHTML('afterbegin', tempelate) 
    })   
}
getAlluser()

function setImage(){
    if(localData[index].userimg){
userImg.src = localData[index].userimg
    }
}

userInputImg.addEventListener('change', function(){
const reader = new FileReader()
reader.addEventListener('load', () => {
    let image = reader.result
    if(localData[index].userimg){

        localData[index] = image
        localData[index] = {userimg: image, ...localData[index]}
        localStorage.setItem('users', JSON.stringify(localData))
    }else{
        localData[index] = {userimg: image, ...localData[index]}
        localStorage.setItem('users', JSON.stringify(localData))
    }
    
    setImage()
})
reader.readAsDataURL(this.files[0])
})



const form=document.getElementById('todo');
	const input=document.getElementById('input_task');
	const item=document.getElementById('list');

	form.addEventListener('submit' , function(event){
    event.preventDefault()
    console.log(input.value)

    const thing=document.createElement('li');
    thing.innerHTML=`<li>
    <p> ${input.value} </p>
    <button>x</button></li>`

    item.appendChild(thing)
    input.value=''
	})
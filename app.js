  const arr =[
   {
    name: "Cherise G",
    photoUrl: "https://plus.unsplash.com/premium_photo-1675626492183-865d6d8e2e8a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "apple makes me more productive and gets the job done in a fraction of the time. I'm glad I found apple."
   },
   {
    name: "Wherise J",
    photoUrl: "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "I would recommend apple for anyone trying to get the word out about their business. It has saved me so much time!"
   },
   {
    name: "Therise B",
    photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "If you are a business owner, and you don't have apple in your toolkit just yet, I highly recommend that you check it out."
   }
]

const imgEle = document.querySelector(".img")
const textEle = document.querySelector(".text")
const nameEle = document.querySelector(".username")

let ind = 0;
updatSlider()
function updatSlider() {
    const {name,photoUrl,text} = arr[ind];

    imgEle.src = photoUrl;
    textEle.innerHTML = text;
    nameEle.innerHTML = name;
    ind++
    if (ind == arr.length) {
        ind=0
    }
     setTimeout(() => {
        updatSlider()
     },2000);
}
const btn = document.getElementById("btn");
const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F3', '#33FFF3'];

btn.addEventListener('click', ()=>{
    const randomIndex = Math.floor(Math.random()*colors.length);

    btn.style.backgroundColor = colors[randomIndex];
})
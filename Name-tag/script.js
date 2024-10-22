let wrapper=document.getElementsByClassName("wrapper")[0];
let template=document.getElementsByTagName("template")[0];


let names=["pavan","kumar","arravali"];
let colors = [
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#008080", // Teal (Replaced White)
    "#000000", // Black
    "#FFA500", // Orange
    "#800080", // Purple
    "#FFC0CB", // Pink
    "#808080", // Gray
    "#A52A2A", // Brown
    "#FFD700", // Gold
    "#008000", // Dark Green
    "#000080", // Navy
    "#800000", // Maroon
    "#FFFFE0", // Light Yellow
    "#F0E68C", // Khaki
    "#E6E6FA", // Lavender
    "#DDA0DD", // Plum
    "#B0C4DE", // Light Steel Blue
    "#20B2AA", // Light Sea Green
    "#FF4500", // Orange Red
    "#DA70D6", // Orchid
    "#B22222", // Fire Brick
    "#5F9EA0", // Cadet Blue
    "#FF69B4", // Hot Pink
    "#8B0000"  // Dark Red
];



let sticker=function(name){

    let div=template.content.querySelector("div");
    let nameOfStick=div.querySelector(".name")

    nameOfStick.innerHTML=name;
   div.style.background=colors[Math.floor(Math.random()*colors.length)];
   div.style.transform="rotate("+(Math.random() * 40-20)+"deg)";
    let node=document.importNode(div,true);
    wrapper.appendChild(node);
}

setTimeout(refreshPage,1000);
function refreshPage(){
    location.reload();
}

names.forEach(sticker)
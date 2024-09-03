/*let head = document.querySelector("h1");
console.log(head.getAttribute("class"));

let paraG = document.querySelector("p");
console.log(paraG.setAttribute("class","paragraph"));

let upP = document.querySelector("p");
upP.style.backgroundColor = "blue";
upP.style.color = "white";*/

/*
if we need to modify the html directly like inserting od deleting new things in the web page.
htere are four ways.
1.after
2.before
3.append
4.prepend


*/




let newT = document.querySelector("h1");
let newHead = document.createElement("h5");
newHead.innerText = "This is DOM concept";
newHead.style.color = "green";
/*newT.append(newHead);*/
/*newT.prepend(newHead);*/
/*newT.after(newHead);*/
newT.before(newHead);






// 1. access the tag which we want and keep it in a variable.
// 2. create the elements with content.(it can be heading or image or paragraph).
// 3. adding it to the dom tree using (append , prepend, after,before).


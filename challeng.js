class Game {
    constructor(div,name, listLose, booole) {
        this.div = div;
        this.name = name;
        this.l = listLose;
        this.b = booole
    }
}

let p = new Game(document.querySelector(".papper"), "papper",  "sicssors", true);
let r = new Game(document.querySelector(".rock"), "rock", "papper", true);
let s = new Game(document.querySelector(".sicssors"), "sicssors", "rock", true);
let l = [p,r,s];
l.forEach(function (e) {
    if (e.b) {
       let f = e.div; 
        f.addEventListener("click", function () {
            let g = document.querySelector(".game");
            g.style.cssText = "opacity : 0%;";
            // let myg = g.cloneNode(true);
            // console.log(myg);
            
            let choose = l[Math.round(Math.random() * 2)];
            // console.log(choose);
            while(choose.name === e.name) {
                choose = l[Math.round(Math.random() * 2)];
            } 
            // console.log(choose); 
            let star = document.querySelector(".startgame");
            let anime = document.querySelector(".animated");
            let colon = f.cloneNode(true);
            let colon1 = choose.div.cloneNode(true);
            colon.style.cssText = "transform: scale(1.2, 1.2) translateX(50px);"
            colon1.style.cssText = "transform: scale(1.2, 1.2) translateX(-50px); animation:opacity 2s;"
            document.querySelector(".compchoose").append(colon1);
            document.querySelector(".mychose").append(colon);
            let i = 50;
            let j = -50;
            let k = 0;
            let p = document.querySelector(".mychose p");
            let pc = document.querySelector(".compchoose p");
            let rul = document.querySelector(".reasult");
            let count = setInterval(() => {
                i -= 10;
                j += 10;
                k += 20;
                colon1.style.cssText = `transform: scale(1.2, 1.2) translateX(${j}px); animation:opacity 2s;`;
                colon.style.cssText = `transform: scale(1.2, 1.2) translateX(${i}px); `;
                p.style.cssText = `opacity: ${k}%; `;
                pc.style.cssText = `opacity: ${k}%;`;
                if (i === -20 && j === 20) {
                    clearInterval(count);
                }
            }, 100);
          
            star.style.cssText = " opacity: 100%;z-index: 3;"
            let ch = "";
            // if (choose.name === e.l) {
            //     ch = "You Lose";
            //     // anime.style.cssText = "left: 53%; opacity: 0.365;";
                
            // } else {
            //     ch = "You Win";
            //     // anime.style.cssText = "right: 52%; opacity: 0.365;";
            // }

            document.querySelector(".reasult p").innerHTML = ch;
            setTimeout(() => {
                let cou = setInterval(() => {
                    i+=20;
                    rul.style.cssText = `opacity: ${i}%;`;
                    if (i === 100) {
                        clearInterval(cou);
                    }
                }, 50);
                if (choose.name === e.l) {
                    ch = "You Lose";
                    anime.style.cssText = "left: 53%; opacity: 0.365;";
                    
                } else {
                    ch = "You Win";
                    anime.style.cssText = "right: 52%; opacity: 0.365;";
                    document.querySelector(".score span").innerHTML = parseInt(document.querySelector(".score span").innerHTML) + 1;
                }
                
                document.querySelector(".reasult p").innerHTML = ch;
            }, 1000);
            rul.addEventListener("click", function() {
                colon.remove();
                colon1.remove();
                star.style.cssText = " opacity: 0%; z-index: 1;";
                rul.style.cssText = "opacity: 0%;";
                g.style.cssText = "opacity : 100%;";
                anime.style.cssText = "opacity: 0%;";

            });


        
        })
    }
});


let rule = document.querySelector(".rules");
let map = document.querySelector(".map");
rule.addEventListener("click", function() {

    map.style.cssText = " display: flex; justify-content: center; align-items: center; background-color: hsla(214, 47%, 23%, 0.3); "
});

let colose = document.querySelector(".close img");
colose.addEventListener("click", function() {
    
    map.style.cssText = "dispaly: none;"
});

            
function onClick1()
{    document.getElementsByTagName("button")[0].onclick = function() {
        var section = document.getElementById("allAritcles").getElementsByTagName("article");
        if(section[0].style.backgroundColor == "white"){
            for( i=0; i<firstName.length ; i++) {
                section[i].style.backgroundColor = "blue";
                section[i].style.color = "blue";
    
            }
        }
        else{
            for( i=0; i<firstName.length ; i++) {
                section[i].style.backgroundColor = "white";
                section[i].style.color = "white";
    
            }
        }
    }
    
}

var firstName= "Jonatan";
function initliaze(){
    var main = document.getElementsByTagName("main")[0] ;
    var articles= "";
    lastNmae = "Kobany" ,nameToghther= firstName+lastNmae;
    var section = document.createElement("section");
    section.id = "allAritcles";
    main.appendChild(section);
    for( i=0; i<(firstName.length+lastNmae.length)*2 ; i++) {
        articles += "<article></article>";
    }
    section.innerHTML= articles;

    onClick1();
    mouseOver();


}

function mouseOver(){
    var articles = document.getElementById("allAritcles").getElementsByTagName("article")[0];
    articles.onmouseover = function(){
            if(this.backgroundColor ="white"){
                document.getElementsByTagName("article")[0].innerHTML= firstName[0];
                this.style.backgroundColor = "blue";
            }
            else
                this.style.backgroundColor = "white";
        }
        articles.onmouseout = function(){
            if(this.backgroundColor ="blue"){
                document.getElementsByTagName("article")[0].innerHTML= "";
               this.style.backgroundColor = "white";   
            }
            else
            this.style.backgroundColor = "blue";
        }
    }

    



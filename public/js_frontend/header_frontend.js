$(()=>{
    let header = $("#header-navbar")[0];
    let sticky = header.offsetTop;
    let headerimgdiv=$('#header-imgdiv')[0]
    let lowernavbar = $('#lower-navbarmenu')[0]
    let uppericons=$('#upper-header-icons')[0];
    let headernavrow=$('#headernav-row')[0];


    window.fixednavbar = ()=> {
        if(window.pageYOffset > sticky ) {
            header.classList.add("sticky");
            headerimgdiv.childNodes[3].style.display="none"
            headernavrow.classList.remove("pt-4")
            headernavrow.classList.add("pt-2");
            uppericons.style.border="none";
            lowernavbar.style.display="none";
            document.getElementById('scrollingdiv').style.display="block"

        }
        else {header.classList.remove("sticky");
            headernavrow.classList.remove("pt-2")
            headernavrow.classList.add("pt-4");
            headerimgdiv.childNodes[3].style.display="block"
            if(screen.width > 1000) {
                uppericons.style.borderBottom = "1px solid whitesmoke";
                lowernavbar.style.display = "block";
            }
            document.getElementById('scrollingdiv').style.display="none"

        }
    }
    //Side Menu Open
    let sidemenu =$('.side-menusetts')[0]
    window.sidemenuopen = function() {
        if(screen.width > 1000)
        {sidemenu.style.width="350px";}
        else {
            sidemenu.style.width= "100%";
            sidemenu.style.transform= "translateX(0)";
        }
    }
    window.closesidemenu = function() {
        sidemenu.style.width="0"
        sidemenu.style.transform= "translateX(20px)";

    }
    window.onscroll=function () {
        fixednavbar()
    };
    let searcchicon = $('#searchicon-header')[0]
    window.searchbaropen =()=>{
        let headerinput = $('#headerinputbox')[0]
        if(headerinput.style.display ==="none")
        {
            headerinput.style.display = "inline-block"
        }
        else{
            headerinput.style.display ="none"
        }
    }
})
function openul(particulardiv) {
    let sidemenudiv = $(`#${particulardiv}`)[0];
    if(        sidemenudiv.childNodes[1].style.display==="block")
    {
        sidemenudiv.childNodes[1].style.display="none";
        // sidemenudiv.childNodes[0].innerHTML= `+ ${particulardiv}`;
        console.log(sidemenudiv.childNodes[0]);

    }
    else{
        sidemenudiv.childNodes[1].style.display="block";
        sidemenudiv.childNodes[0].innerHTML= `- ${particulardiv}`;

    }
}
function opensearchbar() {
    let headerinput = $('#headerinputbox')[0]
    if(headerinput.style.display ==="none")
    {
        headerinput.style.display = "inline-block"
    }
    else{
        headerinput.style.display ="none"
    }
}

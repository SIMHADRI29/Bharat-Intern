

let a= document.getElementsByClassName("FAQ__title");

for (let i = 0; i < a.length; i++)
 {


  a[i].addEventListener("click", function () 
  {


    if (this.childNodes[1].classList.contains("fa-plus"))
     {

      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");

    } 
    else
     {

      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");

    }

    let c = this.nextElementSibling;
    if (c.style.maxHeight)
     {

      c.style.maxHeight = null;

    }
     else 
    {

      c.style.maxHeight = c.scrollHeight + "px";

    }
    
  });
}
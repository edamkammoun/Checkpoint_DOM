const btnPlus=document.getElementsByClassName("plus");
for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener("click",increment)
    
};
function increment(e) {
    btn=e.target;
    const divElt=btn.parentElement
    var quantityTag = divElt.querySelector("p");
    var quantityValue = Number(quantityTag.innerHTML);
    quantityValue++;
    quantityTag.innerHTML=quantityValue;
    const tdElt=divElt.parentElement;
    const trElt=tdElt.parentElement;
    const unitPrice=parseInt(trElt.querySelector(".unitPrice").innerHTML);
    var priceTag=trElt.querySelector(".price");
    var priceValue=Number(priceTag.innerHTML);
    priceValue=quantityValue*unitPrice;
    priceTag.innerHTML=priceValue;
}

const btnMinus=document.getElementsByClassName("minus");
for (let i = 0; i < btnMinus.length; i++) {
    btnMinus[i].addEventListener("click",decrement)
    
};
function decrement(e) {
    btn=e.target;
    const divElt=btn.parentElement
    var quantityTag = divElt.querySelector("p");
    var quantityValue = Number(quantityTag.innerHTML);
    if (quantityValue>0) {
        quantityValue=quantityValue-1;
    }
        quantityTag.innerHTML=quantityValue;
        const tdElt=divElt.parentElement;
        const trElt=tdElt.parentElement;
        const unitPrice=parseInt(trElt.querySelector(".unitPrice").innerHTML);
        var priceTag=trElt.querySelector(".price");
        var priceValue=Number(priceTag.innerHTML);
        priceValue=quantityValue*unitPrice;
        priceTag.innerHTML=priceValue;
}

const iconTrash=document.getElementsByClassName("delete");
for (let i = 0; i < iconTrash.length; i++) {
    iconTrash[i].addEventListener("click",initialize)
};
function initialize(event) {
    btn=event.target;
    // console.log(btn)
    const trElt=btn.parentElement.parentElement.parentElement.parentElement;
    console.log(trElt)
    var quantityTag = trElt.querySelector("p");
    console.log(quantityTag)
    var quantityValue = Number(quantityTag.innerHTML);
    quantityValue=0;
    // console.log(quantityValue)
    quantityTag.innerHTML=quantityValue;
    const unitPrice=parseInt(trElt.querySelector(".unitPrice").innerHTML);
    var priceTag=trElt.querySelector(".price");
        var priceValue=Number(priceTag.innerHTML);
        priceValue=0;
        priceTag.innerHTML=priceValue;
    trElt.remove(0);
}

const iconLike=document.getElementsByClassName("like");
for (let i = 0; i < iconLike.length; i++) {
    iconLike[i].addEventListener("click",Like)
};
function Like(event) {
    btn=event.target;
    // console.log(btn)
    const divElt=btn.parentElement
    // console.log(divElt)
 if (divElt.style.color === divElt.style.getPropertyValue('color')) {
  divElt.style.color = 'red';
} else {
  divElt.style.color = divElt.style.getPropertyValue('color');
}

}
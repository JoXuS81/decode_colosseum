/* 

Table of Contents
    Variables
    Mouse Enter - On/Over
    Add to Cart Function

*/


// Variables
const arrowRight = document.querySelector (".arrowRight");
const blockFive = document.querySelector (".blockFive");
const blockFour = document.querySelector (".blockFour");
const blockOne = document.querySelector (".blockOne");
const blockThree = document.querySelector (".blockThree");
const blockTwo = document.querySelector (".blockTwo");
const bottomContainer = document.querySelector (".bottomContainer");
const bottomContainerFive = document.querySelector (".bottomContainerFive");
const bottomContainerFour = document.querySelector (".bottomContainerFour");
const bottomContainerOne = document.querySelector (".bottomContainerOne");
const bottomContainerThree = document.querySelector (".bottomContainerThree");
const bottomContainerTwo = document.querySelector (".bottomContainerTwo");
const Plus = document.querySelectorAll (".plus");
const triangleFive = document.querySelector (".triangleFive");
const triangleFour = document.querySelector (".triangleFour");
const triangleOne = document.querySelector (".triangleOne");
const triangleThree = document.querySelector (".triangleThree");
const triangleTwo = document.querySelector (".triangleTwo");
let cartNum = document.querySelector (".cartNum");
let cartNumValue = 1;

cartNum.innerHTML = 1;


// Click and mouse enter on/over options
$(document).ready(function() 
{
    bottomContainerFive.classList.add("bottomContainerInvisible");
    bottomContainerFour.classList.add("bottomContainerInvisible");
    bottomContainerOne.classList.add("bottomContainerVisible");
    bottomContainerThree.classList.add("bottomContainerInvisible");
    bottomContainerTwo.classList.add("bottomContainerInvisible");
    $(blockFive).on("click", function() 
    {
        $(blockFive).css("background", "#44403f");
        $(blockFive).css("cursor", "pointer");
        $(blockFour).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockOne).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockThree).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockTwo).css("background", "rgba(0, 0, 0, 0.1)");
        bottomContainerFive.classList.remove("bottomContainerInvisible");
        bottomContainerFour.classList.add("bottomContainerInvisible");
        bottomContainerFour.classList.remove("bottomContainerVisible");
        bottomContainerOne.classList.add("bottomContainerInvisible");
        bottomContainerOne.classList.remove("bottomContainerVisible");
        bottomContainerThree.classList.add("bottomContainerInvisible");
        bottomContainerThree.classList.remove("bottomContainerVisible");
        bottomContainerTwo.classList.add("bottomContainerInvisible");
        bottomContainerTwo.classList.remove("bottomContainerVisible");
        $(triangleFive).show();
        $(triangleFour).hide();
        $(triangleOne).hide();
        $(triangleThree).hide();
        $(triangleTwo).hide();
    });
    $(blockFour).on("click", function() 
    {
        $(blockFive).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockFour).css("background", "#44403f");
        $(blockFour).css("cursor", "pointer");
        $(blockOne).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockThree).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockTwo).css("background", "rgba(0, 0, 0, 0.1)");
        bottomContainerFive.classList.add("bottomContainerInvisible");
        bottomContainerFive.classList.remove("bottomContainerVisible");
        bottomContainerFour.classList.remove("bottomContainerInvisible");
        bottomContainerOne.classList.add("bottomContainerInvisible");
        bottomContainerOne.classList.remove("bottomContainerVisible");
        bottomContainerThree.classList.add("bottomContainerInvisible");
        bottomContainerThree.classList.remove("bottomContainerVisible");
        bottomContainerTwo.classList.add("bottomContainerInvisible");
        bottomContainerTwo.classList.remove("bottomContainerVisible");
        $(triangleFive).hide();
        $(triangleFour).show();
        $(triangleOne).hide();
        $(triangleThree).hide();
        $(triangleTwo).hide();
    });
    $(blockOne).on("click", function() 
    {
        $(blockFive).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockFour).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockOne).css("background", "#44403f");
        $(blockOne).css("cursor", "pointer");
        $(blockThree).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockTwo).css("background", "rgba(0, 0, 0, 0.1)");
        bottomContainerFive.classList.add("bottomContainerInvisible");
        bottomContainerFive.classList.remove("bottomContainerVisible");
        bottomContainerFour.classList.add("bottomContainerInvisible");
        bottomContainerFour.classList.remove("bottomContainerVisible");
        bottomContainerOne.classList.add("bottomContainerVisible");
        bottomContainerOne.classList.remove("bottomContainerInvisible");
        bottomContainerThree.classList.add("bottomContainerInvisible");
        bottomContainerThree.classList.remove("bottomContainerVisible");
        bottomContainerTwo.classList.add("bottomContainerInvisible");
        bottomContainerTwo.classList.remove("bottomContainerVisible");
        $(triangleFive).hide();
        $(triangleFour).hide();
        $(triangleOne).show();
        $(triangleThree).hide();
        $(triangleTwo).hide();
    });
    $(blockThree).on("click", function() 
    {
        $(blockFive).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockFour).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockOne).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockThree).css("background", "#44403f");
        $(blockThree).css("cursor", "pointer");
        $(blockTwo).css("background", "rgba(0, 0, 0, 0.1)");
        bottomContainerFive.classList.add("bottomContainerInvisible");
        bottomContainerFive.classList.remove("bottomContainerVisible");
        bottomContainerFour.classList.add("bottomContainerInvisible");
        bottomContainerFour.classList.remove("bottomContainerVisible");
        bottomContainerOne.classList.add("bottomContainerInvisible");
        bottomContainerOne.classList.remove("bottomContainerVisible");
        bottomContainerThree.classList.remove("bottomContainerInvisible");
        bottomContainerTwo.classList.add("bottomContainerInvisible");
        bottomContainerTwo.classList.remove("bottomContainerVisible");
        $(triangleFive).hide();
        $(triangleFour).hide();
        $(triangleOne).hide();
        $(triangleThree).show();
        $(triangleTwo).hide();
    });
    $(blockTwo).on("click", function() 
    {
        $(blockFive).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockFour).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockOne).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockThree).css("background", "rgba(0, 0, 0, 0.1)");
        $(blockTwo).css("background", "#44403f");
        $(blockTwo).css("cursor", "pointer");
        bottomContainerFive.classList.add("bottomContainerInvisible");
        bottomContainerFive.classList.remove("bottomContainerVisible");
        bottomContainerFour.classList.add("bottomContainerInvisible");
        bottomContainerFour.classList.remove("bottomContainerVisible");
        bottomContainerOne.classList.add("bottomContainerInvisible");
        bottomContainerOne.classList.remove("bottomContainerVisible");
        bottomContainerThree.classList.add("bottomContainerInvisible");
        bottomContainerThree.classList.remove("bottomContainerVisible");
        bottomContainerTwo.classList.remove("bottomContainerInvisible");
        $(triangleFive).hide();
        $(triangleFour).hide();
        $(triangleOne).hide();
        $(triangleThree).hide();
        $(triangleTwo).show();
    });
    $(blockFive).on("mouseenter", function() 
    {
        $(blockFive).css("cursor", "pointer");
    });
    $(blockFour).on("mouseenter", function() 
    {
        $(blockFour).css("cursor", "pointer");
    });
    $(blockOne).on("mouseenter", function() 
    {
        $(blockOne).css("cursor", "pointer");
    });
    $(blockThree).on("mouseenter", function() 
    {
        $(blockThree).css("cursor", "pointer");
    });
    $(blockTwo).on("mouseenter", function() 
    {
        $(blockTwo).css("cursor", "pointer");
    });
}); 


// Add to Cart Function
/*$(document).ready(function addToCart() 
{
    $(Plus).on("click", function() 
    {
        cartNum.innerHTML = cartNumValue++;
    });
}); */
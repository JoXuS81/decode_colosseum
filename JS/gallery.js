/* 

Table of Contents
    Variables
    Function - Small Screens, Touch
    Function - Gallery Hover

*/


// Variables
const hoverAreaEight = document.querySelector (".hoverAreaEight");
const hoverAreaFive = document.querySelector (".hoverAreaFive");
const hoverAreaFour = document.querySelector (".hoverAreaFour");
const hoverAreaNine = document.querySelector (".hoverAreaNine");
const hoverAreaOne = document.querySelector (".hoverAreaOne");
const hoverAreaSeven = document.querySelector (".hoverAreaSeven");
const hoverAreaSix = document.querySelector (".hoverAreaSix");
const hoverAreaThree = document.querySelector (".hoverAreaThree");
const hoverAreaTwo = document.querySelector (".hoverAreaTwo");
const imgPlaceEight = document.querySelector (".imgPlaceEight");
const imgPlaceFive = document.querySelector (".imgPlaceFive");
const imgPlaceFour = document.querySelector (".imgPlaceFour");
const imgPlaceNine = document.querySelector (".imgPlaceNine");
const imgPlaceOne = document.querySelector (".imgPlaceOne");
const imgPlaceSeven = document.querySelector (".imgPlaceSeven");
const imgPlaceSix = document.querySelector (".imgPlaceSix");
const imgPlaceThree = document.querySelector (".imgPlaceThree");
const imgPlaceTwo = document.querySelector (".imgPlaceTwo");
const smallScreens = window.matchMedia('(max-width:1400px)');


// Function - Small Screens, Touch
window.addEventListener('click', function(e)
{   
    if(smallScreens.matches)
    {
        if (document.getElementById('clickImgEight').contains(e.target))
        {
            hoverAreaEight.classList.remove("galleryNoHover");
        } 
        else
        {
            hoverAreaEight.classList.add("galleryNoHover");
        }
        if (document.getElementById('clickImgFive').contains(e.target))
        {
            hoverAreaFive.classList.remove("galleryNoHover");
        } 
        else
        {
            hoverAreaFive.classList.add("galleryNoHover");
        }
        if (document.getElementById('clickImgFour').contains(e.target))
        {
            hoverAreaFour.classList.remove("galleryNoHover");
        } 
        else
        {
            hoverAreaFour.classList.add("galleryNoHover");
        }
        if (document.getElementById('clickImgNine').contains(e.target))
        {
            hoverAreaNine.classList.remove("galleryNoHover");
        } 
        else
        {
            hoverAreaNine.classList.add("galleryNoHover");
        }
        if (document.getElementById('clickImgOne').contains(e.target))
        {
            hoverAreaOne.classList.remove("galleryNoHover");
        } 
        else
        {
            hoverAreaOne.classList.add("galleryNoHover");
        }
        if (document.getElementById('clickImgSeven').contains(e.target))
        {
            hoverAreaSeven.classList.remove("galleryNoHover");
        } 
        else
        {
            hoverAreaSeven.classList.add("galleryNoHover");
        }
        if (document.getElementById('clickImgSix').contains(e.target))
        {
            hoverAreaSix.classList.remove("galleryNoHover");
        } 
        else
        {
            hoverAreaSix.classList.add("galleryNoHover");
        }
        if (document.getElementById('clickImgThree').contains(e.target))
        {
            hoverAreaThree.classList.remove("galleryNoHover");
        } 
        else
        {
            hoverAreaThree.classList.add("galleryNoHover");
        }
        if (document.getElementById('clickImgTwo').contains(e.target))
        {
            hoverAreaTwo.classList.remove("galleryNoHover");
        } 
        else
        {
            hoverAreaTwo.classList.add("galleryNoHover");
        }
    }
});


// Function - Gallery Hover
$(document).ready(function galleryHover() 
{
    hoverAreaEight.classList.add("galleryNoHover");
    hoverAreaFive.classList.add("galleryNoHover");
    hoverAreaFour.classList.add("galleryNoHover");
    hoverAreaNine.classList.add("galleryNoHover");
    hoverAreaOne.classList.add("galleryNoHover");
    hoverAreaSeven.classList.add("galleryNoHover");
    hoverAreaSix.classList.add("galleryNoHover");
    hoverAreaThree.classList.add("galleryNoHover");
    hoverAreaTwo.classList.add("galleryNoHover");
    $(imgPlaceEight).mouseenter(function()
    {
        hoverAreaEight.classList.remove("galleryNoHover");
    });
    $(imgPlaceEight).mouseleave(function()
    {
        hoverAreaEight.classList.add("galleryNoHover");
    });
    $(imgPlaceFive).mouseenter(function()
    {
        hoverAreaFive.classList.remove("galleryNoHover");
    });
    $(imgPlaceFive).mouseleave(function()
    {
        hoverAreaFive.classList.add("galleryNoHover");
    });
    $(imgPlaceFour).mouseenter(function()
    {
        hoverAreaFour.classList.remove("galleryNoHover");
    });
    $(imgPlaceFour).mouseleave(function()
    {
        hoverAreaFour.classList.add("galleryNoHover");
    });
    $(imgPlaceNine).mouseenter(function()
    {
        hoverAreaNine.classList.remove("galleryNoHover");
    });
    $(imgPlaceNine).mouseleave(function()
    {
        hoverAreaNine.classList.add("galleryNoHover");
    });
    $(imgPlaceOne).mouseenter(function()
    {
        hoverAreaOne.classList.remove("galleryNoHover");
    });
    $(imgPlaceOne).mouseleave(function()
    {
        hoverAreaOne.classList.add("galleryNoHover");
    });
    $(imgPlaceSeven).mouseenter(function()
    {
        hoverAreaSeven.classList.remove("galleryNoHover");
    });
    $(imgPlaceSeven).mouseleave(function()
    {
        hoverAreaSeven.classList.add("galleryNoHover");
    });
    $(imgPlaceSix).mouseenter(function()
    {
        hoverAreaSix.classList.remove("galleryNoHover");
    });
    $(imgPlaceSix).mouseleave(function()
    {
        hoverAreaSix.classList.add("galleryNoHover");
    });
    $(imgPlaceThree).mouseenter(function()
    {
        hoverAreaThree.classList.remove("galleryNoHover");
    });
    $(imgPlaceThree).mouseleave(function()
    {
        hoverAreaThree.classList.add("galleryNoHover");
    });
    $(imgPlaceTwo).mouseenter(function()
    {
        hoverAreaTwo.classList.remove("galleryNoHover");
    });
    $(imgPlaceTwo).mouseleave(function()
    {
        hoverAreaTwo.classList.add("galleryNoHover");
    });
});
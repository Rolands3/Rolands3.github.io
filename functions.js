function saveLightingMode(mode) 
{ 
  localStorage.setItem("mode", mode);
}

function setLightingMode(mode)
{
  var allElements = document.querySelectorAll("*");

  if(mode == 'light')
  {
    
  }
  else
  {
    
  }
}

function show(container)
{
  container.style.display = "flex";
}

function hide(container)
{
  container.style.display = "none";
}

function showContainer(container)
{
  var allContainers = document.getElementsByClassName('container');

  for(let i = 0; i < allContainers.length; i++)
  {
    hide(allContainers[i]);
  }
  var selectedContainer = document.getElementById(container);

  if(selectedContainer !== null)
  {
    show(selectedContainer); 
  }
}
/*
window.onload = function() {
  var savedMode = localStorage.getItem("mode");
  if (savedMode) {
    setLightingMode(savedMode);
  } else {
    setLightingMode('light');
  }
};
*/
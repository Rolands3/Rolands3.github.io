function setLightMode()
{

}

function setDarkMode()
{ 
  
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
    window.scrollTo(0, 0);
    show(selectedContainer);
    localStorage.setItem('container', container);
  }
}

document.getElementById('theme_icon').addEventListener('click', function() 
{
  const icon = document.getElementById('theme_icon');
  
  if (icon.classList.contains('dark-mode')) 
  {
    icon.classList.remove('dark-mode');
    icon.innerHTML = '<svg fill="none" height="24" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n\
                        <circle cx="12" cy="12" r="5"/>\n\
                        <line x1="12" x2="12" y1="1" y2="3"/>\n\
                        <line x1="12" x2="12" y1="21" y2="23"/>\n\
                        <line x1="4.22" x2="5.64" y1="4.22" y2="5.64"/>\n\
                        <line x1="18.36" x2="19.78" y1="18.36" y2="19.78"/>\n\
                        <line x1="1" x2="3" y1="12" y2="12"/>\n\
                        <line x1="21" x2="23" y1="12" y2="12"/>\n\
                        <line x1="4.22" x2="5.64" y1="19.78" y2="18.36"/>\n\
                        <line x1="18.36" x2="19.78" y1="5.64" y2="4.22"/>\n\
                      </svg>';
    setDarkMode();
    localStorage.setItem('mode', 'dark-mode');
  } 
  else 
  {
    icon.classList.add('dark-mode');
    icon.innerHTML = '<svg fill="none" stroke="#FFFFFF" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n\
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>\n\
                      </svg>';
    setLightMode();
    localStorage.setItem('mode', 'light-mode');    
  }
});

window.onload = function() 
{ 
  var savedMode = localStorage.getItem('mode');
  var savedContainer = localStorage.getItem('container');

  if (savedMode == 'light-mode') 
  {
    setLightMode();
  } 
  else 
  {
    setDarkMode();
  }

  if(savedContainer != null)
  {
    showContainer(savedContainer);
  }
};

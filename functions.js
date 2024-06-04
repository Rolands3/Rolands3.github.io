function setLightMode()
{
  document.body.style.backgroundColor = "#91867a";

  // Text color
  document.body.style.color = "white";

  // Navbar color
  document.getElementById("navbar").style.backgroundColor = "#0F1D40";
  
  var navItems = document.querySelectorAll("#navbar li:not(:last-child)");
  navItems.forEach(function(item) {
      item.style.borderRight = "1px solid white";
  });

  var navLinks = document.querySelectorAll("#navbar li a");
    navLinks.forEach(function(link) {
      link.style.color = "white";
  });

  //Title image
  var mainPictureOverlay = document.querySelectorAll(".main_picture_overlay");
  mainPictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  });

  //Main choices
  var pictureOverlay = document.querySelectorAll("#home_page_choices .image_overlay");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  });

  //Map page
  var pictureOverlay = document.querySelectorAll("#map_page_image .image_overlay");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
  });

  
  var pictures = document.querySelectorAll("#destinations_page .destination_image");
  pictures.forEach(function(picture) {
    picture.addEventListener("mouseover", function() {
      var overlay = picture.querySelector(".image_overlay");
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    });

    picture.addEventListener("mouseout", function() {
      var overlay = picture.querySelector(".image_overlay");
      overlay.style.backgroundColor = "";
    });
  });
  
  // Object pages
  var pictureOverlay = document.querySelectorAll("#baldone_page .odd");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "rgb(45, 49, 66)";
  });

  var pictureOverlay = document.querySelectorAll("#kekava_page .odd");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "rgb(45, 49, 66)";
  });

  var pictureOverlay = document.querySelectorAll("#objects_between_page .odd");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "rgb(45, 49, 66)";
  });

  var pictureOverlay = document.querySelectorAll("#riga_page .odd");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "rgb(45, 49, 66)";
  });

  //Sidebar
  document.getElementById("sidebar_links").style.backgroundColor = "#0F1D40";
  var navItems = document.querySelectorAll("#sidebar_list li");
  navItems.forEach(function(item) {
      item.style.borderBottom = "1px solid white";
  });

  var navLinks = document.querySelectorAll("#sidebar_list li a");
    navLinks.forEach(function(link) {
      link.style.color = "white";
  });
}

function setDarkMode()
{ 
  document.body.style.backgroundColor = "#F5EFEF";

  // Text color
  document.body.style.color = "black";

  // Navbar color
  document.getElementById("navbar").style.backgroundColor = "#5C7EB7";
  var navItems = document.querySelectorAll("#navbar li:not(:last-child)");
  navItems.forEach(function(item) {
      item.style.borderRight = "1px solid black";
  });

  var navLinks = document.querySelectorAll("#navbar li a");
    navLinks.forEach(function(link) {
      link.style.color = "black";
  });

  //Title image
  var mainPictureOverlay = document.querySelectorAll(".main_picture_overlay");
  mainPictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "rgba(0, 0, 0, 0)";
  });

  //Main choices
  var pictureOverlay = document.querySelectorAll(".image_overlay");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "rgba(0, 0, 0, 0)";
  });

  // Map page
  var pictureOverlay = document.querySelectorAll("#map_page_image .image_overlay");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "rgba(0, 0, 0, 0)";
  });

  var pictures = document.querySelectorAll("#destinations_page .destination_image");
  pictures.forEach(function(picture) {
    picture.addEventListener("mouseover", function() {
      var overlay = picture.querySelector(".image_overlay");
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    });

    picture.addEventListener("mouseout", function() {
      var overlay = picture.querySelector(".image_overlay");
      overlay.style.backgroundColor = "";
    });
  });

  // Object pages
  var pictureOverlay = document.querySelectorAll("#baldone_page .odd");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "#74A2F1";
  });

  var pictureOverlay = document.querySelectorAll("#kekava_page .odd");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "#74A2F1";
  });

  var pictureOverlay = document.querySelectorAll("#objects_between_page .odd");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "#74A2F1";
  });

  var pictureOverlay = document.querySelectorAll("#riga_page .odd");
  pictureOverlay.forEach(function(picture) {
    picture.style.backgroundColor = "#74A2F1";
  });

  //Sidebar
  document.getElementById("sidebar_links").style.backgroundColor = "#5C7EB7";
  var navItems = document.querySelectorAll("#sidebar_list li");
  navItems.forEach(function(item) {
      item.style.borderBottom = "1px solid black";
  });

  var navLinks = document.querySelectorAll("#sidebar_list li a");
    navLinks.forEach(function(link) {
      link.style.color = "black";
  });

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
    sessionStorage.setItem('container', container);
  }
}

function toggleSidebar() 
{
  var icon = document.getElementById("sidebar_icon");
  var sidebar_list = document.getElementById("sidebar_list");
  var mode = sessionStorage.getItem('mode');


  if (sidebar_list.style.display === "flex") 
  {

    if(mode == "light-mode")
    {
      icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" fill="#FFFFFF" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg>';
    }
    else
    {
      icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg>';
    }
    
    sidebar_list.style.display = "none";
  } 
  else 
  {
    if(mode == "light-mode")
    {
      icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" fill="#FFFFFF" viewBox="0 0 384 512" width="24" height="24">\n\
                          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>\n\
                        </svg>';
    }
    else
    {
      icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" stroke="#000" fill="#000" viewBox="0 0 384 512" width="24" height="24">\n\
                          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>\n\
                        </svg>'; 
    }

    sidebar_list.style.display = "flex";
  }
}

document.getElementById('sidebar_theme_icon').addEventListener('click', function() 
{
  const icon = document.getElementById('theme_icon');
  const sidebar_icon = document.getElementById('sidebar_theme_icon');
  const cross_icon = document.getElementById("sidebar_icon");
  
  if (sidebar_icon.classList.contains('dark-mode')) 
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

    sidebar_icon.classList.remove('dark-mode');
    sidebar_icon.innerHTML = '<svg fill="none" height="24" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n\
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
    cross_icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="24" height="24">\n\
                              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>\n\
                            </svg>';
    setDarkMode();
    sessionStorage.setItem('mode', 'dark-mode');
  } 
  else 
  {
    icon.classList.add('dark-mode');
    icon.innerHTML = '<svg fill="none" stroke="#FFFFFF" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n\
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>\n\
                      </svg>';

    sidebar_icon.classList.add('dark-mode');
    sidebar_icon.innerHTML = '<svg fill="none" stroke="#FFFFFF" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n\
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>\n\
                      </svg>';
    cross_icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" fill="#FFFFFF" viewBox="0 0 384 512" width="24" height="24">\n\
                              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>\n\
                            </svg>';
    setLightMode();
    sessionStorage.setItem('mode', 'light-mode');    
  }
});

document.getElementById('theme_icon').addEventListener('click', function() 
{
  const icon = document.getElementById('theme_icon');
  const sidebar_icon = document.getElementById('sidebar_theme_icon');
  const cross_icon = document.getElementById("sidebar_icon");

  if (icon.classList.contains('dark-mode')) 
  {
    sidebar_icon.classList.remove('dark-mode');
    sidebar_icon.innerHTML = '<svg fill="none" height="24" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n\
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
    // this wrong
    cross_icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" stroke="#000" fill="#000" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg>';

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
    sessionStorage.setItem('mode', 'dark-mode');
  } 
  else 
  {
    sidebar_icon.classList.add('dark-mode');
    sidebar_icon.innerHTML = '<svg fill="none" stroke="#FFFFFF" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n\
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>\n\
                      </svg>';
    cross_icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" fill="#FFFFFF" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg>';

    icon.classList.add('dark-mode');
    icon.innerHTML = '<svg fill="none" stroke="#FFFFFF" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n\
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>\n\
                      </svg>';
    setLightMode();
    sessionStorage.setItem('mode', 'light-mode');    
  }
});

window.onload = function() 
{ 
  var savedMode = sessionStorage.getItem('mode');
  var savedContainer = sessionStorage.getItem('container');
  
  const icon = document.getElementById('theme_icon');
  const sidebar_icon = document.getElementById("sidebar_icon");
  const sidebar_theme_icon = document.getElementById("sidebar_theme_icon");

  if (savedMode == 'light-mode') 
  {
    icon.classList.add('dark-mode');
    setLightMode();
    icon.innerHTML = '<svg fill="none" stroke="#FFFFFF" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n\
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>\n\
                      </svg>';
    sidebar_theme_icon.innerHTML = '<svg fill="none" stroke="#FFFFFF" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n\
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>\n\
                      </svg>';
    sidebar_icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" fill="#FFFFFF" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg>';

  } 
  else 
  {
    setDarkMode();
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
    sidebar_icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" stroke="#000" fill="#000" x="0px" y="0px" width="24" height="24" viewBox="0 0 50 50"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path></svg>';
  }

  if(savedContainer != null)
  {
    showContainer(savedContainer);
  }
};
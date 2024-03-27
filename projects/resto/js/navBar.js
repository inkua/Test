const button = document.getElementById("buttonToggle");
const containerNavbarMenu = document.querySelector(
  ".containerNavbarMenu"
);

let toggle = false;
button.addEventListener("click", function () {
  // button.classList.toggle('openOptions');
  toggle = !toggle;
  // Cambiar el contenido del contenedor SVG
  const svgContainer = document.getElementById("svgContainer");
  if (toggle) {
    containerNavbarMenu.classList.add("showMenu");
    svgContainer.innerHTML = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.5667 20L30.7778 10.7889C30.9598 10.5763 31.0549 10.3029 31.0441 10.0233C31.0333 9.74363 30.9174 9.47836 30.7195 9.28048C30.5217 9.0826 30.2564 8.96667 29.9767 8.95587C29.6971 8.94507 29.4237 9.04019 29.2111 9.22222L20 18.4333L10.7889 9.21111C10.5797 9.00188 10.2959 8.88434 10 8.88434C9.70413 8.88434 9.42036 9.00188 9.21114 9.21111C9.00191 9.42033 8.88437 9.70411 8.88437 10C8.88437 10.2959 9.00191 10.5797 9.21114 10.7889L18.4334 20L9.21114 29.2111C9.09482 29.3107 9.00036 29.4333 8.93366 29.5711C8.86697 29.709 8.82949 29.8591 8.82358 30.0122C8.81767 30.1652 8.84346 30.3178 8.89932 30.4604C8.95518 30.6029 9.03991 30.7324 9.14819 30.8407C9.25647 30.949 9.38597 31.0337 9.52855 31.0896C9.67114 31.1455 9.82373 31.1712 9.97675 31.1653C10.1298 31.1594 10.2799 31.1219 10.4178 31.0552C10.5556 30.9886 10.6782 30.8941 10.7778 30.7778L20 21.5667L29.2111 30.7778C29.4237 30.9598 29.6971 31.0549 29.9767 31.0441C30.2564 31.0333 30.5217 30.9174 30.7195 30.7195C30.9174 30.5216 31.0333 30.2564 31.0441 29.9767C31.0549 29.6971 30.9598 29.4237 30.7778 29.2111L21.5667 20Z" fill="black"/>
</svg>`;
  } else {
    containerNavbarMenu.classList.remove("showMenu");
    svgContainer.innerHTML = `<svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66663 20C6.66663 20.442 6.84222 20.866 7.15478 21.1785C7.46734 21.4911 7.89127 21.6667 8.33329 21.6667H33.3333C33.7753 21.6667 34.1992 21.4911 34.5118 21.1785C34.8244 20.866 35 20.442 35 20C35 19.558 34.8244 19.1341 34.5118 18.8215C34.1992 18.5089 33.7753 18.3333 33.3333 18.3333H8.33329C7.89127 18.3333 7.46734 18.5089 7.15478 18.8215C6.84222 19.1341 6.66663 19.558 6.66663 20ZM20 8.33335C20 8.77538 20.1756 9.1993 20.4881 9.51186C20.8007 9.82442 21.2246 10 21.6666 10H33.3333C33.7753 10 34.1992 9.82442 34.5118 9.51186C34.8244 9.1993 35 8.77538 35 8.33335C35 7.89132 34.8244 7.4674 34.5118 7.15484C34.1992 6.84228 33.7753 6.66668 33.3333 6.66668H21.6666C21.2246 6.66668 20.8007 6.84228 20.4881 7.15484C20.1756 7.4674 20 7.89132 20 8.33335ZM13.3333 31.6667C13.3333 32.1087 13.5089 32.5326 13.8214 32.8452C14.134 33.1577 14.5579 33.3333 15 33.3333H33.3333C33.7753 33.3333 34.1992 33.1577 34.5118 32.8452C34.8244 32.5326 35 32.1087 35 31.6667C35 31.2246 34.8244 30.8007 34.5118 30.4882C34.1992 30.1756 33.7753 30 33.3333 30H15C14.5579 30 14.134 30.1756 13.8214 30.4882C13.5089 30.8007 13.3333 31.2246 13.3333 31.6667Z"
        fill="black"
      />
    </svg>`;
  }
});
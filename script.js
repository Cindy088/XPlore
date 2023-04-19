const ACTIVE = "active";

const active_video = document.querySelectorAll(
  ".main-structure .content video"
);
const active_video_overlay = document.querySelectorAll(
  ".main-structure .content .video-overlay"
);

const menu_log = document.querySelector("header .menu-logo");
const main_structure = document.querySelector(".main-structure");
const main_header = document.querySelector(".content .text-description h1");
const second_header = document.querySelector(".content .text-description h2");
const paragraph = document.querySelector(".content .text-description p");
const text_link = document.querySelector(".content .text-description a");
const menu_button = document.querySelectorAll(".aside-menu a");

active_video[0].classList.remove(ACTIVE);
active_video[0].classList.add(ACTIVE);
active_video_overlay.className = "video-overlay video-overlay-explore";

main_header.innerHTML = CONTENT_INFO.explore.h1;
second_header.innerHTML = CONTENT_INFO.explore.h2;
paragraph.innerHTML = CONTENT_INFO.explore.p;
text_link.innerHTML = "Explore";

menu_log.addEventListener("click", () => {
  menu_log.classList.toggle(ACTIVE);
  main_structure.classList.toggle(ACTIVE);
});

menu_button.forEach((button, index) => {
  button.addEventListener("click", () => {
    active_video.forEach((video) => {
      video.classList.remove(ACTIVE);
    });
    active_video[index].classList.add(ACTIVE);
    modify_content(index);
  });
});

function modify_content(index) {
  switch (index) {
    case 0:
      main_header.innerHTML = CONTENT_INFO.explore.h1;
      second_header.innerHTML = CONTENT_INFO.explore.h2;
      paragraph.innerHTML = CONTENT_INFO.explore.p;
      active_video_overlay.className = "video-overlay video-overlay-explore";
      break;
    case 1:
      main_header.innerHTML = CONTENT_INFO.dance.h1;
      second_header.innerHTML = CONTENT_INFO.dance.h2;
      paragraph.innerHTML = CONTENT_INFO.dance.p;
      active_video_overlay.className = "video-overlay video-overlay-dance";
      break;
    case 2:
      main_header.innerHTML = CONTENT_INFO.music.h1;
      second_header.innerHTML = CONTENT_INFO.music.h2;
      paragraph.innerHTML = CONTENT_INFO.music.p;
      active_video_overlay.className = "video-overlay video-overlay-music";
      break;
    case 3:
      main_header.innerHTML = CONTENT_INFO.painting.h1;
      second_header.innerHTML = CONTENT_INFO.painting.h2;
      paragraph.innerHTML = CONTENT_INFO.painting.p;
      active_video_overlay.className = "video-overlay video-overlay-painting";
      break;
    case 4:
      main_header.innerHTML = CONTENT_INFO.vr.h1;
      second_header.innerHTML = CONTENT_INFO.vr.h2;
      paragraph.innerHTML = CONTENT_INFO.vr.p;
      active_video_overlay.className = "video-overlay video-overlay-vr";
      break;
    default:
      break;
  }
}

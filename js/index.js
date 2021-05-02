let musicNames = [
  {
    selected: false,
    name: "This is Lizzo",
  },
  {
    selected: false,
    name: "This is H.E.R",
  },
  {
    selected: false,
    name: "This is CHIKA",
  },
  {
    selected: true,
    name: "This is Alan Walker",
  },
  {
    selected: false,
    name: "This Chloe x Halle",
  },
  {
    selected: false,
    name: "This is Bruno Mars",
  },
  {
    selected: false,
    name: "This is Fuse ODG",
  },
  {
    selected: false,
    name: "This Meghan Trainor",
  },
  {
    selected: false,
    name: "This is Anne Marie",
  },
];

const speakerSVG = `<svg
class="fill-current"
role="img"
height="16"
width="16"
viewBox="0 0 16 16"
class="Svg-ulyrgf-0 hJgLcF"
>
<path
  d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"
></path>
</svg>`;

const sideBarUl = document.getElementById("sidebar-playlist");
const playListTitle = document.getElementById("playlist-title");

let liEntries = [];

init();

function init() {
  clearPreviousListEntries();
  for (let i = 0; i < musicNames.length; i++) {
    const liEntry = document.createElement("li");
    liEntry.appendChild(document.createTextNode(musicNames[i].name));
    liEntry.addEventListener("click", function () {
      highlightSelected(musicNames[i].name);
    });
    sideBarUl.appendChild(liEntry);
    if (musicNames[i].selected) {
      playListTitle.innerHTML = getPlayListTitle(musicNames[i].name);
      liEntry.className =
        "mt-2 text-white font-bold cursor-default flex justify-between items-center";
      const speakerSpan = document.createElement("span");
      speakerSpan.className = "text-gray-300 mr-2";
      speakerSpan.innerHTML = speakerSVG;
      liEntry.appendChild(speakerSpan);
    } else {
      liEntry.className = "mt-2 hover:text-white cursor-default";
    }
    liEntries.push(liEntry);
  }
}

function getPlayListTitle(musicName) {
  return `<h1 id="playlist-title">${musicName}</h1>`;
}

function highlightSelected(musicName) {
  let newList = [];
  for (let i = 0; i < musicNames.length; i++) {
    let mn = musicNames[i];
    mn.selected = musicName === mn.name;
    newList.push(mn);
  }
  musicNames = [];
  musicNames = [...new Set(newList)];
  init();
}

function clearPreviousListEntries() {
  for (let p = 0; p < liEntries.length; p++) {
    liEntries[p].remove();
  }
}

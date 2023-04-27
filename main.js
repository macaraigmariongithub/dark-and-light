const helloManilaSection = document.getElementById('hello-manila');
const imgAnchors = document.getElementById('peek').querySelectorAll('a');
const peekImgs = document.getElementById('peek').querySelectorAll('img');
const eventTitle = document.getElementById('event').querySelector('h1');
const events = document.querySelectorAll('.event-container');
const toggleSwitchWrapper = document.getElementById('theme-switch-wrapper');
const toggleSwitchIcon = toggleSwitchWrapper.querySelector('i');
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const themeStorage = window.localStorage;
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

//switch theme dynamically
const applyTheme = () => {
  const theme = toggleSwitch.checked ? DARK_THEME : LIGHT_THEME;
  const src = theme === DARK_THEME ? imgDarkLinks : imgLightLinks;

  //theme mode
  themeStorage.setItem('hello-manila-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
  toggleSwitchIcon.className = theme === DARK_THEME? 'fas fa-moon' : 'fas fa-sun';

  // hello seoul section
  helloManilaSection.style.backgroundImage = `url('images/manila/manilabackground1${theme}.jpg')`;
  // helloManilaSection.style.backgroundImage = `url('images/manila/image1${theme}.jpg')`;

  //peek section
  for (let i = 0; i < 3; i++) {
    peekImgs[i].setAttribute('src', `images/manila/image${i + 1}${theme}.jpg`);
    imgAnchors[i].setAttribute('href', src[i]);
  }

  //event section
  eventTitle.textContent = theme === DARK_THEME ? 'night event' : 'day event';
  events.forEach((event, index) => {
    event.querySelector('h2').textContent = src.events[index].title;
    event.querySelector('img').setAttribute('src', src.events[index].link);
  });
};

toggleSwitch.addEventListener('change', applyTheme);
toggleSwitch.checked = themeStorage.getItem('hello-manila-theme') === 'dark' ? true : false;
applyTheme();
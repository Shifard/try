const getTUNEYEButton = document.querySelector('.get-TUN-eye');

getTUNEYEButton.addEventListener('click', () => {
  window.open('https://www.example.com', '_blank');
});

const sourceCode = document.querySelector('.code');
sourceCode.addEventListener('click', () => {
  window.open('https://github.com/veenoise/Tun-Eye-Tool', '_blank');
});

function detectBrowser() {
  const ua = navigator.userAgent;
  const vendor = navigator.vendor;

  if (navigator.brave && typeof navigator.brave.isBrave === 'function') {
    return 'brave';
  } else if (ua.indexOf('Edg') > -1) {
    return 'edge';
  } else if (ua.indexOf('OPR') > -1 || ua.indexOf('Opera') > -1) {
    return 'opera';
  } else if (ua.indexOf('Chrome') > -1 && vendor === 'Google Inc.') {
    return 'chrome';
  } else if (ua.indexOf('Firefox') > -1) {
    return 'firefox';
  } else if (ua.indexOf('Safari') > -1 && vendor === 'Apple Computer, Inc.') {
    return 'safari';
  } else {
    return 'chrome'; // default fallback
  }
}

function updateBrowserIcon() {
  const browser = detectBrowser();
  const iconEl = document.querySelector('.browser-icon');

  const browserIcons = {
    chrome: './src/img/chrome.webp',
    firefox: './src/img/firefox.webp',
    edge: './src/img/edge.png',
    opera: './src/img/opera.png',
    safari: './src/img/safari.png',
    brave: './src/img/brave.png'
  };

  iconEl.src = browserIcons[browser];
  iconEl.alt = `${browser.charAt(0).toUpperCase() + browser.slice(1)} Icon`;
}

window.addEventListener('DOMContentLoaded', updateBrowserIcon);

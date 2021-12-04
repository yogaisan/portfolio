import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["I value clarity, empathy, and integrity above everything else.", "I love coding beautiful and simple things."],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };

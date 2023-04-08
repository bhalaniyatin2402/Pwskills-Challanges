const progressBar = document.getElementById("progress-bar");
const documentHeight = document.body.scrollHeight;
const windowHeight = window.innerHeight;

document.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  const scrollPercentage =
    (scrollHeight / (documentHeight - windowHeight)) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});

// for content inside the test progress
const testProgressBar = document.getElementById("testprogressbar");
const paragraphOne = document.getElementById("paragraph1");

const paragraphOneTotalHeight = paragraphOne.scrollHeight;
const paragraphOneInnerHeight = paragraphOne.offsetHeight;

paragraphOne.addEventListener("scroll", () => {
  paragraphOneScrollHeight = paragraphOne.scrollTop;
  paragraphOneScrollPercentage =
    (paragraphOneScrollHeight /
      (paragraphOneTotalHeight - paragraphOneInnerHeight)) *
    100;
  testProgressBar.style.width = `${paragraphOneScrollPercentage}%`;
});

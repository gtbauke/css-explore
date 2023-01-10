const images = document.querySelectorAll('.gallery img');

const projectInfoContainer = document.querySelector('.project-info');
const projectInfoContent = document.querySelector('.project-info-content');
const projectInfoImage = document.querySelector('#project-info-img');
const projectInfoBackButton = document.querySelector('#project-info-back-button');

const timeouts = [];

images.forEach(image => {
  image.addEventListener('click', event => {
    timeouts.forEach(timeout => clearTimeout(timeout));
    projectInfoImage.src = event.target.src;

    projectInfoContainer.setAttribute('data-shown', true);
    projectInfoContent.setAttribute('data-shown', true);
  })
});

projectInfoBackButton.addEventListener('click', () => {
  projectInfoContainer.setAttribute('data-shown', false);
  // projectInfoContent.setAttribute('data-shown', false);

  const timeoutId = setTimeout(() => {
    projectInfoContent.setAttribute('data-shown', false);
  }, 350);

  timeouts.push(timeoutId);
});

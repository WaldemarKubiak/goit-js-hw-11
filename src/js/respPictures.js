const gallery = document.querySelector('.gallery');

export function renderGallery(images) {
  const markupHits = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card"><a class="photo-link" href="${largeImageURL}">
      <img class="photo-image"src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
      <div class="info">
      <p class="info-item"> <b>Likes</b> <span class="info-item--api">${likes}</span></p>
      </span><p class="info-item"> <b>Views</b> <span class="info-item--api">${views}</span></p>
      <p class="info-item"> <b>Comments</b> <span class="info-item--api">${comments} </span></p>
      <p class="info-item"> <b>Downloads</b> <span class="info-item--api">${downloads}</span></p>
      </div>
      </div>`;
      }
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markupHits);

  // // simpleLightbox.refresh();
  // if (page >= 2) {
  //   const { height: cardHeight } = document
  //     .querySelector('.gallery')
  //     .firstElementChild.getBoundingClientRect();

  //   window.scrollBy({
  //     top: cardHeight * 2,
  //     behavior: 'smooth',
  //   });
  // }

  // console.log('Image response: ', images);
}
// console.log(gallery);

//ANOTHER WAY:
// function renderGallery(images) {
//    const markupHits = images
//     .map(image => {
//       console.log('Image response: ', image);
//       return `<div class="photo-card">
//       <a href="${image.largeImageURL}"><img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" /></a>
//   <div class="info">
//   <p class="info-item"> <b>Likes</b> ${image.likes} </p>
//   <p class="info-item"> <b>Views</b> ${image.views} </p>
//   <p class="info-item"> <b>Comments</b> ${image.comments} </p>
//   <p class="info-item"> <b>Downloads</b> ${image.downloads} </p>
//   </div>
//   </div>`;
//     })
//     .join('');

//   gallery.insertAdjacentHTML('beforeend', markupHits);
// }

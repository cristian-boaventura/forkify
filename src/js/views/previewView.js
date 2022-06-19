import View from './View';
import icons from 'url:../../img/icons.svg';

export default class PreviewView extends View {
  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join('');
  }

  _generateMarkupPreview(result) {
    const curId = window.location.hash.slice(1);

    const { id, image, publisher, title, key } = result;
    return `
            <li class="preview">
                <a class="preview__link ${
                  id === curId ? 'preview__link--active' : ''
                }" href="#${id}">
                    <figure class="preview__fig">
                        <img src="${image}" alt="${title}" />
                    </figure>
                    <div class="preview__data">
                        <h4 class="preview__title">${title}</h4>
                        <p class="preview__publisher">${publisher}</p>
              <div class="recipe__user-generated ${key ? '' : 'hidden'}"}>
                <svg>
                  <use href="${icons}#icon-user"></use>
                </svg>
              </div>
                    </div>
                </a>
            </li>
    `;
  }
}

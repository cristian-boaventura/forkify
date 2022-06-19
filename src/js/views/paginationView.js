import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto; // Important convert to number

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const { page: curPage, results, resultsPerPage } = this._data;
    const numPages = Math.ceil(results.length / resultsPerPage);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupBtn(curPage, false, true);
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupBtn(curPage, true, false);
    }
    // Other page
    if (curPage < numPages) {
      return this._generateMarkupBtn(curPage, true, true);
    }
    // Page 1, and there are NO other pages
    return '';
  }

  _generateMarkupBtn(curPage, prev, next) {
    const btnPrev = `
            <button data-goto="${
              curPage - 1
            }" class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
            </button>
            `;
    const btnNext = `
            <button data-goto="${
              curPage + 1
            }" class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                </svg>
            </button>
            `;
    return prev && next ? btnPrev + btnNext : prev ? btnPrev : btnNext;
  }
}

export default new PaginationView();

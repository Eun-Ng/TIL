$(document).ready(function () {
  listing();
});

function listing() {
  console.log('화면 로딩 후 잘 실행되었습니다');
}

$.ajax({
  type: 'GET',
  url: 'http://spartacodingclub.shop/web/api/movie',
  data: {},
  success: function (response) {
    let rows = response['movies'];

    for (let i = 0; i < rows.length; i++) {
      let title = rows[i]['title'];
      let desc = rows[i]['desc'];
      let image = rows[i]['image'];
      let star = rows[i]['star'];
      let comment = rows[i]['comment'];
      let star_image = '⭐'.repeat(star);

      let temp_html = `
                      <div class="col">
                        <div class="card">
                          <img
                            src="${image}"
                            class="card-img-top"
                            alt="..."/>
                          <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${desc}</p>
                            <p>${star_image}</p>
                            <p class="myComment">${comment}</p>
                          </div>
                        </div>
                      </div>
                      `;
      $('#cards-box').append(temp_html);
    }
  },
});

const postBox = document.querySelector('.myPost');

// 영화기록박스 열기
const openBox = () => {
  postBox.classList.add('show');
};

// 영화기록박스 닫기
const closeBox = () => {
  postBox.classList.remove('show');
};

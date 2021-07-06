# Introduction

portfolio 페이지와 about 페이지가 있는 포트폴리오 사이트

<br />

# Portfolio List

- [to do list](#to-do-list)
- [pick lunch](#pick-lunch)
- [shop](#shop-main)
- [car](#car-main)

<br />
<br />
<br />

<a name="to-do-list"></a>

# to do list

오늘 할 일을 작성하는 To do list 프로그램 제작

### > 기억하고 싶은 부분

- 사용자의 키입력을 감지하여 이벤트 생성 `event.keyCode`
  ```js
  $('input').keydown(key => {
    if (key.keyCode === 13) {
      // input 입력창에서 엔터키를 누르면 실행될 코드
    }
  });
  ```

<br />

<a name="pick-lunch"></a>

# pick lunch

입력한 점심 메뉴 중 하나를 선택해주는 프로그램 제작

### > 기억하고 싶은 부분

- 전체화면을 꽉 채우는 모달창에 `z-index` 속성을 지정해줘야 모달창 안의 원하는 영역을 선택할 수 있다.

  ```css
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
  }
  ```

- 배열의 특정값 삭제

  ```js
  // numbers 배열에서 1을 찾아 삭제
  numbers.splice(numbers.indexOf(1), 1);
  ```

- async/await 구문을 활용한 비동기식 처리

  ```js
  async function pickMenu(...menu) {
    const p = new Promise((resolve, reject) => {
      if (menu.length === 0) {
        alert('메뉴판에 등록된 메뉴가 없습니다.');
      } else {
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * menu.length);
          resolve(menu[randomIndex]);
        }, 2000);
      }
    });

    return p;
  }

  async function getMenu() {
    try {
      const menu = await pickMenu(...menus);
      const result = document.createElement('p');
      result.innerHTML = `오늘의 점심메뉴는 ${menu}!!`;
      const target = document.querySelector('.menu');
      target.append(result);
      $('.modal').slideDown();
    } catch (error) {
      console.log(error.message);
    }
  }

  $('.btn-pick').click(() => {
    getMenu();
  });
  ```

<br />

<a name="shop-main"></a>

# shop

쇼핑몰 메인페이지를 반응형 웹으로 제작

### > 기억하고 싶은 부분

- 상품 더보기 버튼을 누르면 로딩 이미지가 뜨고 ajax 요청

  ```js
  $('.btn-more').click(() => {
    $('.btn-more').hide();
    $('.loader').show();
    let loading = setTimeout(dataLoading, 2000);
  });

  function dataLoading() {
    $.ajax({
      url: 'https://deepbm.github.io/data/data.json',
      method: 'GET',
      dataType: 'json',
    })
      .done(response => {
        $('.loader').hide();
        const count = response.length;
        for (let i = 0; i < count; i++) {
          const product = `<div class="col-12 col-md-6 col-lg-4">
      <div class="product">
        <img class="w-100" src="${response[i].image}" alt="fedora_hat">
        <div class="product-info">
          <p class="mt-3 mb-0">${response[i].product}</p>
          <p class="mt-1">${response[i].price}</p>
        </div>
      </div>
    </div>`;
          $('.row').append(product);
        }
      })
      .fail(() => {
        alert('새로고침 후 다시 시도해주세요.');
      });
  }
  ```

<br />

<a name="car-main"></a>

# car

사이드 메뉴가 있는 볼보 자동차 코리아 메인페이지를 반응형 웹으로 클론 제작

### > 기억하고 싶은 부분

- 사이드 메뉴창에서 메뉴를 클릭하면 각 메뉴에 해당되는 메뉴창으로 바뀌는 기능

  ```js
  // side menu - buy
  $('.menu-list-buy').click(() => {
    $('.sub-menu').hide();
    $('.sub-menu-buy').show();
  });

  // side menu - service
  $('.menu-list-service').click(() => {
    $('.sub-menu').hide();
    $('.sub-menu-service').show();
  });

  // side menu - why volvo
  $('.menu-list-why-volvo').click(() => {
    $('.sub-menu').hide();
    $('.sub-menu-why-volvo').show();
  });

  // side menu - more
  $('.menu-list-more').click(() => {
    $('.sub-menu').hide();
    $('.sub-menu-more').show();
  });
  ```

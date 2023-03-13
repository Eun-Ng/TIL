// 2-3. 네임스페이스(namespace)
declare namespace hi {
  const a: string;
}
const $p = $('p');

// 2-4. 메서드와 this 타이핑
document.querySelector('h1')?.addEventListener('click', function () {
  console.log(this);
});

/**
 * * from jQuery type 
 <TElement extends HTMLElement = HTMLElement>(html: JQuery.htmlString, ownerDocument_attributes?: Document | JQuery.PlainObject): JQuery<TElement>;
 * */

/**
 * * jQuery method
 removeClass(className_function?: JQuery.TypeOrArray<string> | ((this: TElement, index: number, className: string) => string)): this;

 * * JQuery.TypeOrArray<string> -> string | string[]
 type TypeOrArray<T> = T | T[];
 */

$('p').removeClass('myClass noClass').addClass('yourClass');

// method chaining
$('p')
  .removeClass((index: number, className: string) => {
    return 'myClass';
  })
  .addClass('yourClass');

// text
$(['p', 't']).text('hello');

// addClass
const tag = $('ul li').addClass(function (index) {
  return 'item-' + index;
});

// html
$(tag).html(function (i: number) {
  console.log(this);
  return $(this).data('name') + '입니다';
});

const div = document.createDocumentFragment();
$(tag).html(document);

// 2-5. jQuery 타입 직접 만들어보기
interface zQuery<T> {
  text(
    param?:
      | string
      | number
      | ((this: T, index: number) => string | number | boolean),
  ): this;
  html(param: string | Document | DocumentFragment): this;
}
const $tag: zQuery<HTMLElement> = $(['p', 't']) as zQuery<HTMLElement>;

$tag.text('123');
$tag.text(123);
$tag.text(function (index) {
  console.log(this, index);
  return true;
});
$tag.text().html(document);
$(tag).html(document);

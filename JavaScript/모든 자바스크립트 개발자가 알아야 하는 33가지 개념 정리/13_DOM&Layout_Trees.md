## DOM

**문서 객체 모델(DOM, Document Object Model)** 이란 HTML, XML 문서의 프로그래밍 interface입니다. DOM은 문서의 구조화된 표현(structured representation)을 제공하며 **프로그래밍 언어가 DOM 구조에 접근할 수 있는 방법을 제공**하여 그들이 문서 구조, 스타일, 내용 등을 변경할 수 있게 돕습니다.  
**DOM은 HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할 수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조입니다.**

### DOM API

DOM은 웹 문서의 동적 변경을 위해 프로그래밍 언어가 자신에게 접근하고 수정할 수 있는 방법을 제공하는데 일반적으로 프로퍼티와 메소드를 갖는 자바스크립트 객체로 제공됩니다.  
이를 DOM API라고 칭한다. 정적인 웹페이지에 접근하여 동적으로 웹페이지를 변경하기 위한 유일한 방법은 DOM을 변경하는 것입니다.

### DOM tree 노드 구성

- 문서 노드(Document Node): 트리의 최상위 노드. 보통 트리 구조에서는 루트 노드라고 일컫습니다. 각각 요소, 어트리븉, 텍스트 노드에 접근하려면 문서 노드를 통해야 합니다.

- 요소 노드(Element Node): HTML 요소를 표현합니다. 부자 관계를 통해 정보를 구조화합니다. 어트리뷰트, 텍스트 노드에 접근하려면 먼저 요소 노드를 찾아 접근해, HTMLElement 객체를 상속한 객체로 구성됩니다.

- 어트리뷰트 노드(Attribute Node): 어트리뷰트 노드는 HTML 요소의 어트리뷰트를 표현합니다. 어트리뷰트가 지정된 요소의 자식이 아니라 해당 요소의 일부로 표현됩니다.

- 텍스트 노드(Text Node): 텍스트 노드는 HTML 요소의 텍스트를 표현합니다. 텍스트 노드는 요소 노드의 자식이며 자식 노드를 가질 수 없습니다.

![DOM tree](./images/13_domTree.png)

브라우저는 HTML 문서롤 로드한 후 해당 문서에 대한 모델을 메모리에 생성합니다. 이때 모델은 객체의 트리로 구성되는데 이것을 DOM tree라 합니다. DOM tree는 브라우저가 HTML 문서를 로드한 후 파싱하여 생성하는 모델을 의미합니다.

### DOM tree

![DOM tree의 객체 구성](./images/13_dom%26HTMLElement.png)

### Reference

<hr>
https://poiemaweb.com/js-dom

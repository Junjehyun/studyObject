let name = 'Samsung Store';

// 각 제품별로 겹치는 정보 한번만 쓰기 위해서!!
// 다른 클래스에 name, price 다 삭제해보자.
class Product {
    name = '';
    price = 0;
    color = '';
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    // Price값 출력될때 "만원"이라는 문구도 함께 출력하게 만들어주는 함수.
    getPrice() {
        return this.price + "만원";
    }
    setPrice() {
        if( price < 0 ) {
            throw Error('마이너스 값 안됨.')
        }
    }
}

// 이런식으로 100대를 만든다 치면 계속 작업을 해야하니 귀찮아진다.
// 하나하나 어떻게 코드를 할것인가? 매우 귀찮은 일이다.
// 객체지향의 개념을 이용하면 쉽게 만들고 실수를 줄일 수 있다.
// 우선은 클래스를 활용한다.

// 클래스는 일종의 작업지시서 라고 생각하면 편하다.
// 어떤 속성이 있고 어떤 기능이 정의해둔 지시서.
// 누가 들어와서 만들던 이 작업지시서만 확인하면 됨. 일종의 공장화 작업

// Product의 클래스에 있는 값을 마치 내거인것처럼 쓸꺼다.
// name, price를

class TV extends Product{ //Product를 상속
    size = ''
    // 생성자라는 뜻 저위에 name,price,size의 속성값을 초기화 시켜주는 기능.
    // 클래스에 있는 속성들에 값을 초기화 시켜주는 함수가 있음.-> Constructor
    constructor(name, price, size){
        // 부모꺼 가지고올때 super키워드
        super(name,price);
        this.size = size;
    }
}

let tv1 = new TV('noona tv', 200, '56inch');
let tv2 = new TV('ultra tv', 200, '27inch');

console.log(tv1.getPrice(),tv2.getPrice());




// 이렇게 복잡하게 안하고 constructor를 정의해두면 한줄로 간단하게
// 표현 쌉가능!!

class AC extends Product{
    type=''
}

class Laptop extends Product{
    weight=0;
}

// 잘 보면 이렇게 각각 다른 제품이라도 겹치는 항목들이 보일것이다.
// name, price
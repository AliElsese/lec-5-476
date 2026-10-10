// ** DOM (Document Object Model) **
// 1. Selecting Element: (there is no one of them better than the others)
//      - select by id: document.getElementById('elementId');                   // return single value (first one)
//      - select by tagName: document.getElementsByTagName('tagName');          // return Html Collection like array but not accept arrayMethods
//      - select by className: document.getElementsByClassName('className');    // return Html Collection
//      - select by name: document.getElementsByName('name');                   // return Node List (Es 5)
//      - select like Css: 1. document.querySelectorAll('selectLikeCss');       // return Node List
//                         2. document.querySelector('selectLikeCss');          // return single value (first one)
//      - select specialTags:   1. document.body;                               // return Body
//                              2. document.title;                              // return title
//                              3. document.links;                              // return links (Html Collection)

/////////////////////////////////////////////////////////////////////////////////////////////
// 2. Events:
//      ** Add Event:
//          - syntaxt: element.addEventListener('eventName', function(){});

function sayHello() {
    console.log('Hello...');
}
document.querySelector('button').addEventListener('click', sayHello); // refrence for function
// OR
document.querySelector('button').addEventListener('click', function () {
    console.log('Hello...');
});
// OR (ary7 dma8y)
document.querySelector('button').addEventListener('click', function () {
    sayHello();
});

//      ** Event Info:
//          - syntaxt: element.addEventListener('eventName', function(e){  });
document.querySelector('button').addEventListener('click', function (e) {
    console.log(e);     // will get me event info
});

/////////////////////////////////////////////////////////////////////////////////////////////
// 3. Classes:
//      - classList: (add, remove, replace, toggle)
document.querySelector('button').classList.add('btn-danger');
document.querySelector('button').classList.remove('btn-danger');
document.querySelector('button').classList.toggle('btn-danger');
document.querySelector('button').classList.replace('btn-danger', 'btn-info');

/////////////////////////////////////////////////////////////////////////////////////////////
// 4. Attributes:
//      - (setAttribute, getAttribute)
document.querySelector('img').getAttribute('src');
document.querySelector('img').setAttribute('src', 'images/img.png');

/////////////////////////////////////////////////////////////////////////////////////////////
// 5. Style:
//      - (any css properties)
document.querySelector('a').style.color = 'red';
document.querySelector('a').style.width = '300px';
document.querySelector('a').style.backgroundColor = '#09c';

/////////////////////////////////////////////////////////////////////////////////////////////
// 6. Change content:
//      - (innerText, innerHTML)
document.querySelector('p').innerText = 'Welcome to our website';
document.querySelector('div').innerHTML = '<p>Welcome to our website</p>';

/////////////////////////////////////////////////////////////////////////////////////////////
// 7. Manipulating Structure:
//      - (createElement(), removeChild(), appendChild(), replaceChild())
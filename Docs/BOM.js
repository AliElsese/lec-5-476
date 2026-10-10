// ** BOM (Browser Object Model) ** control browser window
//      - window is a global object so we can write it's property without calling window
//      - ex: window.alert("hi") => alert("hi")

//  - alert()   => show message for user
//      alert("Welcome!");

//  - confirm() => show message for user with ok or cancel response (true or false)
//      confirm("are you sure");

//  - prompt()  => ask user for input return it in string
//      prompt("Enter your name");

//  - location  => object deals with pages
//      location.href:                  return url of my page
//      location.reload():              refresh html page
//      location.assign("page url"):    send user to a page

//  - history   => object deals with browser history
//      history.back():     previous page
//      history.forward():  next page
//      history.go():       take number parameter (1 means go forward, -1 means go back)

//  - navigator => object gives info about browser & environment
//      navigator.language

//  - screen    => object gives info about user screen
//      screen.width, screen.height

//  - window.innerWidth, window.innerHeight: browser screen

//  - document  => object deals with html document

//  بيظهر عندي مشكله وهي ان التعديل مش هيسمع معايا في ملف الداتا بتاعتي لان الويب ميقدرش يعدل ع السيرفر الا
//  بطلب من السيرفر او في حل مؤقت وهو

//  - Storage like DB: (Web Api - Browser Api)
//      - localStorage: (remember me)
//          - الداتا بتتسجل في البراوزر نفسه داخل الapplication
//          - بتفضل معايا مهما اقفل وافتح في البراوزر
//          - up to 15mg

//      - sessionStorage: (not remember me)
//          - بتفضل معايا طول م انا فاتح البراوزر بس اول ما اقفل بتضيع

//      - cookies: (has more attributes)
//          - mix as user decided (local-session)
//          - مبتشيلش داتا بحجم كبير بتشيل قد الكوكي
//          - open in a specific domain and specific path
//          - can put expiration date or max age for this data
//          - up to 5mg

// VIP: window from browser is different language than dom js so..................... w need وسييييط (json)
// لغتين برمجه بيكلمو بعض
// only one data type is shared with all languages (string)
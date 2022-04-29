//string type
let string = 'Hello';
string = `Hello`;
string = '"Hello"';
string = "'Hello'";

//using \n
string = 'Hello\nMy name is Minsu';

//using \t = tab
string = 'hello my name is \t\t minsu';

//showing \
string = 'showing backslash \\';

//showing unicode : \u + unicode
string = '\u09AC';

//Template Literal - using back tick
let id = 'Minsu';
let greetings = '"Hello ' + id + ' Nice to Meet You."';
let greetingsTemplateLiteral = `'Hello ${id} Nice to Meet You'`;

console.log(greetingsTemplateLiteral);

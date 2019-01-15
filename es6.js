//Template Literals
//String Interpolation
//Intuitive expression interpolation for single-line and multi-line strings. (Notice: don't be confused, Template Literals were originally named "Template Strings" in the drafts of the ECMAScript 6 language specification)
//es5
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

//es5
var customer = { name: "Foo" };
var card = { amount: 7, product: "Bar", unitprice: 42 };
var message = "Hello " + customer.name + ",\n" +
"want to buy " + card.amount + " " + card.product + " for\n" +
"a total of " + (card.amount * card.unitprice) + " bucks?";
//Custom Interpolation
//Flexible expression interpolation for arbitrary methods.
get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`
get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux);
//Raw String Access
//Access the raw template string content (backslashes are not interpreted).
function quux (strings, ...values) {
  strings[0] === "foo\n"
  strings[1] === "bar"
  strings.raw[0] === "foo\\n"
  strings.raw[1] === "bar"
  values[0] === 42
}
quux`foo\n${ 42 }bar`

String.raw`foo\n${ 42 }bar` === "foo\\n42bar"
//no equivalent es5

//Extended Literals
//Direct support for safe binary and octal literals.
0b111110111 === 503
0o767 === 503
//es5
parseInt("111110111", 2) === 503;
parseInt("767", 8) === 503;
0767 === 503; // only in non-strict, backward compatibility mode
//Unicode String & RegExp Literal
//Extended support using Unicode within strings and regular expressions.
"𠮷".length === 2
"𠮷".match(/./u)[0].length === 2
"𠮷" === "\uD842\uDFB7"
"𠮷" === "\u{20BB7}"
"𠮷".codePointAt(0) == 0x20BB7
for (let codepoint of "𠮷") console.log(codepoint)
//es5
"𠮷".length === 2;
"𠮷".match(/(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF][\uD800-\uDBFF][\uDC00-\uDFFF][\uD800-\uDBFF](?![\uDC00-\uDFFF])(?:[^\uD800-\uDBFF]^)[\uDC00-\uDFFF])/)[0].length === 2;
"𠮷" === "\uD842\uDFB7";
//  no equivalent in ES5
//  no equivalent in ES5
//  no equivalent in ES5

//Classes
//Class Definition
//More intuitive, OOP-style and boilerplate-free classes.
class Shape {
  constructor (id, x, y) {
      this.id = id
      this.move(x, y)
  }
  move (x, y) {
      this.x = x
      this.y = y
  }
}
var Shape = function (id, x, y) {
  this.id = id;
  this.move(x, y);
};
Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
//Class Inheritance
//More intuitive, OOP-style and boilerplate-free inheritance.
class Rectangle extends Shape {
  constructor (id, x, y, width, height) {
      super(id, x, y)
      this.width  = width
      this.height = height
  }
}
class Circle extends Shape {
  constructor (id, x, y, radius) {
      super(id, x, y)
      this.radius = radius
  }
}
//es5
var Rectangle = function (id, x, y, width, height) {
  Shape.call(this, id, x, y);
  this.width  = width;
  this.height = height;
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
var Circle = function (id, x, y, radius) {
  Shape.call(this, id, x, y);
  this.radius = radius;
};
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;





# Modules and Testing

## Modules 

What is a module and what problem does it solve?

* It lets you do more stuff
* Let's you use javascript code from another file. javascript in multiple files.
* Maintainability, readability.
* Makes it easier to organize your code. 
* More Modular.
* In Node,every single file is a module.


When we use the `require` function to require another file, we get access to that file's `exports` object.

Every file has an `exports`, `module`, and `require`.

Every js file in node is wrapped inside the following function:

```js
(function (exports, require, module, __filename, __dirname) {
```

## npm

`Nonchalantly Performs Magic`

- package.json 
- `npm init -y`

## mocha

https://mochajs.org/

Mocha is a test framework that makes it easier to test our code.

- `npm install --save-dev mocha`
- `./node_modules/mocha/bin/mocha`


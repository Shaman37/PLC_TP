// Generated from ./users.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by usersParser.
function usersListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

usersListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
usersListener.prototype.constructor = usersListener;

// Enter a parse tree produced by usersParser#users.
usersListener.prototype.enterUsers = function(ctx) {
};

// Exit a parse tree produced by usersParser#users.
usersListener.prototype.exitUsers = function(ctx) {
};


// Enter a parse tree produced by usersParser#user.
usersListener.prototype.enterUser = function(ctx) {
};

// Exit a parse tree produced by usersParser#user.
usersListener.prototype.exitUser = function(ctx) {
};


// Enter a parse tree produced by usersParser#name.
usersListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by usersParser#name.
usersListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by usersParser#email.
usersListener.prototype.enterEmail = function(ctx) {
};

// Exit a parse tree produced by usersParser#email.
usersListener.prototype.exitEmail = function(ctx) {
};


// Enter a parse tree produced by usersParser#password.
usersListener.prototype.enterPassword = function(ctx) {
};

// Exit a parse tree produced by usersParser#password.
usersListener.prototype.exitPassword = function(ctx) {
};


// Enter a parse tree produced by usersParser#biography.
usersListener.prototype.enterBiography = function(ctx) {
};

// Exit a parse tree produced by usersParser#biography.
usersListener.prototype.exitBiography = function(ctx) {
};


// Enter a parse tree produced by usersParser#course.
usersListener.prototype.enterCourse = function(ctx) {
};

// Exit a parse tree produced by usersParser#course.
usersListener.prototype.exitCourse = function(ctx) {
};


// Enter a parse tree produced by usersParser#year.
usersListener.prototype.enterYear = function(ctx) {
};

// Exit a parse tree produced by usersParser#year.
usersListener.prototype.exitYear = function(ctx) {
};



exports.usersListener = usersListener;
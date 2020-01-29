// Generated from grammars/users.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4');

// This class defines a complete generic visitor for a parse tree produced by usersParser.

function usersVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

usersVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
usersVisitor.prototype.constructor = usersVisitor;

// Visit a parse tree produced by usersParser#users.
usersVisitor.prototype.visitUsers = function(ctx) {
  
  let code = ''
  for (let i = 0; i < ctx.getChildCount(); i++) {
    if(i==ctx.getChildCount()-1)
      code += '{'+this.visit(ctx.getChild(i))+'}';
    else
      code += '{'+this.visit(ctx.getChild(i))+'},';
  }
  code = code.replace(/:,/g,'":')
  
  return '['+code+']';
};


// Visit a parse tree produced by usersParser#user.
usersVisitor.prototype.visitUser = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by usersParser#name.
usersVisitor.prototype.visitName = function(ctx) {

  let start = ctx.start.start
  let stop = ctx.stop.stop

  return '"'+ctx.start.getInputStream().getText(start,stop)+'"'
};


// Visit a parse tree produced by usersParser#email.
usersVisitor.prototype.visitEmail = function(ctx) {
  return '"'+ctx.getText()+'"';
};


// Visit a parse tree produced by usersParser#password.
usersVisitor.prototype.visitPassword = function(ctx) {
  return '"'+ctx.getText()+'"';
};


// Visit a parse tree produced by usersParser#biography.
usersVisitor.prototype.visitBiography = function(ctx) {
  
  let start = ctx.start.start
  let stop = ctx.stop.stop

  return '"'+ctx.start.getInputStream().getText(start,stop)+'"'
};


// Visit a parse tree produced by usersParser#course.
usersVisitor.prototype.visitCourse = function(ctx) {
  
  let start = ctx.start.start
  let stop = ctx.stop.stop

  return '"'+ctx.start.getInputStream().getText(start,stop)+'"'
};


// Visit a parse tree produced by usersParser#year.
usersVisitor.prototype.visitYear = function(ctx) {
  return '"'+ctx.getText()+'"';
};


usersVisitor.prototype.visitTerminal = function(ctx) {
  return '"'+ctx.getText().toLowerCase();
};


exports.usersVisitor = usersVisitor;
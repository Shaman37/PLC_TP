const antlr4 = require('antlr4');
const usersLexer = require('./lib/usersLexer.js');
const usersParser = require('./lib/usersParser.js');
const usersVisitor = require('./lib/usersVisitor.js');
const fs = require('fs');
var path = require('path')

module.exports.parseDocument = (dir,file,callback) => {

    fs.readFile(dir + file, 'utf-8', (err, data) => {
        if (!err) {
            const chars = new antlr4.InputStream(data)
            const lexer = new usersLexer.usersLexer(chars);

            const tokens = new antlr4.CommonTokenStream(lexer);
            const parser = new usersParser.usersParser(tokens);
            const tree = parser.users()

            var visitor = new usersVisitor.usersVisitor()
            const object = visitor.visitUsers(tree)
            callback(object)
        }
        else
            callback(err)
    })
}

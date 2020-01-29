// Generated from ./users.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var usersListener = require('./usersListener').usersListener;
var usersVisitor = require('./usersVisitor').usersVisitor;

var grammarFileName = "users.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\r:\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0004\t\t\t\u0003\u0002\u0006\u0002\u0014\n\u0002\r\u0002\u000e",
    "\u0002\u0015\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0004\u0006\u0004&\n\u0004\r\u0004\u000e",
    "\u0004\'\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007",
    "\u0006\u0007/\n\u0007\r\u0007\u000e\u00070\u0003\b\u0006\b4\n\b\r\b",
    "\u000e\b5\u0003\t\u0003\t\u0003\t\u0002\u0002\n\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0002\u0002\u00025\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0004\u0017\u0003\u0002\u0002\u0002\u0006%\u0003\u0002\u0002\u0002",
    "\b)\u0003\u0002\u0002\u0002\n+\u0003\u0002\u0002\u0002\f.\u0003\u0002",
    "\u0002\u0002\u000e3\u0003\u0002\u0002\u0002\u00107\u0003\u0002\u0002",
    "\u0002\u0012\u0014\u0005\u0004\u0003\u0002\u0013\u0012\u0003\u0002\u0002",
    "\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015\u0013\u0003\u0002\u0002",
    "\u0002\u0015\u0016\u0003\u0002\u0002\u0002\u0016\u0003\u0003\u0002\u0002",
    "\u0002\u0017\u0018\u0007\u0003\u0002\u0002\u0018\u0019\u0005\u0006\u0004",
    "\u0002\u0019\u001a\u0007\u0004\u0002\u0002\u001a\u001b\u0005\b\u0005",
    "\u0002\u001b\u001c\u0007\u0005\u0002\u0002\u001c\u001d\u0005\n\u0006",
    "\u0002\u001d\u001e\u0007\u0006\u0002\u0002\u001e\u001f\u0005\f\u0007",
    "\u0002\u001f \u0007\u0007\u0002\u0002 !\u0005\u000e\b\u0002!\"\u0007",
    "\b\u0002\u0002\"#\u0005\u0010\t\u0002#\u0005\u0003\u0002\u0002\u0002",
    "$&\u0007\t\u0002\u0002%$\u0003\u0002\u0002\u0002&\'\u0003\u0002\u0002",
    "\u0002\'%\u0003\u0002\u0002\u0002\'(\u0003\u0002\u0002\u0002(\u0007",
    "\u0003\u0002\u0002\u0002)*\u0007\u000b\u0002\u0002*\t\u0003\u0002\u0002",
    "\u0002+,\u0007\f\u0002\u0002,\u000b\u0003\u0002\u0002\u0002-/\u0007",
    "\t\u0002\u0002.-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020",
    ".\u0003\u0002\u0002\u000201\u0003\u0002\u0002\u00021\r\u0003\u0002\u0002",
    "\u000224\u0007\t\u0002\u000232\u0003\u0002\u0002\u000245\u0003\u0002",
    "\u0002\u000253\u0003\u0002\u0002\u000256\u0003\u0002\u0002\u00026\u000f",
    "\u0003\u0002\u0002\u000278\u0007\n\u0002\u00028\u0011\u0003\u0002\u0002",
    "\u0002\u0006\u0015\'05"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'NAME:'", "'EMAIL:'", "'PASSWORD:'", "'BIOGRAPHY:'", 
                     "'COURSE:'", "'YEAR:'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "STR", "NUM", 
                      "EMAIL", "PASS", "WS" ];

var ruleNames =  [ "users", "user", "name", "email", "password", "biography", 
                   "course", "year" ];

function usersParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

usersParser.prototype = Object.create(antlr4.Parser.prototype);
usersParser.prototype.constructor = usersParser;

Object.defineProperty(usersParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

usersParser.EOF = antlr4.Token.EOF;
usersParser.T__0 = 1;
usersParser.T__1 = 2;
usersParser.T__2 = 3;
usersParser.T__3 = 4;
usersParser.T__4 = 5;
usersParser.T__5 = 6;
usersParser.STR = 7;
usersParser.NUM = 8;
usersParser.EMAIL = 9;
usersParser.PASS = 10;
usersParser.WS = 11;

usersParser.RULE_users = 0;
usersParser.RULE_user = 1;
usersParser.RULE_name = 2;
usersParser.RULE_email = 3;
usersParser.RULE_password = 4;
usersParser.RULE_biography = 5;
usersParser.RULE_course = 6;
usersParser.RULE_year = 7;


function UsersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usersParser.RULE_users;
    return this;
}

UsersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsersContext.prototype.constructor = UsersContext;

UsersContext.prototype.user = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UserContext);
    } else {
        return this.getTypedRuleContext(UserContext,i);
    }
};

UsersContext.prototype.enterRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.enterUsers(this);
	}
};

UsersContext.prototype.exitRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.exitUsers(this);
	}
};

UsersContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usersVisitor ) {
        return visitor.visitUsers(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usersParser.UsersContext = UsersContext;

usersParser.prototype.users = function() {

    var localctx = new UsersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, usersParser.RULE_users);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 17; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 16;
            this.user();
            this.state = 19; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===usersParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UserContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usersParser.RULE_user;
    return this;
}

UserContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UserContext.prototype.constructor = UserContext;

UserContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

UserContext.prototype.email = function() {
    return this.getTypedRuleContext(EmailContext,0);
};

UserContext.prototype.password = function() {
    return this.getTypedRuleContext(PasswordContext,0);
};

UserContext.prototype.biography = function() {
    return this.getTypedRuleContext(BiographyContext,0);
};

UserContext.prototype.course = function() {
    return this.getTypedRuleContext(CourseContext,0);
};

UserContext.prototype.year = function() {
    return this.getTypedRuleContext(YearContext,0);
};

UserContext.prototype.enterRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.enterUser(this);
	}
};

UserContext.prototype.exitRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.exitUser(this);
	}
};

UserContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usersVisitor ) {
        return visitor.visitUser(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usersParser.UserContext = UserContext;

usersParser.prototype.user = function() {

    var localctx = new UserContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, usersParser.RULE_user);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 21;
        this.match(usersParser.T__0);
        this.state = 22;
        this.name();
        this.state = 23;
        this.match(usersParser.T__1);
        this.state = 24;
        this.email();
        this.state = 25;
        this.match(usersParser.T__2);
        this.state = 26;
        this.password();
        this.state = 27;
        this.match(usersParser.T__3);
        this.state = 28;
        this.biography();
        this.state = 29;
        this.match(usersParser.T__4);
        this.state = 30;
        this.course();
        this.state = 31;
        this.match(usersParser.T__5);
        this.state = 32;
        this.year();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usersParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.STR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usersParser.STR);
    } else {
        return this.getToken(usersParser.STR, i);
    }
};


NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.exitName(this);
	}
};

NameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usersVisitor ) {
        return visitor.visitName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usersParser.NameContext = NameContext;

usersParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, usersParser.RULE_name);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 34;
            this.match(usersParser.STR);
            this.state = 37; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===usersParser.STR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EmailContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usersParser.RULE_email;
    return this;
}

EmailContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmailContext.prototype.constructor = EmailContext;

EmailContext.prototype.EMAIL = function() {
    return this.getToken(usersParser.EMAIL, 0);
};

EmailContext.prototype.enterRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.enterEmail(this);
	}
};

EmailContext.prototype.exitRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.exitEmail(this);
	}
};

EmailContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usersVisitor ) {
        return visitor.visitEmail(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usersParser.EmailContext = EmailContext;

usersParser.prototype.email = function() {

    var localctx = new EmailContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, usersParser.RULE_email);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 39;
        this.match(usersParser.EMAIL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PasswordContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usersParser.RULE_password;
    return this;
}

PasswordContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PasswordContext.prototype.constructor = PasswordContext;

PasswordContext.prototype.PASS = function() {
    return this.getToken(usersParser.PASS, 0);
};

PasswordContext.prototype.enterRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.enterPassword(this);
	}
};

PasswordContext.prototype.exitRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.exitPassword(this);
	}
};

PasswordContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usersVisitor ) {
        return visitor.visitPassword(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usersParser.PasswordContext = PasswordContext;

usersParser.prototype.password = function() {

    var localctx = new PasswordContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, usersParser.RULE_password);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 41;
        this.match(usersParser.PASS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BiographyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usersParser.RULE_biography;
    return this;
}

BiographyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BiographyContext.prototype.constructor = BiographyContext;

BiographyContext.prototype.STR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usersParser.STR);
    } else {
        return this.getToken(usersParser.STR, i);
    }
};


BiographyContext.prototype.enterRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.enterBiography(this);
	}
};

BiographyContext.prototype.exitRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.exitBiography(this);
	}
};

BiographyContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usersVisitor ) {
        return visitor.visitBiography(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usersParser.BiographyContext = BiographyContext;

usersParser.prototype.biography = function() {

    var localctx = new BiographyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, usersParser.RULE_biography);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 44; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 43;
            this.match(usersParser.STR);
            this.state = 46; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===usersParser.STR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CourseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usersParser.RULE_course;
    return this;
}

CourseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CourseContext.prototype.constructor = CourseContext;

CourseContext.prototype.STR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(usersParser.STR);
    } else {
        return this.getToken(usersParser.STR, i);
    }
};


CourseContext.prototype.enterRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.enterCourse(this);
	}
};

CourseContext.prototype.exitRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.exitCourse(this);
	}
};

CourseContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usersVisitor ) {
        return visitor.visitCourse(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usersParser.CourseContext = CourseContext;

usersParser.prototype.course = function() {

    var localctx = new CourseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, usersParser.RULE_course);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 49; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 48;
            this.match(usersParser.STR);
            this.state = 51; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===usersParser.STR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function YearContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = usersParser.RULE_year;
    return this;
}

YearContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
YearContext.prototype.constructor = YearContext;

YearContext.prototype.NUM = function() {
    return this.getToken(usersParser.NUM, 0);
};

YearContext.prototype.enterRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.enterYear(this);
	}
};

YearContext.prototype.exitRule = function(listener) {
    if(listener instanceof usersListener ) {
        listener.exitYear(this);
	}
};

YearContext.prototype.accept = function(visitor) {
    if ( visitor instanceof usersVisitor ) {
        return visitor.visitYear(this);
    } else {
        return visitor.visitChildren(this);
    }
};




usersParser.YearContext = YearContext;

usersParser.prototype.year = function() {

    var localctx = new YearContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, usersParser.RULE_year);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 53;
        this.match(usersParser.NUM);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.usersParser = usersParser;

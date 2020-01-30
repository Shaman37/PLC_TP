// Generated from /home/shaman/Desktop/PRI_TP/server/grammar/users.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class usersParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, STR=7, NUM=8, EMAIL=9, 
		PASS=10, WS=11;
	public static final int
		RULE_users = 0, RULE_user = 1, RULE_name = 2, RULE_email = 3, RULE_password = 4, 
		RULE_biography = 5, RULE_course = 6, RULE_year = 7;
	public static final String[] ruleNames = {
		"users", "user", "name", "email", "password", "biography", "course", "year"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'NAME:'", "'EMAIL:'", "'PASSWORD:'", "'BIOGRAPHY:'", "'COURSE:'", 
		"'YEAR:'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, "STR", "NUM", "EMAIL", "PASS", 
		"WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "users.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public usersParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class UsersContext extends ParserRuleContext {
		public List<UserContext> user() {
			return getRuleContexts(UserContext.class);
		}
		public UserContext user(int i) {
			return getRuleContext(UserContext.class,i);
		}
		public UsersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_users; }
	}

	public final UsersContext users() throws RecognitionException {
		UsersContext _localctx = new UsersContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_users);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(17); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(16);
				user();
				}
				}
				setState(19); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==T__0 );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UserContext extends ParserRuleContext {
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public EmailContext email() {
			return getRuleContext(EmailContext.class,0);
		}
		public PasswordContext password() {
			return getRuleContext(PasswordContext.class,0);
		}
		public BiographyContext biography() {
			return getRuleContext(BiographyContext.class,0);
		}
		public CourseContext course() {
			return getRuleContext(CourseContext.class,0);
		}
		public YearContext year() {
			return getRuleContext(YearContext.class,0);
		}
		public UserContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_user; }
	}

	public final UserContext user() throws RecognitionException {
		UserContext _localctx = new UserContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_user);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			match(T__0);
			setState(22);
			name();
			setState(23);
			match(T__1);
			setState(24);
			email();
			setState(25);
			match(T__2);
			setState(26);
			password();
			setState(27);
			match(T__3);
			setState(28);
			biography();
			setState(29);
			match(T__4);
			setState(30);
			course();
			setState(31);
			match(T__5);
			setState(32);
			year();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NameContext extends ParserRuleContext {
		public List<TerminalNode> STR() { return getTokens(usersParser.STR); }
		public TerminalNode STR(int i) {
			return getToken(usersParser.STR, i);
		}
		public NameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name; }
	}

	public final NameContext name() throws RecognitionException {
		NameContext _localctx = new NameContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(34);
				match(STR);
				}
				}
				setState(37); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==STR );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmailContext extends ParserRuleContext {
		public TerminalNode EMAIL() { return getToken(usersParser.EMAIL, 0); }
		public EmailContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_email; }
	}

	public final EmailContext email() throws RecognitionException {
		EmailContext _localctx = new EmailContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_email);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			match(EMAIL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PasswordContext extends ParserRuleContext {
		public TerminalNode PASS() { return getToken(usersParser.PASS, 0); }
		public PasswordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_password; }
	}

	public final PasswordContext password() throws RecognitionException {
		PasswordContext _localctx = new PasswordContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_password);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(41);
			match(PASS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BiographyContext extends ParserRuleContext {
		public List<TerminalNode> STR() { return getTokens(usersParser.STR); }
		public TerminalNode STR(int i) {
			return getToken(usersParser.STR, i);
		}
		public BiographyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_biography; }
	}

	public final BiographyContext biography() throws RecognitionException {
		BiographyContext _localctx = new BiographyContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_biography);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(44); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(43);
				match(STR);
				}
				}
				setState(46); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==STR );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CourseContext extends ParserRuleContext {
		public List<TerminalNode> STR() { return getTokens(usersParser.STR); }
		public TerminalNode STR(int i) {
			return getToken(usersParser.STR, i);
		}
		public CourseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_course; }
	}

	public final CourseContext course() throws RecognitionException {
		CourseContext _localctx = new CourseContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_course);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(49); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(48);
				match(STR);
				}
				}
				setState(51); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==STR );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class YearContext extends ParserRuleContext {
		public TerminalNode NUM() { return getToken(usersParser.NUM, 0); }
		public YearContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_year; }
	}

	public final YearContext year() throws RecognitionException {
		YearContext _localctx = new YearContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_year);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			match(NUM);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\r:\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\3\2\6\2\24\n\2\r\2"+
		"\16\2\25\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\6\4&"+
		"\n\4\r\4\16\4\'\3\5\3\5\3\6\3\6\3\7\6\7/\n\7\r\7\16\7\60\3\b\6\b\64\n"+
		"\b\r\b\16\b\65\3\t\3\t\3\t\2\2\n\2\4\6\b\n\f\16\20\2\2\2\65\2\23\3\2\2"+
		"\2\4\27\3\2\2\2\6%\3\2\2\2\b)\3\2\2\2\n+\3\2\2\2\f.\3\2\2\2\16\63\3\2"+
		"\2\2\20\67\3\2\2\2\22\24\5\4\3\2\23\22\3\2\2\2\24\25\3\2\2\2\25\23\3\2"+
		"\2\2\25\26\3\2\2\2\26\3\3\2\2\2\27\30\7\3\2\2\30\31\5\6\4\2\31\32\7\4"+
		"\2\2\32\33\5\b\5\2\33\34\7\5\2\2\34\35\5\n\6\2\35\36\7\6\2\2\36\37\5\f"+
		"\7\2\37 \7\7\2\2 !\5\16\b\2!\"\7\b\2\2\"#\5\20\t\2#\5\3\2\2\2$&\7\t\2"+
		"\2%$\3\2\2\2&\'\3\2\2\2\'%\3\2\2\2\'(\3\2\2\2(\7\3\2\2\2)*\7\13\2\2*\t"+
		"\3\2\2\2+,\7\f\2\2,\13\3\2\2\2-/\7\t\2\2.-\3\2\2\2/\60\3\2\2\2\60.\3\2"+
		"\2\2\60\61\3\2\2\2\61\r\3\2\2\2\62\64\7\t\2\2\63\62\3\2\2\2\64\65\3\2"+
		"\2\2\65\63\3\2\2\2\65\66\3\2\2\2\66\17\3\2\2\2\678\7\n\2\28\21\3\2\2\2"+
		"\6\25\'\60\65";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
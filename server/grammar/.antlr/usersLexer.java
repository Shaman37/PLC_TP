// Generated from /home/shaman/Desktop/PRI_TP/server/grammar/users.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class usersLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, STR=7, NUM=8, EMAIL=9, 
		PASS=10, WS=11;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "STR", "NUM", "EMAIL", 
		"PASS", "WS"
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


	public usersLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "users.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2\rp\b\1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\4\3"+
		"\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5"+
		"\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\7\3\7\3\b\6"+
		"\bK\n\b\r\b\16\bL\3\t\6\tP\n\t\r\t\16\tQ\3\n\6\nU\n\n\r\n\16\nV\3\n\3"+
		"\n\6\n[\n\n\r\n\16\n\\\3\n\3\n\6\na\n\n\r\n\16\nb\3\13\6\13f\n\13\r\13"+
		"\16\13g\3\f\6\fk\n\f\r\f\16\fl\3\f\3\f\2\2\r\3\3\5\4\7\5\t\6\13\7\r\b"+
		"\17\t\21\n\23\13\25\f\27\r\3\2\b\4\2C\\c|\3\2\62;\7\2/\60\62;C\\aac|\3"+
		"\2BB\3\2\60\60\5\2\13\f\17\17\"\"\2v\2\3\3\2\2\2\2\5\3\2\2\2\2\7\3\2\2"+
		"\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23"+
		"\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\3\31\3\2\2\2\5\37\3\2\2\2\7&\3\2\2"+
		"\2\t\60\3\2\2\2\13;\3\2\2\2\rC\3\2\2\2\17J\3\2\2\2\21O\3\2\2\2\23T\3\2"+
		"\2\2\25e\3\2\2\2\27j\3\2\2\2\31\32\7P\2\2\32\33\7C\2\2\33\34\7O\2\2\34"+
		"\35\7G\2\2\35\36\7<\2\2\36\4\3\2\2\2\37 \7G\2\2 !\7O\2\2!\"\7C\2\2\"#"+
		"\7K\2\2#$\7N\2\2$%\7<\2\2%\6\3\2\2\2&\'\7R\2\2\'(\7C\2\2()\7U\2\2)*\7"+
		"U\2\2*+\7Y\2\2+,\7Q\2\2,-\7T\2\2-.\7F\2\2./\7<\2\2/\b\3\2\2\2\60\61\7"+
		"D\2\2\61\62\7K\2\2\62\63\7Q\2\2\63\64\7I\2\2\64\65\7T\2\2\65\66\7C\2\2"+
		"\66\67\7R\2\2\678\7J\2\289\7[\2\29:\7<\2\2:\n\3\2\2\2;<\7E\2\2<=\7Q\2"+
		"\2=>\7W\2\2>?\7T\2\2?@\7U\2\2@A\7G\2\2AB\7<\2\2B\f\3\2\2\2CD\7[\2\2DE"+
		"\7G\2\2EF\7C\2\2FG\7T\2\2GH\7<\2\2H\16\3\2\2\2IK\t\2\2\2JI\3\2\2\2KL\3"+
		"\2\2\2LJ\3\2\2\2LM\3\2\2\2M\20\3\2\2\2NP\t\3\2\2ON\3\2\2\2PQ\3\2\2\2Q"+
		"O\3\2\2\2QR\3\2\2\2R\22\3\2\2\2SU\t\4\2\2TS\3\2\2\2UV\3\2\2\2VT\3\2\2"+
		"\2VW\3\2\2\2WX\3\2\2\2XZ\t\5\2\2Y[\t\4\2\2ZY\3\2\2\2[\\\3\2\2\2\\Z\3\2"+
		"\2\2\\]\3\2\2\2]^\3\2\2\2^`\t\6\2\2_a\t\2\2\2`_\3\2\2\2ab\3\2\2\2b`\3"+
		"\2\2\2bc\3\2\2\2c\24\3\2\2\2df\t\4\2\2ed\3\2\2\2fg\3\2\2\2ge\3\2\2\2g"+
		"h\3\2\2\2h\26\3\2\2\2ik\t\7\2\2ji\3\2\2\2kl\3\2\2\2lj\3\2\2\2lm\3\2\2"+
		"\2mn\3\2\2\2no\b\f\2\2o\30\3\2\2\2\n\2LQV\\bgl\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
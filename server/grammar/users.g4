grammar users;

//Lexer
STR : [a-zA-Z]+;
NUM: [0-9]+;
EMAIL: ([a-zA-Z0-9._-]+[@][a-zA-Z0-9._-]+[.][a-zA-Z]+);
PASS: [a-zA-Z0-9._-]+;
WS : [ \t\n\r]+ -> skip ;

//Parser

users : user+
      ;

user : 'NAME:' name 'EMAIL:' email 'PASSWORD:' password 'BIOGRAPHY:' biography 'COURSE:' course 'YEAR:' year
     ;

name : STR+
     ;

email : EMAIL
      ;

password : PASS
         ;

biography : STR+
          ;

course : STR+
       ;

year : NUM
     ;
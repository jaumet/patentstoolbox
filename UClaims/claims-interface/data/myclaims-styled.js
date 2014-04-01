MYSHORTNAMES = 
{
  "raw": "Raw text: showing the claim as it is. no intervention.",
  "seg1": "Segmantation 1: showing preamble and body of the cliam",
  "seg2": "Segmantation 2: showing preamble, transition and body of the claim",
  "indent": "Indentation: showing indented preamble, transition and body of the claim",
  "numbers": "Numbers: ",
  "bars": "Bars: "
};

MYTABLES =
{'case1': '<p>List of claims:</p>\
        <table id="myclaimslist">\
          <tr>\
            <td></td>\
            <td class="claim">Claim 1</td>\
            <td class="claim">Claim 2</td>\
            <td class="claim">Claim 3</td>\
          <tr/>\
          <tr>\
            <td class="kind">Raw</td>\
            <td><a id="1-raw" href="#">X</a></td>\
            <td><a id="2-raw" href="#">X</a></td>\
            <td><a id="3-raw" href="#">X</a></td>\
          </tr>\
            <td class="kind">Segment1</td>\
            <td><a id="1-seg1" href="#">X</a></td>\
            <td><a id="2-seg1" href="#">X</a></td>\
            <td><a id="3-seg1" href="#">X</a></td>\
          </tr>\
            <td class="kind">Segment2</td>\
            <td><a id="1-seg2" href="#">X</a></td>\
            <td><a id="2-seg2" href="#">X</a></td>\
            <td><a id="3-seg2" href="#">X</a></td>\
          </tr>\
            <td class="kind">Indent</td>\
            <td><a id="1-indent" href="#">X</a></td>\
            <td><a id="2-indent" href="#">X</a></td>\
            <td><a id="3-indent" href="#">X</a></td>\
          </tr>\
            <td class="kind">Numered</td>\
            <td><a id="1-numbers" href="#">X</a></td>\
            <td><a id="2-numbers" href="#">X</a></td>\
            <td><a id="3-numbers" href="#">X</a></td>\
          </tr>\
            <td class="kind">Graphic</td>\
            <td><a id="1-bars" href="#">X</a></td>\
            <td><a id="2-bars" href="#">X</a></td>\
            <td><a id="3-bars" href="#">X</a></td>\
          </tr>\
        </table>',
  'case2': 'case 2',
  'case3': 'case 3',
};

MYDEFAULT = 
  {'all': '<h3>Welcome and directions notes here</h3>\
        <!-- start slipsum code -->\
        <p>Now that we know who you are, I know who I am. I\'m not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain\'s going to be? He\'s the exact opposite of the hero. And most times they\'re friends, like you and me! I should\'ve known way back when... You know why, David? Because of the kids. They called me Mr Glass. </p>\
        <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that\'s what you see at a toy store. And you must think you\'re in a toy store, because you\'re here shopping for an infant named Jeb. </p>\
        <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don\'t know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I\'m breaking now. We said we\'d say it was the snow that killed the other two, but it wasn\'t. Nature is lethal but it doesn\'t hold a candle to man. </p>\
        <!-- please do not remove this line -->\
        <div style="display:none;">\
        <a href="http://slipsum.com">lorem ipsum</a></div>\
        <!-- end slipsum code -->',
  'case1': '<h3>Explanation of case 1</h3><p>Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?</p>',
  'case2': '<h3>Explanation of case 2</h3><p>Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?</p>',
  'case3': '<h3>Explanation of case 3</h3><p>Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?</p>'};

MYCLAIMS =
[
  {'empty': 'empty'},
  {
    'raw':'<table><tr><td id="myraw">RAW CLAIM</td><td><p>A method for manufacturing the bevel gear member (as defined in CLaim 1) wherein the step of forming gear teeth uses gear cutter blades each including: a shank and a cutting member having a cutting edge having a first section extending from a distal end of said shank at a given axial pressure angle and dimensioned to cut at least one of side profiles of said gear teeth of said bevel gear blank and a second section substantially perpendicular to a central axis of said cutter blade and dimensioned to cut at least a substantial portion of a top land of said gear teeth so that each of said gear cutter blades forms at least a substantial portion of said top land of said teeth of said bevel gear member simultaneously with said side profile thereof.</p></td></tr></table>',
    'seg1':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td>\
                  <p>A method for manufacturing the bevel gear member (as defined in Claim 1)\
                </td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td>\
                  <p>wherein</p>\
                </td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY</td>\
                <td>\
                  <p>the step of forming gear teeth uses gear cutter blades each including: a shank and a cutting member having a cutting edge having a first section extending from a distal end of said shank at a given axial pressure angle and dimensioned to cut at least one of side profiles of said gear teeth of said bevel gear blank and a second section substantially perpendicular to a central axis of said cutter blade and dimensioned to cut at least a substantial portion of a top land of said gear teeth so that each of said gear cutter blades forms at least a substantial portion of said top land of said teeth of said bevel gear member simultaneously with said side profile thereof.\
                </td>\
              </tr>\
            </table>',
    'seg2':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td>\
                  <p>A method\
                  <br />for manufacturing the bevel gear member (as defined in Claim 1)\
                  </p> \
                </td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td>\
                  <p>wherein</p>\
                </td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY</td>\
                <td>\
                  <p>the step of forming gear teeth uses gear cutter blades each including:\
                    <br />a shank and a cutting member\
                    <br />having a cutting edge\
                    <br />having a first section\
                    <br />extending from a distal end of said shank at a given axial pressure angle\
                    <br />and dimensioned to cut at least one of side profiles of said gear teeth of said bevel gear blank\
                    <br />and a second section\
                    <br />substantially perpendicular to a central axis of said cutter blade\
                    <br />and dimensioned to cut at least a substantial portion of a top land of said gear teeth\
                  <br />so that each of said gear cutter blades forms at least a substantial portion of said top land of said teeth of said bevel gear member simultaneously with said side profile thereof.\
                </td>\
              </tr>\
            </table>',
    'indent':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td>\
                  <p>A method\
                  <br /> \
                  for manufacturing the bevel gear member\
                  <br />\
                  &nbsp;&nbsp;&nbsp;&nbsp;(as defined in Claim 1)\
                  </p> \
                </td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td>\
                  <p>wherein</p>\
                </td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY</td>\
                <td>\
                  <p>the step of forming gear teeth uses gear cutter blades each including:</p>\
                  <ul>\
                    <li>a shank and a cutting member</li>\
                    <li>having a cutting edge</li>\
                    <li>having a first section</li>\
                    <li>extending from a distal end of said shank at a given axial pressure angle</li>\
                    <li>and dimensioned to cut at least one of side profiles of said gear teeth of said bevel gear blank</li>\
                    <li>and a second section</li>\
                    <li>substantially perpendicular to a central axis of said cutter blade</li>\
                    <li>and dimensioned to cut at least a substantial portion of a top land of said gear teeth</li>\
                  </ul>\
                  <p>so that each of said gear cutter blades forms at least a substantial portion of said top land of said teeth of said bevel gear member simultaneously with said side profile thereof.</p>\
                </td>\
              </tr>\
            </table>',
    'numbers':'lala NUMBERS',
    'bars':'lala BARS'
  }
];

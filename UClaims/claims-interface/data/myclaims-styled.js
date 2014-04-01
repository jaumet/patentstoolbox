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
            <td><a id="1-raw" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-raw" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="3-raw" href="#"><img src="images/eye.png" /></a></td>\
          </tr>\
            <td class="kind">Segment1</td>\
            <td><a id="1-seg1" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-seg1" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="3-seg1" href="#"><img src="images/eye.png" /></a></td>\
          </tr>\
            <td class="kind">Segment2</td>\
            <td><a id="1-seg2" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-seg2" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="3-seg2" href="#"><img src="images/eye.png" /></a></td>\
          </tr>\
            <td class="kind">Indent</td>\
            <td><a id="1-indent" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-indent" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="3-indent" href="#"><img src="images/eye.png" /></a></td>\
          </tr>\
            <td class="kind">Numered</td>\
            <td><a id="1-numbers" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-numbers" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="3-numbers" href="#"><img src="images/eye.png" /></a></td>\
          </tr>\
            <td class="kind">Graphic</td>\
            <td><a id="1-bars" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-bars" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="3-bars" href="#"><img src="images/eye.png" /></a></td>\
          </tr>\
        </table>',
  'case2': 'case 2',
  'case3': 'case 3',
};

MYDEFAULT = 
  {'all': '<h3>Welcome and directions notes here</h3>\
        <!-- start slipsum code -->\
        <p>Now that we know who you are, I know who I am. I\'m not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain\'s going to be? He\'s the exact opposite of the hero. And most times they\'re friends, like you and me! I should\'ve known way back when... You know why, David? Because of the kids. They called me Mr Glass. </p>\
        <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that\'s what you see at a toy store. And you must think you\'re in a toy store, because you\'re here shopping for an infant named Jeb. </p>',
  'case1': '<h3>Explanation of case 1</h3><p>Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?</p>',
  'case2': '<h3>Explanation of case 2</h3><p>Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?</p>',
  'case3': '<h3>Explanation of case 3</h3><p>Look, just because I don\'t be givin\' no man a foot massage don\'t make it right for Marsellus to throw Antwone into a glass motherfuckin\' house, fuckin\' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, \'cause I\'ll kill the motherfucker, know what I\'m sayin\'?</p>'};

MYCLAIMS =
[
  {'empty': 'empty'},
  {
    'name':'Patent ID: EP0019018A1_claim_4',
    'raw':'<table><tr><td id="myraw">RAW CLAIM</td><td>\
      A boring tool characterised in that the head lies within a cylindrical cavity extending inwardly from one end of the body member, the open end of the cavity being closed by a plug which backs a frusto-conical pressure pad supporting the cutter blades.\
      <p></p></td></tr></table>',
    'seg1':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td>\
                  <p>A boring tool\
                </td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td>\
                  <p>characterised in that</p>\
                </td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY</td>\
                <td><p>\
                  the head lies within a cylindrical cavity extending inwardly from one end of the body member, the open end of the cavity being closed by a plug which backs a frusto-conical pressure pad supporting the cutter blades.\
                </p></td>\
              </tr>\
            </table>',
    'seg2':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p>\
                  A boring tool\
                </p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p>\
                  characterised in that\
                </p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY</td>\
                <td><p>\
                  the head lies within a cylindrical cavity \
                  <br />extending inwardly from one end of the body member, \
                  <br />the open end of the cavity being closed by a plug \
                  <br />which backs a frusto-conical pressure pad \
                  <br />supporting the cutter blades.\
                  </p>\
                </td>\
              </tr>\
            </table>',
    'indent':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p>\
                  A boring tool\
                </p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p><span style="padding-left: 20px;"></span>characterised in that</p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY</td>\
                <td><p>\
                  <span style="padding-left: 40px;"></span>the head lies within a cylindrical cavity \
                  <br /><span  style="padding-left: 60px;"></span>extending inwardly from one end of the body member, \
                  <br /><span  style="padding-left: 40px;"></span>the open end of the cavity being closed by a plug \
                  <br /><span  style="padding-left: 60px;"></span>which backs a frusto-conical pressure pad \
                  <br /><span  style="padding-left: 80px;"></span>supporting the cutter blades.\
                  </p>\
                </td>\
              </tr>\
            </table>',
    'numbers':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p><span class="numbers" style="padding-right: 2px;">1-</span> A boring tool</p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p><span class="numbers" style="padding-right: 20px;">--></span><span class="numberstransition">characterised in that</span></p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY</td>\
                <td><p>\
                  <span class="numbers" style="padding-right: 40px;">1.1-</span>the head lies within a cylindrical cavity \
                  <br /><span class="numbers" style="padding-right: 60px;">1.1.1-</span>extending inwardly from one end of the body member, \
                  <br /><span class="numbers" style="padding-right: 40px;">1.1.2-</span>the open end of the cavity being closed by a plug \
                  <br /><span class="numbers" style="padding-right: 60px;">1.2-</span>which backs a frusto-conical pressure pad \
                  <br /><span class="numbers" style="padding-right: 80px;">1.2.1-</span>supporting the cutter blades.\
                  </p>\
                </td>\
              </tr>\
            </table>',
    'bars':'lala BARS'
  }
];

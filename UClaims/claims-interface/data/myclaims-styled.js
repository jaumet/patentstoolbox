MYSHORTNAMES = 
{
  "raw": "Raw text: showing the claim as it is in the original patent document.",
  "seg1": "Segmenting the claim text to the following three parts: Preamble, Transition, and Body text",
  "seg2": "Segmenting the claim text first to the Preamble, Transition, and Body text and then dividing long sentences to shorter phrases",
  "indent": "Segmenting the claim text first to the Preamble, Transition, and Body text, then dividing long sentences to shorter phrases, and finally indenting the phrases to reflect phrase dependences",
  "indent2": "Segmenting the claim text first to the Preamble, Transition, and Body text, second dividing long sentences to shorter phrases, third indenting the phrases to reflect phrase dependences, and finally adding grey bars to visualise this indentation.",
  "numbers": "Segmenting the claim text first to the Preamble, Transition, and Body text, second dividing long sentences to shorter phrases, third indenting the phrases to reflect phrase dependences, fourth adding grey bars to visualise this indentation, and finally,numbering the bars.",
  "barsbw": "Segmenting the claim text first to the Preamble, Transition, and Body text, second dividing long sentences to shorter phrases, third adding graphical bars to reflect both the indentation and phrase dependences.",
  "bars": "Segmenting the claim text first to the Preamble, Transition, and Body text, second dividing long sentences to shorter phrases, third adding colourful graphical bars to reflect both the indentation and phrase dependences.",
  "marked": 'Text marked with alerts and highlights.',
  "images": "Claim with related images."
};

MYTABLES =
{'case1': '<p>Test 1. Menu of claims and their visualisation options:</p>\
        <table id="myclaimslist">\
          <tr>\
            <td></td>\
            <td class="claim">Claim 1</td>\
            <td class="claim">Claim 2</td>\
          <tr/>\
          <tr><tr>\
            <td class="kind">Raw</td>\
            <td><a id="1-raw" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-raw" href="#"><img src="images/eye.png" /></a></td>\
          </tr><tr>\
            <td class="kind">Segmentation to 3 parts</td>\
            <td><a id="1-seg1" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-seg1" href="#"><img src="images/eye.png" /></a></td>\
          </tr><tr>\
            <td class="kind">Separation of phrases</td>\
            <td><a id="1-seg2" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-seg2" href="#"><img src="images/eye.png" /></a></td>\
          </tr><tr>\
            <td class="kind">Indentation only</td>\
            <td><a id="1-indent" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-indent" href="#"><img src="images/eye.png" /></a></td>\
          </tr><tr>\
            <td class="kind">Indentation with bars</td>\
            <td><a id="1-indent2" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-indent2" href="#"><img src="images/eye.png" /></a></td>\
          </tr><tr>\
            <td class="kind">Indentation with numbered bars</td>\
            <td><a id="1-numbers" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-numbers" href="#"><img src="images/eye.png" /></a></td>\
          </tr><tr>\
            <td class="kind">Indentation with graphical bars</td>\
            <td><a id="1-barsbw" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-barsbw" href="#"><img src="images/eye.png" /></a></td>\
          </tr><tr>\
            <td class="kind">Indentation with colourful graphical bars</td>\
            <td><a id="1-bars" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="2-bars" href="#"><img src="images/eye.png" /></a></td>\
          </tr>\
        </table>',
  'case2': '<p>Test 2. Menu of claims and their visualisation options:</p>\
        <table id="myclaimslist">\
          <tr>\
            <td></td>\
            <td class="claim">Claim 3</td>\
          <tr/>\
          <tr>\
            <td class="kind">Raw</td>\
            <td><a id="3-raw" href="#"><img src="images/eye.png" /></a></td>\
          </tr><tr>\
            <td class="kind">Marked</td>\
            <td><a id="3-marked" href="#"><img src="images/eye.png" /></a></td>\
          </tr>\
        </table>',
  'case3': '<p>Test 2. List of claims0:</p>\
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
          </tr><tr>\
            <td class="kind">Marked</td>\
            <td><a id="4-images" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="5-images" href="#"><img src="images/eye.png" /></a></td>\
            <td><a id="6-images" href="#"><img src="images/eye.png" /></a></td>\
          </tr>\
        </table>'
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
    'description':'TEST 1 + CLAIM 1',
    'name':'',
    'raw':'<table><tr><td id="myraw">RAW CLAIM</td><td>\
      A boring tool characterised in that the head lies within a cylindrical cavity extending inwardly from one end of the body member, the open end of the cavity being closed by a plug which backs a frusto-conical pressure pad supporting the cutter blades.\
      <p></p></td></tr></table>',
    'seg1':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p>\
                  A boring tool\
                  </p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td>\
                  <p>characterised in that</p>\
                </td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
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
                <td id="mybody">BODY TEXT</td>\
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
                <td id="mybody">BODY TEXT</td>\
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
    'indent2':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p><span class="numbers" style="padding-left: 40px;">&nbsp;</span> A boring tool</p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p><span class="numbers" style="padding-left: 40px;"><img src="images/chain.png" /></span><span class="numberstransition">characterised in that</span></p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
                <td><p>\
                  <span class="numbers" style="padding-left: 80px;">&nbsp;</span>the head lies within a cylindrical cavity \
                  <br /><span class="numbers" style="padding-left: 100px;">&nbsp;</span>extending inwardly from one end of the body member, \
                  <br /><span class="numbers" style="padding-left: 80px;">&nbsp;</span>the open end of the cavity being closed by a plug \
                  <br /><span class="numbers" style="padding-left: 100px;">&nbsp;</span>which backs a frusto-conical pressure pad&nbsp; \
                  <br /><span class="numbers" style="padding-left: 120px;">&nbsp;</span>supporting the cutter blades.\
                  </p>\
                </td>\
              </tr>\
            </table>',
    'numbers':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p><span class="numbers" style="width: 40px;">1&nbsp;</span> A boring tool</p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p><span class="numbers" style="width: 40px;"><img src="images/chain.png" /></span><span class="numberstransition">characterised in that</span></p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
                <td><p>\
                  <span class="numbers" style="width: 80px;">1 . 1</span>the head lies within a cylindrical cavity \
                  <br /><span class="numbers" style="width: 100px;">1 . 1 . 1</span>extending inwardly from one end of the body member, \
                  <br /><span class="numbers" style="width: 80px;">1 . 2</span>the open end of the cavity being closed by a plug \
                  <br /><span class="numbers" style="width: 100px;">1 . 2 . 1</span>which backs a frusto-conical pressure pad&nbsp; \
                  <br /><span class="numbers" style="width: 120px;">1 . 2 . 1 . 1</span>supporting the cutter blades.\
                  </p>\
                </td>\
              </tr>\
            </table>',
    'barsbw':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p><span class="bars bw-bars_pre" style="width: 135px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;A boring tool</p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p><span class="bars bw-bars_trans" style="width: 135px;">&nbsp;</span>&nbsp;<img src="images/chain.png" />&nbsp;&nbsp;<span class="numberstransition">characterised in that</span></p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
                <td><p>\
                  <span class="bars" style="width: 40px;">&nbsp;</span><span class="bars bw-bars_body" style="width: 80px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;the head lies within a cylindrical cavity \
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bw-bars_body_1" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;extending inwardly from one end of the body member, \
                  <br /><span class="bars" style="width: 40px;">&nbsp;</span><span class="bars bw-bars_body" style="width: 80px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;the open end of the cavity being closed by a plug \
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bw-bars_body_1" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;which backs a frusto-conical pressure pad \
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bw-bars_body_2" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;supporting the cutter blades.\
                  </p>\
                </td>\
              </tr>\
            </table>',
    'bars':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p><span class="bars bars_pre" style="width: 135px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;A boring tool</p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p><span class="bars bars_trans" style="width: 135px;">&nbsp;</span>&nbsp;<img src="images/chain.png" />&nbsp;&nbsp;<span class="numberstransition">characterised in that</span></p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
                <td><p>\
                  <span class="bars" style="width: 40px;">&nbsp;</span><span class="bars bars_body" style="width: 80px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;the head lies within a cylindrical cavity \
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bars_body_1" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;extending inwardly from one end of the body member, \
                  <br /><span class="bars" style="width: 40px;">&nbsp;</span><span class="bars bars_body" style="width: 80px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;the open end of the cavity being closed by a plug \
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bars_body_1" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;which backs a frusto-conical pressure pad \
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bars_body_2" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;supporting the cutter blades.\
                  </p>\
                </td>\
              </tr>\
            </table>'
  },
  {
    'description':'TEST 1 + CLAIM 2',
    'name':'',
    'raw':'<table><tr><td id="myraw">RAW CLAIM</td><td>\
      A throwaway insert comprising : an insert body formed in a polygonal shape;  a cutting face formed by a polygonal face of the insert body;  a corner cutting edge which is formed in a curved shape at a corner of the cutting face; a major cutting edge which is formed along a side edge of the cutting face that is connected to a first end of the corner cutting edge;  and a concave portion which is formed , in another side edge of the cutting face that is connected to a second end of the corner cutting edge, so as to be adjacent to the second end of the corner cutting edge, and so as to be made concave toward the inside of the cutting face from a tangent of the corner cutting edge drawn at the second end of the comer cutting edge. \
      <p></p></td></tr></table>',
    'seg1':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p>\
                A throwaway insert \
                </p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p>\
                comprising:\
                </p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
                <td><p>\
                  an insert body formed in a polygonal shape;  a cutting face formed by a polygonal face of the insert body;  a corner cutting edge which is formed in a curved shape at a corner of the cutting face; a major cutting edge which is formed along a side edge of the cutting face that is connected to a first end of the corner cutting edge;  and a concave portion which is formed , in another side edge of the cutting face that is connected to a second end of the corner cutting edge, so as to be adjacent to the second end of the corner cutting edge, and so as to be made concave toward the inside of the cutting face from a tangent of the corner cutting edge drawn at the second end of the comer cutting edge. \
                </p></td>\
              </tr>\
            </table>',
    'seg2':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p>\
                A throwaway insert\
                </p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p>\
                comprising:\
                </p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
                <td><p>\
                  an insert body formed in a polygonal shape; \
                  <br />a cutting face \
                  <br />formed by a polygonal face of the insert body ; \
                  <br />a corner cutting edge \
                  <br />which is formed in a curved shape at a corner of the cutting face ; \
                  <br />a major cutting edge \
                  <br />which is formed along a side edge of the cutting face \
                  <br />that is connected to a first end of the corner cutting edge ; \
                  <br />and a concave portion \
                  <br />which is formed , in another side edge of the cutting face \
                  <br />that is connected to a second end of the corner cutting edge, \
                  <br />so as to be adjacent to the second end of the corner cutting edge,\
                  <br />and so as to be made concave toward the inside of the cutting face from a tangent of the corner cutting edge \
                  <br />drawn at the second end of the comer cutting edge.\
                </p>\
                </td>\
              </tr>\
            </table>',
    'indent':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p>\
                A throwaway insert \
                </p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p><span style="padding-left: 20px;"></span>\
                comprising: \
                </p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
                <td><p>\
                  <span style="padding-left: 40px;"></span>\
                  an insert body formed in a polygonal shape; \
                  <br /><span  style="padding-left: 40px;"></span>a cutting face \
                  <br /><span  style="padding-left: 40px;"></span>formed by a polygonal face of the insert body ; \
                  <br /><span  style="padding-left: 60px;"></span>a corner cutting edge \
                  <br /><span  style="padding-left: 40px;"></span>which is formed in a curved shape at a corner of the cutting face ; \
                  <br /><span  style="padding-left: 60px;"></span>a major cutting edge \
                  <br /><span  style="padding-left: 40px;"></span>which is formed along a side edge of the cutting face \
                  <br /><span  style="padding-left: 60px;"></span>that is connected to a first end of the corner cutting edge ; \
                  <br /><span  style="padding-left: 80px;"></span>and a concave portion \
                  <br /><span  style="padding-left: 40px;"></span>which is formed , in another side edge of the cutting face \
                  <br /><span  style="padding-left: 60px;"></span>that is connected to a second end of the corner cutting edge, \
                  <br /><span  style="padding-left: 80px;"></span>so as to be adjacent to the second end of the corner cutting edge,\
                  <br /><span  style="padding-left: 100px;"></span>and so as to be made concave toward the inside of the cutting face from a tangent of the corner cutting edge \
                  <br /><span  style="padding-left: 40px;"></span>drawn at the second end of the comer cutting edge.\
                  </p>\
                </td>\
              </tr>\
            </table>',
    'indent2':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p><span class="numbers" style="padding-left: 40px;">&nbsp;</span>\
                A throwaway insert \
                </p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p><span class="numbers" style="padding-left: 40px;"><img src="images/chain.png" /></span><span class="numberstransition">\
                comprising: \
                </span></p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
                <td><p>\
                  <span class="numbers" style="padding-left: 80px;">&nbsp;</span>\
                  an insert body formed in a polygonal shape; \
                  <br /><span class="numbers" style="padding-left: 80px;">&nbsp;</span>\
                  a cutting face \
                  <br /><span class="numbers" style="padding-left: 100px;">&nbsp;</span>\
                  formed by a polygonal face of the insert body;\
                  <br /><span class="numbers" style="padding-left: 80px;">&nbsp;</span>\
                  a corner cutting edge\
                  <br /><span class="numbers" style="padding-left: 100px;">&nbsp;</span>\
                  which is formed in a curved shape at a corner of the cutting face;\
                  <br /><span class="numbers" style="padding-left: 80px;">&nbsp;</span>\
                  a major cutting edge\
                  <br /><span class="numbers" style="padding-left: 100px;">&nbsp;</span>\
                  which is formed along a side edge of the cutting face\
                  <br /><span class="numbers" style="padding-left: 120px;">&nbsp;</span>\
                  that is connected to a first end of the corner cutting edge;\
                  <br /><span class="numbers" style="padding-left: 80px;">&nbsp;</span>\
                  and a concave portion\
                  <br /><span class="numbers" style="padding-left: 100px;">&nbsp;</span>\
                  which is formed , in another side edge of the cutting face\
                  <br /><span class="numbers" style="padding-left: 120px;">&nbsp;</span>\
                  that is connected to a second end of the corner cutting edge,\
                  <br /><span class="numbers" style="padding-left: 140px;">&nbsp;</span>\
                  so as to be adjacent to the second end of the corner cutting edge,\
                  <br /><span class="numbers" style="padding-left: 140px;">&nbsp;</span>\
                  and so as to be made concave toward the inside of the cutting face from a tangent of the corner cutting edge\
                  <br /><span class="numbers" style="padding-left: 100px;">&nbsp;</span>\
                  drawn at the second end of the comer cutting edge.\
                  </p>\
                </td>\
              </tr>\
            </table>',
    'numbers':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p><span class="numbers" style="width: 40px;">1&nbsp;</span>\
                A throwaway insert \
                </p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p><span class="numbers" style="width: 40px;"><img src="images/chain.png" /></span><span class="numberstransition">\
                comprising: \
                </span></p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
                <td><p>\
                  <span class="numbers" style="width: 80px;">1 . 1</span>\
                  an insert body formed in a polygonal shape; \
                  <br /><span class="numbers" style="width: 80px;">1 . 2</span>\
                  a cutting face \
                  <br /><span class="numbers" style="width: 100px;">1 . 2 . 1</span>\
                  formed by a polygonal face of the insert body;\
                  <br /><span class="numbers" style="width: 80px;">1 . 3</span>\
                  a corner cutting edge\
                  <br /><span class="numbers" style="width: 100px;">1 . 3 . 1</span>\
                  which is formed in a curved shape at a corner of the cutting face;\
                  <br /><span class="numbers" style="width: 80px;">1 . 4</span>\
                  a major cutting edge\
                  <br /><span class="numbers" style="width: 100px;">1 . 4 . 1</span>\
                  which is formed along a side edge of the cutting face\
                  <br /><span class="numbers" style="width: 120px;">1 . 4 . 1 . 1</span>\
                  that is connected to a first end of the corner cutting edge;\
                  <br /><span class="numbers" style="width: 80px;">1 . 5</span>\
                  and a concave portion\
                  <br /><span class="numbers" style="width: 100px;">1 . 5 . 1</span>\
                  which is formed , in another side edge of the cutting face\
                  <br /><span class="numbers" style="width: 120px;">1 . 5 . 1 . 1</span>\
                  that is connected to a second end of the corner cutting edge,\
                  <br /><span class="numbers" style="width: 140px;">1 . 5 . 1 . 1 . 1</span>\
                  so as to be adjacent to the second end of the corner cutting edge,\
                  <br /><span class="numbers" style="width: 140px;">1 . 5 . 1 . 1 . 2</span>\
                  and so as to be made concave toward the inside of the cutting face from a tangent of the corner cutting edge\
                  <br /><span class="numbers" style="width: 100px;">1 . 5 . 2</span>\
                  drawn at the second end of the comer cutting edge.\
                  </p>\
                </td>\
              </tr>\
            </table>',
    'barsbw':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p><span class="bars bw-bars_pre" style="width: 135px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                A throwaway insert \
                </p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p><span class="bars bw-bars_trans" style="width: 135px;">&nbsp;</span>&nbsp;<img src="images/chain.png" />&nbsp;&nbsp;<span class="numberstransition">\
                comprising:\
                </span></p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
                <td><p>\
                  <span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bw-bars_body" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  an insert body formed in a polygonal shape; \
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bw-bars_body" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  a cutting face \
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bw-bars_body_1" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  formed by a polygonal face of the insert body;\
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bw-bars_body" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  a corner cutting edge\
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bw-bars_body_1" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  which is formed in a curved shape at a corner of the cutting face;\
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bw-bars_body" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  a major cutting edge\
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bw-bars_body_1" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  which is formed along a side edge of the cutting face\
                  <br /><span class="bars" style="width: 100px;">&nbsp;</span><span class="bars bw-bars_body_2" style="width: 20px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  that is connected to a first end of the corner cutting edge;\
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bw-bars_body" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  and a concave portion\
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bw-bars_body_1" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  which is formed , in another side edge of the cutting face\
                  <br /><span class="bars" style="width: 100px;">&nbsp;</span><span class="bars bw-bars_body_2" style="width: 20px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  that is connected to a second end of the corner cutting edge,\
                  <br /><span class="bars" style="width: 110px;">&nbsp;</span><span class="bars bw-bars_body_3" style="width: 10px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  so as to be adjacent to the second end of the corner cutting edge,\
                  <br /><span class="bars" style="width: 110px;">&nbsp;</span><span class="bars bw-bars_body_3" style="width: 10px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  and so as to be made concave toward the inside of the cutting face from a tangent of the corner cutting edge\
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bw-bars_body_1" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  drawn at the second end of the comer cutting edge.\
                  </p>\
                </td>\
              </tr>\
            </table>',
    'bars':'<table>\
              <tr>\
                <td id="mypreamble">PREAMBLE</td>\
                <td><p><span class="bars bars_pre" style="width: 135px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                A throwaway insert \
                </p></td>\
              </tr>\
              <tr>\
                <td id="mytransition">TRANSITION</td>\
                <td><p><span class="bars bars_trans" style="width: 135px;">&nbsp;</span>&nbsp;<img src="images/chain.png" />&nbsp;&nbsp;<span class="numberstransition">\
                comprising:\
                </span></p></td>\
              </tr>\
              <tr>\
                <td id="mybody">BODY TEXT</td>\
                <td><p>\
                  <span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bars_body" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  an insert body formed in a polygonal shape; \
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bars_body" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  a cutting face \
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bars_body_1" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  formed by a polygonal face of the insert body;\
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bars_body" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  a corner cutting edge\
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bars_body_1" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  which is formed in a curved shape at a corner of the cutting face;\
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bars_body" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  a major cutting edge\
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bars_body_1" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  which is formed along a side edge of the cutting face\
                  <br /><span class="bars" style="width: 100px;">&nbsp;</span><span class="bars bars_body_2" style="width: 20px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  that is connected to a first end of the corner cutting edge;\
                  <br /><span class="bars" style="width: 60px;">&nbsp;</span><span class="bars bars_body" style="width: 60px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  and a concave portion\
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bars_body_1" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  which is formed , in another side edge of the cutting face\
                  <br /><span class="bars" style="width: 100px;">&nbsp;</span><span class="bars bars_body_2" style="width: 20px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  that is connected to a second end of the corner cutting edge,\
                  <br /><span class="bars" style="width: 110px;">&nbsp;</span><span class="bars bars_body_3" style="width: 10px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  so as to be adjacent to the second end of the corner cutting edge,\
                  <br /><span class="bars" style="width: 110px;">&nbsp;</span><span class="bars bars_body_3" style="width: 10px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  and so as to be made concave toward the inside of the cutting face from a tangent of the corner cutting edge\
                  <br /><span class="bars" style="width: 80px;">&nbsp;</span><span class="bars bars_body_1" style="width: 40px;">&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;\
                  drawn at the second end of the comer cutting edge.\
                  </p>\
                </td>\
              </tr>\
            </table>'
  },
  {  ////////////////////////////////// TEST 2
    'description':'TEST 2 + CLAIM 3 raw',
    'name':'',
    'raw':'<table><tr><td id="myraw">RAW CLAIM</td><td>\
      Toolholder, which could comprise of a holder body with an insert site at its forward end consisting essentially of a bottom surface and at least one side wall where there projects a pin from said bottom surface upon which there is located an insert having a central bore, clamping wedge for wedging engagement between a support surface of the holder and an adjacent edge surface of said insert and an actuating screw received in said wedge whilst threadably engaged in a bore of said holder, said support surface and said edge surface are at least partially converging downwards said wedge clamp having distantly provided protrusions for abutment against the top face and the edge surface of said insert, characterized in that the wedge consists of a pair of distantly provided first protrusions for abutment against a top face of the insert, and a pair of distantly provided second protrusions for abutment against   an adjacent edge surface.\
      <p></p></td></tr></table>',
    'marked':'<table><tr><td id="myraw">MARKED CLAIM</td><td>\
      Toolholder, which <span title="This word may cause a problem to define the actual scope of the invention" class="test3 test3_voc5">could</span> <span title="Having at least the following elements/steps" class="test3 test3_voc1">comprise</span> of a holder body with an insert site at its forward end <span title="Some additional elements/steps may be employed without infringement" class="test3 test3_voc2">consisting essentially of</span a bottom surface and at least one side wall where there projects a pin from <span title="Refers to a component that is optional" class="test3 test3_voc4">said</span> bottom surface upon which there is located  an insert having a central bore, clamping wedge for wedging engagement between a support surface of the holder and an adjacent edge surface of <span title="Refers to a component that is optional" class="test3 test3_voc4">said</span> insert and an actuating screw received in <span title="Refers to a component that is optional" class="test3 test3_voc4">said</span> wedge whilst threadably engaged in a bore of <span title="Refers to a component that is optional" class="test3 test3_voc4">said</span> holder, <span title="Refers to a component that is optional" class="test3 test3_voc4">said</span> support surface and <span title="Refers to a component that is optional" class="test3 test3_voc4">said</span> edge surface are at least partially converging downwards <span title="Refers to a component that is optional" class="test3 test3_voc4">said</span> wedge clamp having distantly provided protrusions for abutment against the top face and the edge surface of <span title="Refers to a component that is optional" class="test3 test3_voc4">said</span> insert, <span title="Having at least the following elements/steps" class="test3 test3_voc1">characterized</span> in that the wedge <span title="Having all and only the following elements/steps" class="test3 test3_voc3">consists of</span> a pair of distantly provided first protrusions for abutment against a top face of the insert, and a pair of distantly provided second protrusions for abutment against an adjacent edge surface.\
      <p></p></td></tr></table>\
      <p class="legend">Legend:<br /><span class="test3 test3_voc1">Open transition</span>: having at least the following elements/steps.<br />\
      <span class="test3 test3_voc2">Hybrid transition</span>: some additional elements/steps may be employed without infringement.<br />\
      <span class="test3 test3_voc3">Closed transition</span>: having all and only the following elements/steps.<br />\
      <span class="test3 test3_voc4">Claim phrase</span>: refers to a component that is optional.<br />\
      <span class="test3 test3_voc5">Warning</span>: this word may cause a problem to define the actual scope of the invention.</p>'
  },
  { ////////////////////////////////// TEST 3
    'descriptio':'TEST 3 + CLAIM 1',
    'name':'',
    'images':'<table><tr><td>\
      <p><div class="imgcontainer"><img class="myimages" src="data/images/test3-c1-1.jpg" /><br />frusto-conical pressure pad</div>\
      <div class="imgcontainer"><img class="myimages" src="data/images/test3-c1-2.jpg" /><br />frusto-conical pressure</div>\
      <div class="imgcontainer"><img class="myimages" src="data/images/test3-c1-3.jpg" /><br />pressure pad</div>\
      </p><div style="clear:both;height:25px;"></div><p>\
      A boring tool characterised in that the head lies within a cylindrical cavity extending inwardly from one end of the body member, the open end of the cavity being closed by a plug which backs a frusto-conical pressure pad supporting the cutter blades.\
      </p></td></tr></table>'
  },
  {
    'descriptio':'TEST 3 + CLAIM 2',
    'name':'',
    'images':'<table><tr><td>\
     <p><div class="imgcontainer"><img class="myimages" src="data/images/test3-c2-1.jpg" /><br />second end</div>\
     <div class="imgcontainer"><img class="myimages" src="data/images/test3-c2-2.jpg" /><br />side edge</div>\
     <div class="imgcontainer"><img class="myimages" src="data/images/test3-c2-3.jpg" /><br />insert body</div>\
      </p><div style="clear:both;height:25px;"></div><p>\
      A throwaway insert comprising: an insert body formed in a polygonal shape; a cutting face formed by a polygonal face of the insert body; a corner cutting edge which is formed in a curved shape at a corner of the cutting face; a major cutting edge which is formed along a side edge of the cutting face that is connected to a first end of the corner cutting edge; and a concave portion which is formed , in another side edge of the cutting face that is connected to a second end of the corner cutting edge, so as to be adjacent to the second end of the cornerfrusto-conical pressure pad cutting edge, and so as to be made concave toward the inside of the cutting face from a tangent of the corner cutting edge drawn at the second end of the comer cutting edge.\
      </p></td></tr></table>'
  },
  {
    'descriptio':'TEST 3 and 3 + CLAIM 4',
    'name':'',
    'images':'<table><tr><td>\
      <p><div class="imgcontainer"><img class="myimages" src="data/images/test3-c4-1.jpg" /><br />protrusions for abutment</div>\
      <div class="imgcontainer"><img class="myimages" src="data/images/test3-c4-2.jpg" /><br />adjacent edge surface</div>\
      <div class="imgcontainer"><img class="myimages" src="data/images/test3-c4-3.jpg" /><br />support surface</div>\
      </p><div style="clear:both;height:25px;"></div><p>\
      Toolholder, which could comprise of a holder body with an insert site at its forward end consisting essentially of a bottom surface and at least one side wall where there projects a pin from said bottom surface upon which there is located an insert having a central bore, clamping wedge for wedging engagement between a support surface of the holder and an adjacent edge surface of said insert and an actuating screw received in said wedge whilst threadably engaged in a bore of said holder, said support surface and said edge surface are at least partially converging downwards said wedge clamp having distantly provided protrusions for abutment against the top face and the edge surface of said insert, characterized in that the wedge consists of a pair of distantly provided first protrusions for abutment against a top face of the insert, and a pair of distantly provided second protrusions for abutment against an adjacent edge surface.\
      </p></td></tr></table>'
  }
];

MYALERTS =
{
  "characterized_in":"Having at least the following elements/steps",
  "qq":"qq",
  "ww":"ww"
};

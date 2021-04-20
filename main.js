// Display About when click open and display none when click close
if (document.getElementById) {

  var open = document.getElementById('open');
  var close = document.getElementById('close');
  var about = document.getElementById('about');

  open.addEventListener('click', () => {
    about.style.display = 'block';
  });

  close.addEventListener('click', () => {
    about.style.display = 'none';
  });
}

//+++++++++++++++++++++++++++++++++++ Get all element

var disAns = document.getElementById('ansTxt');
var btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, smt,cls;
btn1 = document.getElementById('btn1');
btn2 = document.getElementById('btn2');
btn3 = document.getElementById('btn3');
btn4 = document.getElementById('btn4');
btn5 = document.getElementById('btn5');
btn6 = document.getElementById('btn6');
btn7 = document.getElementById('btn7');
btn8 = document.getElementById('btn8');
cls = document.getElementById('rs');
smt = document.getElementById('smt');
var qtn = document.getElementById('qtn');
//+++++++++++++++++++++++++++++++++++ set all questions
var qution = [
  'আমি তোমার জন্যই অপেক্ষা করছিলাম -এর ইংরেজি কি হবে ?',
   'তুমি অন্যদের থেকে আলাদা -এর ইংরেজী কি হবে ?',
  'ভুলের জন্য ক্ষমা চাইছি -এর ইংরেজী কি হবে ?',
  'এখান থাকে বাজার কত দূর ? -এর ইংরেজী কি হবে ?',
  'ওর কাছ থেকে কাজ আদায় করা সহজ নয় -এর ইংরেজী কি হবে ?',
   'আমি চিরকাল তোমাকে ভালবাসব -এর ইংরেজী কি হবে ?',
    'এটা আপনার দয়া -এর ইংরেজী কি হবে ?',
     'এটার জন্য তুমি দায়ি -এর ইংরেজী কি হবে ?',
      'মুখে মধু আন্তরে বিষ -এর ইংরেজী কি হবে ?',
       'ওকে ভরসা করনা -এর ইংরেজী কি হবে ?','I felt like slapping him -এর বাংলা কি হবে ?','Your voice is breaking up -এর ইংরেজী কি হবে ?',
  'Are you in your sense ! -এর ইংরেজী কি হবে ?','He was peeping through the window -এর ইংরেজী কি হবে ?','Don\'t forget to come tomorrow -এর ইংরেজী কি হবে ?'];
       // set all option
var option = Array(
  ['was', 'your', 'you', 'for', 'i', 'waiting', 'were', 'me'],
  ['diffarent', 'class', 'is', 'your', 'apart', 'are', 'was', 'you'],
  ['mistake', 'i', 'the', 'please', 'in', 'apologise', 'was', 'for'],
  ['far', 'was', 'from', 'the', 'here?', 'is', 'how', 'market'],
  ['take work', 'an easy', 'task to', 'from him', 'it', 'is', 'was', 'not'],
  ['i', 'shall', 'will', 'love', 'you', 'forever', 'in', 'loved'],
  ['it', 'is', 'very', 'kind', 'of', 'you', 'was', 'was'],
  ['you', 'are', 'were', 'responsible', 'for', 'this', 'of', 'your'],
  ['an', 'angle', 'face', 'with', 'a', 'devil\'s', 'mind', 'man'],
  ['rely', 'don\'t', 'of', 'on', 'him', 'belive', 'isn\'t', 'to'],['করছিল','আমার','চড়','দেই','ওকে','মারি','মনে','পছন্দ'],
  ['ভেঙে','আপনার','যাচ্ছে','শব্দ','কথা','কেটে','আমার','কেঁপে'],['আমনার','ছিল','আছে','জ্ঞান','মাথা','আমার','ঠিক','ভালো'],
  ['উঁকি','জানালা','মারছে','দরজা','সে','মারছিল','ছুঁকি','দিয়ে'],['আজ','ভুলবেন','কাল','না','যেতে','আসতে','হবে','যেন']
                               
);
// set all right answare
var rightAns = ['i was waiting for you',
  'you are class apart',
  'i apologise for the mistake',
  'how far is the market from here?',
  'it is not an easy task to take work from him',
      'i will love you forever',
       'it is very kind of you',
        'you are responsible for this',
         'an angle face with a devil\'s mind',
          'don\'t rely on him','আমার মনে করছিল ওকে চড় মারি','আপনার কথা কেটে যাচ্ছে','আপনার মাথা ঠিক আছে','সে জানালা দিয়ে উঁকি মারছিল','কাল যেন আসতে ভুলবেন না'];
 // setup for display
var index = 0;
var s = 0;
localStorage.setItem('score', s);
setOpt(index);
var rA = rightAns[index];

function setOpt(q) {
  // set the question in id qtn element
  qtn.innerText = qution[q];
  // set every button value that can be used for option

  btn1.innerHTML = option[q][0];
  btn2.innerHTML = option[q][4];
  btn3.innerHTML = option[q][2];
  btn4.innerHTML = option[q][7];
  btn5.innerHTML = option[q][5];
  btn6.innerHTML = option[q][1];
  btn7.innerHTML = option[q][6];
  btn8.innerHTML = option[q][3];

}
// handel all nutton click
function addVal(b) {
  switch (b) {
    case 'btn1':
      disAns.innerHTML += ' ' + btn1.innerText;
      break;
    case 'btn2':
      disAns.innerHTML += ' ' + btn2.innerText;
      break;
    case 'btn3':
      disAns.innerHTML += ' ' + btn3.innerText;
      break;
    case 'btn4':
      disAns.innerHTML += ' ' + btn4.innerText;
      break;
    case 'btn5':
      disAns.innerHTML += ' ' + btn5.innerText;
      break;
    case 'btn6':
      disAns.innerHTML += ' ' + btn6.innerText;
      break;
    case 'btn7':
      disAns.innerHTML += ' ' + btn7.innerText;
      break;
    case 'btn8':
      disAns.innerHTML += ' ' + btn8.innerText;
      break;
    case 'c':
      disAns.innerHTML = '';
  }
}
// display all about this
var i = 0;
function start(){
  
  var ref = setInterval(() => {
      disAns.innerHTML = "";
      end();
      if(i == 3){
        i = 0;
      }else{
      i += 1;
    }
      
  }, 4000);
  function end() {
    
    var about = Array(
      ['This Website create for \'English 2 Bengali Group\' member'],
       ['This \'Daily Task\' Website was develop by : Alamgir Sardar'],
        ['This Website automaticaly update its content after 3 days'],
         ['You\'ll learn from this group Basic to Advance Topic of English from Bengali']);

      disAns.innerHTML = about[i];


      
      
  }
  }
  // check answare when click "continue"
smt.addEventListener('click', () => {
  if (disAns.innerText != '') {
    if (disAns.innerText.toUpperCase == rA.toUpperCase && disAns.innerText == rA) {
      s += 1;
      localStorage.setItem('score', s);
      alert('👍 Well Done !, your answer \"' + disAns.innerText + '\". is currect..Your score [ ' + localStorage.getItem('score') + ' ]....Press \'OK\' to continue');

    } else {
      alert('😞 Ohh !, your answer \"' + disAns.innerText + '\" is incurrect....Right answer is : \"' + rA + '\"....Press \'OK\' to continue');
    }
    // check question index number to display
    if (qution.length - 1 > index) {
      index += 1;
      setOpt(index);
      rA = rightAns[index];
      disAns.innerHTML = '';
    } else {
      // end all question
      var revice = confirm('Today your task hsa completed...would you like to revice now..');
      if (revice) {
        // want to revice now
        index = 0;
        s = 0;
        localStorage.setItem("score", s);
        setOpt(index);
        rA = rightAns[index];
        disAns.innerHTML = '';
        localStorage.clear("score");
      } else {
        // don't want to revice now
        location.href = 'mailto:alamgirsardar66@gmail.com';
        disAns.innerHTML = 'Develop by : Alamgir Sardar';
        qtn.innerHTML = 'English 2 Bengali Group';
        btn1.style.display = 'none';
        btn2.style.display = 'none';
        btn3.style.display = 'none';
        btn4.style.display = 'none';
        btn5.style.display = 'none';
        btn6.style.display = 'none';
        btn7.style.display = 'none';
        btn8.style.display = 'none';
        smt.style.display = 'none';
        cls.style.display = 'none';
        disAns.style.textAlign ="center";
        qtn.style.textAlign = "center";
        start();
        
      }
        
     
      
      }

  } else {
    // when click "continue" button without input any answare
    alert('Press at list one button.. then press continue');
  }},);

const quiz = [
  {
    question: 'ジグザグの正式名称は次のうちどれ？',
    answers: [ '新天地開闢集団ジグザグ', '-真天地快楽集団-ジグザグ', '-真天地開闢集団-ジグザグ', '-大日本異端芸者-ジグザグ'],
    correct: '-真天地開闢集団-ジグザグ'
  }, {
    question: '高田馬場にあるバンギャ御用達の箱は？',
    answers: [ '高田馬場AREA', '高田馬場ABYSS', '高田馬場ANARCHY', '高田馬場ANTHEM'],
    correct: '高田馬場AREA'
  }, {
    question: '「PRIMARY」はどのバンドの曲？',
    answers: [ 'コドモドラゴン', 'DIAURA ', 'アルルカン ', 'RAZOR'],
    correct: 'RAZOR'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です。おつれもんです。';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}

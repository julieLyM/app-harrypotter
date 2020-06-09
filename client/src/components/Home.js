import React, { useState } from 'react';
import Progress from './Progress';
import Questions from './Questions';
import Answers from './Answers';
import { getHatSrv } from '../service/data';
import {
  HomeContainer,
  HomeTitle,
  HomeButton,
  Title,
  HomeImg,
  BlocHome,
} from './styles/homeStyle';

const Home = () => {
  const questions = [
    {
      id: 1,
      question: 'Comment s’appellent les meilleurs amis de Harry ?',
      answer_a: 'Ronald Weasley et Hermione Fanger',
      answer_b: 'Ronald Dursley et Hermione Banger',
      answer_c: 'Ronald Weasley et Hermione Granger',
      correct_answer: 'c',
    },
    {
      id: 2,
      question:
        'De qui JK Rowling s’est-elle inspirée pour le personnage de Hermione ?',
      answer_a: 'D’elle-même',
      answer_b: 'De sa sœur',
      answer_c: 'De sa meilleure amie',
      correct_answer: 'a',
    },
    {
      id: 3,
      question: 'Quelles créatures gardent la prison d’Azkaban ?        ',
      answer_a: 'Les Hippogriffes',
      answer_b: 'Les Détraqueurs',
      answer_c: 'Les Sombrals',
      correct_answer: 'b',
    },
    {
      id: 4,
      question:
        'Quelle matière enseignée à Poudlard rêverait d’enseigner le professeur Rogue ?',
      answer_a: 'La défense contre les forces du mal',
      answer_b: 'L’enchantement',
      answer_c: 'La transfiguration',
      correct_answer: 'a',
    },
    {
      id: 5,
      question: 'Que dit la prophétie concernant Harry et Lord Voldemort ?',
      answer_a: ` « L 'un devra mourir de la main de l'autre car aucun ne peut vivre tant que l'autre survit. » `,
      answer_b:
        ' « Le jeune sorcier né à la fin du septième mois devra tuer son égal. »',
      answer_c:
        '« Le mal disparaîtra grâce à un nouveau-né par sa mère protégé. »',
      correct_answer: 'a',
    },
  ];

  const [hats, setHats] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState('');

  const question = questions[currentQuestion];

  const fetchHat = async () => {
    const data = await getHatSrv();
    setHats(data);
  };

  const onClicked = () => {
    fetchHat();
  };

  const handleClick = (e) => {
    setCurrentAnswer(e.target.value);
    setError(' ');
  };

  const restart = () => {
    setAnswers([]);
    setCurrentAnswer('');
    setCurrentQuestion(0);
    setShowResults(false);
  };

  const resultsClient = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span style={{ color: 'green' }}>Vrai</span>;
    }
    return <span style={{ color: 'red' }}>faux</span>;
  };

  const renderResults = () => {
    return answers.map((element) => {
      const question = questions.find(
        (question) => question.id === element.questionId
      );
      return (
        <div key={question.id}>
          {question.question} - {resultsClient(question, element)}
        </div>
      );
    });
  };

  const nextQuestion = () => {
    const answer = { questionId: question.id, answer: currentAnswer };
    if (!currentAnswer) {
      setError('une réponse est attendue !');
      return;
    }
    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer('');
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
    setShowResults(true);
  };

  const renderError = () => {
    if (!error) {
      return;
    }
    return <div style={{ color: 'red' }}>{error}</div>;
  };

  if (showResults) {
    return (
      <HomeContainer>
        <HomeTitle>resultats</HomeTitle>
        <p style={{ color: 'white' }}>{renderResults()}</p>
        <BlocHome>
          {' '}
          <HomeTitle>
            Et pour la fin dans quelle maison faites-vous partie ?
          </HomeTitle>
          <HomeButton onClick={onClicked}>
            <img src={`/image/wand.svg`} alt="" style={{ width: '50px' }} />
          </HomeButton>
          <HomeTitle>{hats}</HomeTitle>
        </BlocHome>
        <button onClick={restart}>recommencez le quizz</button>
      </HomeContainer>
    );
  } else {
    return (
      <HomeContainer>
        <Title>Harry Potter</Title>
        <BlocHome>
          <HomeImg src={`/image/hat.png`} alt="" />
          <Progress total={questions.length} current={currentQuestion + 1} />
          <Questions question={question.question} />
          {renderError()}
          <Answers
            question={question}
            currentAnswer={currentAnswer}
            handleClick={handleClick}
          />
          <HomeButton onClick={nextQuestion}>
            <img src={`/image/wand.svg`} alt="" style={{ width: '50px' }} />
          </HomeButton>
        </BlocHome>
      </HomeContainer>
    );
  }
};
export default Home;

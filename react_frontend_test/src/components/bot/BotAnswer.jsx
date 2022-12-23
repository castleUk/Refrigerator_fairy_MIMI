import React from 'react';
import dummy from '../../db/bot.json';

// template
import Card from 'react-bootstrap/Card';

const BotAnswer = () => {
  // const q = 1;
  // const aList = dummy.botAnswers.filter(answer =>
  //   answer.q === q
  // );

  return(
    <Card className="answer">
      {dummy.botAnswers.map((answer)=>(
        <Card.Body key={answer.id}>
          <Card.Title>{answer.question}</Card.Title>
          <Card.Text>
            {answer.answer}
          </Card.Text>
        </Card.Body>
      ))}
    </Card>
  );
}

export default BotAnswer;
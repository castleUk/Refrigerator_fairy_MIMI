import React from 'react';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';

const CharacterChangeComponent = () => {
  return(
    <div className='change-component'>
      <div className='change-content'>
        <Card>
          <div className='content-header'>
            <Card.Title>냉장고 체인지</Card.Title>
            <CloseButton className='right'/>
          </div>
          <div className='content-body'>
            <Card.Body>
              <div className='change'>
                <div className='img'>
                  
                </div>
                <div className='text'>
                  <div className='title'>우리집 냉장고 1</div>
                  <div></div>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CharacterChangeComponent;
import React from 'react';
//template
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';
//component
import FreezerChange from './FreezerChange';

const FreezerChangeComponent = () => {
  return(
    <div className='change-component'>
      <div className='change-content'>
        <Card>
          <div className='content-header'>
            <Card.Title>냉장고 체인지</Card.Title>
            <CloseButton className='right' />
          </div>
          <div className='content-body'>
            <Card.Body>
              <FreezerChange />
            </Card.Body>
          </div>
        </Card>
        
      </div>
    </div>
  );
}

export default FreezerChangeComponent;
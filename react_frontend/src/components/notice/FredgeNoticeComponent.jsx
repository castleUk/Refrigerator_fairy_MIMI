import React from 'react';
import Card from 'react-bootstrap/Card';
import CloseButton from 'react-bootstrap/CloseButton';

const FredgeNoticeComponent = () => {

  return(
    <div className='notice-component'>
      <div className='notice-content'>
        <Card>
          <div className='content-header'>
            <Card.Title>냉장고 알림</Card.Title>
            <CloseButton className='right'/>
          </div>
          <div className='content-body'>
            <Card.Body>
              <div className='notice'>
                <div className='img'>
                  
                </div>
                <div className='text'>
                  <div className='title'>유통기한 임박!</div>
                  <span className='date-text'>2022-12-01 ~ 2022-12-10</span>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FredgeNoticeComponent;
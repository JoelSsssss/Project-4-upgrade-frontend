import React from 'react';
import '../styles/CardsIndex.scss';

import { useEffect, useState } from 'react';
import { API } from '../lib/api';

import { Button, Container, Grid } from '@mui/material';

import UserCardsCard from './common/UserCardsCard';

function UsercardsList() {
  const [userCards, setUserCards] = useState(null);

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllUserCards)
      .then(({ data }) => {
        setUserCards(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  return (
    <div className='the-card-index'>
      {userCards?.map((userCards) => (
        <Grid item sm={12} md={4} key={userCards._id}>
          <div className='list-of-cards'>
            <UserCardsCard
              name={userCards.name}
              image={userCards.image}
              template={userCards.template}
              id={userCards._id}
            />
            {/* <button
              className='deletebutton'
              onClick={() => {
                API.DELETE(
                  API.ENDPOINTS.deleteUsercard(userCards._id),
                  API.getHeaders()
                )
                  .then(() => {
                    console.log('deleted successfully');
                  })
                  .then(() =>
                    API.GET(API.ENDPOINTS.getAllUserCards)
                      .then(({ data }) => {
                        setUserCards(data);
                      })
                      .catch(({ message, response }) => {
                        console.error(message, response);
                      })
                  )
                  .catch((e) => console.log(e));
              }}
            >
              {' '}
              Delete{' '}
            </button> */}
          </div>
        </Grid>
      ))}
    </div>
  );
}

export default UsercardsList;

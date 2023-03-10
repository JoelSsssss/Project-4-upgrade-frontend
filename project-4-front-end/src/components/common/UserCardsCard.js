import React from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import '../../styles/CreateUserCards.scss';
import { green } from '@mui/material/colors';

let backgroundCardImage = 'url(https://i.imgur.com/nr2mytl.png)';
let textColor = 'black';

export default function UserCardsCard({ name, image, template, id }) {
  if ([template] == 4) {
    backgroundCardImage = 'url(https://i.imgur.com/2KUp9I3.png)';
    textColor = 'black';
  } else if ([template] == 5) {
    backgroundCardImage = 'url(https://i.imgur.com/QzzHseK.png)';
    textColor = 'white';
  } else if ([template] == 6) {
    backgroundCardImage = 'url(https://i.imgur.com/pRx3lhx.png)';
    textColor = 'white';
  } else backgroundCardImage = 'null';

  return (
    <div classname='preview'>
      <Card
        sx={{
          maxWidth: 645,
          minWidth: 645,
          height: 370,
          color: textColor,
          backgroundImage: backgroundCardImage
        }}
      >
        <CardMedia
          component='img'
          image={image}
          sx={{
            minHeight: 118,
            maxHeight: 118,
            maxWidth: 132,
            minWidth: 132,
            objectFit: 'fill'
          }}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Typography variant='body2' color='text.secondary'></Typography>
        </CardContent>
      </Card>
    </div>
  );
}

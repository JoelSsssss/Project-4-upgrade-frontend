import React from 'react';

import { useEffect, useState } from 'react';
import { API } from '../lib/api';
import { Link } from 'react-router-dom';

import {
  CardActionArea,
  Card,
  CardContent,
  CardMedia,
  Button
} from '@mui/material';

export default function TemplatesIndex() {
  const [templates, setTemplates] = useState(null);

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllTemplates)
      .then(({ data }) => {
        setTemplates(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  return (
    <div>
      {!templates ? (
        <p>Loading...</p>
      ) : (
        <div className='templates-container-get-templates'>
          {templates?.map((templates) => (
            <div key={templates?._id} className='templates-card'>
              <Link to={`/templates/${templates._id}/products`}>
                <Card sx={{ maxWidth: 345 }}>
                  <div className='templates-container-content'>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        height='140'
                        alt='vegan food iamge'
                        image={templates?.image}
                      />
                      <CardContent>
                        <Button
                          gutterbutton='true'
                          variant='h5'
                          component='div'
                        >
                          {templates?.name}
                        </Button>
                      </CardContent>
                    </CardActionArea>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

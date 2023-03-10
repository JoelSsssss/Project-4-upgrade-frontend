import React from 'react';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NOTIFY } from '../lib/notificatons';
import {
  TextField,
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography
} from '@mui/material';
import { API } from '../lib/api';
import UserCardsCard from './common/UserCardsCard';
import '../styles/CreateUserCards.scss';

export default function CreateUserCards() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    author: '',
    image: '',
    template: ''
    // owner: []
  });
  const [error, setError] = useState(false);
  const [availableTemplates, setAvailableTemplates] = useState([]);

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllTemplates)
      .then(({ data }) => setAvailableTemplates(data))
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const handleSelectChange = (id) => {
    console.log(id);
    setFormData({ ...formData, template: [id] });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = formData.template
      ? formData
      : {
          name: formData.name,
          author: formData.author,
          image: formData.image,
          template: formData.template
        };

    API.POST(API.ENDPOINTS.getAllUserCards, data)
      .then(({ data }) => {
        navigate(`/usercards/`);
      })
      .catch((e) => {
        if (e.status === 301) {
          setError(true);
        }
        console.log(e);
      });
  };

  return (
    <>
      <h1 className='cyoc'>Create Your Own Card</h1>
      <section className='createYourOwncard'>
        <div className='prev'>
          <UserCardsCard
            name={formData.name}
            image={formData.image}
            author={formData.author}
            template={formData.template}
            id={formData.id}
          />
        </div>
        <Typography
          variant='h4'
          component='p'
          sx={{ textAlign: 'center', pt: '40px' }}
        ></Typography>
        <div className='input'>
          <Container
            maxWidth='lg'
            sx={{ display: 'flex', justifyContent: 'center', pt: 5 }}
          >
            <form onSubmit={handleSubmit}>
              <Box sx={{ mb: 2 }}>
                <TextField
                  size='small'
                  type='text'
                  value={formData.name}
                  onChange={handleChange}
                  error={error}
                  label='Name & Occupation'
                  name='name'
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  size='small'
                  type='text'
                  value={formData.image}
                  onChange={handleChange}
                  error={error}
                  label='Image'
                  name='image'
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  size='small'
                  type='text'
                  value={formData.author}
                  onChange={handleChange}
                  error={error}
                  label='User'
                  name='author'
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id='template'>Template</InputLabel>
                  <Select
                    size='small'
                    labelId='template'
                    value={formData.template}
                    label='Template'
                    name='template'
                  >
                    {availableTemplates.map((template) => (
                      <MenuItem
                        key={template.id}
                        value={template.id}
                        onClick={() => {
                          handleSelectChange(template.id);
                        }}
                      >
                        {template.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
              <Button type='submit'>ADD MY CARD</Button>
            </form>
          </Container>
        </div>
      </section>
    </>
  );
}

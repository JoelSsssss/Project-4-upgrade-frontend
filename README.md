## Description:

The goal of this project was to create a full stack application. It is a business card making application. You can add your own image and select your preferred template from a selection. This was the last project for the General Assembly Software Immersive Course. I was given a lot more creative freedom. After I came up with the idea I had to discuss it with my lecturer to have it approved.

This was also my first time using Django

## Deployment link:

https://project-4-front-end-attempt-1.netlify.app/usercards/create

## Getting Started/Code Installation:

Open the code with live server (In ‘Visual Studio Code’ this can be done by right clicking the ‘index.html’ folder in the ‘EXPLORER’ menu and selecting ‘Open with live server’.
Type in the terminal (make sure you are in the ga-project-3-client ‘npm install’ ‘npm i cloudinary’ ‘npm i @emotion/styled’ ‘npm install @mui/material’ ‘npm i axios’ ‘npm i buffer’ ‘npm i react-router-dom’ ‘npm i sass’ ‘npm i react-toastify’
In the same terminal write ‘npm start’
On a terminal in the backend type ‘python manage.py runserver’

## Timeframe and working team:

This project was done over the course of 1 week, independently.

## Technologies used:

- Visual Studio Code (Code Editor I used)
- HTML
- JavaScript
- CSS
- SCSS
- Google Chrome (where the game was played)
- Python
- Django

## Brief:

You must:

- Build a full-stack application by making your own backend and your own front-end
- Use a Python Django API using Django REST Framework to serve your data from a Postgres database
- Consume your API with a separate front-end built with React
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut
- Have a visually impressive design to kick your portfolio up a notch and have something to wow future clients & employers. ALLOW time for this.
- Be deployed online so it's publicly accessible.

### Necessary Deliverables

- A working app hosted on the internet
- A link to your hosted working app in the URL section of your Github repo
- A git repository hosted on Github, with a link to your hosted project, and frequent commits dating back to the very beginning of the project

A readme.md file with:

- An embedded screenshot of the app
- Explanations of the technologies used
- A couple paragraphs about the general approach you took
- Installation instructions for any dependencies
- Link to your user stories/wireframes – sketches of major views / interfaces in your application
- Link to your pitch deck/presentation – documentation of your wireframes, user stories, and proposed architecture
- Descriptions of any unsolved problems or major hurdles you had to overcome

## Planning:

Using Excalidraw, I created a template on what I would like the application to look like. I also gathered reference images from the internet to help with ideas. I wanted a page where you could see user created cards and the ability to make your own.

![image](https://i.imgur.com/FpzMuy7.png)

## Build/Code Process

The first thing I did was start the creation of the backend in Django. I first made the ‘userecards’ folder and then made the serializers.py, urls.py and views.py files all within that folder.

![image](https://i.imgur.com/mD7tj3m.png)

I then made the templates and comments folders using a similar method. After that I made the jwt_auth folder so the user is authenticated when logged in. Postman was used to test if all the functions in the ‘usercards’ files were working.

After the ‘usercards’ section of the backend was done I then moved on to making the templates. These were categories the usercards would fall into and then added the comments feature on to the backend.

The final stage of the backend was making the ‘jwt_auth’. This would allow users to login and register. The ‘models.py’ file is what determines the information required to register, that being the email, first name,last name and profile image.

```python
from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    profile_image = models.CharField(max_length=300)
```

The ‘authentication.py’ folder is used to check if the person who is logged in is authorized to use some features of the application. For example, to make a new product you need to be logged in. If it detects that the authentication token you have provided is invalid it will return the message ‘Invalid token’.

```python
class JWTAuthentication(BasicAuthentication):

    def authenticate(self, request):

        auth_header = request.headers.get('Authorization')

        if not auth_header:
            return None

        if not auth_header.startswith('Bearer'):
            raise PermissionDenied(detail="Invalid Auth Token Format")

        token = auth_header.replace('Bearer ', '')

        try:

            payload = jwt.decode(
                token, settings.SECRET_KEY, algorithms=['HS256'])

            user = User.objects.get(pk=payload.get('sub'))

        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied(detail='Invalid Token')

        except User.DoesNotExist:
            raise PermissionDenied(detail='User Not Found')

        return (user, token)
```

To help me, I was following the instructions from a PDF. It was a guide to making a Django backend.

![image](https://i.imgur.com/zixs09d.png)

Once the backend was working, I moved on to the frontend. This was done using React.js. The first components to be made were the Home.js, navbar.js and CreateCardsList.js.

A feature I wanted to add was the option to preview the card you are making. I made a common folder and ‘UserCardsCards’ inside it. Here you can see what the current card you are making looks like and you have the ability to select from 3 different templates. I made the templates myself. It is made of ‘if’ statements, if you select a specific number the image template will change to a specific image URL. The image templates were custom made in windows paint.

```javascript
let backgroundCardImage = 'url(https://i.imgur.com/nr2mytl.png)';
let textColor = 'black';

export default function UserCardsCard({ name, image, template, id })
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
```

I was running out of time near the end so some features were missing. For example, logging in. I used SCSS to make the non functional page presentable by showing it as ‘Under construction’.

![image](https://i.imgur.com/Tpa70jn.png)

I then styled the different pages using SCSS and made a logo for the brand online. This was done using an online logo generator and a photo editing software named GIMP. Due to time constraints the styling is very simple.

![image](https://i.imgur.com/s2SE636.png)

The Home page consists of text, an image and the navbar. The image was not made by me and taken from google images.

## Challenges:

In the frontend and backend there is code written for a login and comment function however, due to time constraints these features were never implemented.

There were also originally meant to be more templates but to save time I thought 3 was a good number to settle on.

## Win:

The preview feature works well and I have never made one before. I am also proud of implementing the feature that allows you to select specific templates for your business card. The preview feature is a ‘usereCardCard’ that changes depending on what you select.

## Key learnings:

At the start of the project, I had many features in mind. Such as the ability to see pricing and adding items to a virtual cart. These were not possible in the timeframe I was given. Next time it would be best if I plan out a timeline of how long I should spend on specific tasks and what features I should work on first.

This was the first time I was using Django by myself and I do feel more confident now. For example, I was not sure about how the views.js worked but after the project was done, I feel like I have a better understanding.

## Bugs:

- When the app is first opened there is no template selected. I can make better visuals for when no template is selected or have a default template that is always selected.
- The login function does not work. It is functional on the back end so I just need to implement it properly on the front end.
- The page does not properly adapt to screens of mobile devices. U ‘@media’ in the SCSS folders to make the screen adapt depending on size.

## Future improvements:

- Create a timeline maybe using Trello
- Make more templates

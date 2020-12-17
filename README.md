# omri-zilberstein-15-12-2020

To deploy app to heroku:

```bash
git init
git add .
heroku create -b https://github.com/mars/create-react-app-buildpack.git
heroku create
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open
```

Deployment:
https://limitless-dawn-47857.herokuapp.com/

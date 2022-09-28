# Getting Started Mini POS

This project has two part front end part and backend part in the root directory there is front and and other related file. 
## Start Back end with laravel
```
cd BackEnd
```
### modify .env file

```
APP_URL={yourdomain}

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=klink
DB_USERNAME=root
DB_PASSWORD=password
```
### migrate database
```
php artisan migrate
```
### import postman colleciton local
![postmanCollection](https://user-images.githubusercontent.com/39464677/192869528-564cc9cf-4b8f-4378-9c60-b75214fab026.PNG)

## Front End

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



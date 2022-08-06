# SharksVolunteers
#### Description
A WeChat Mini Program that makes volunteering easier for both students and teachers


#### Frontend
Frontend: https://github.com/PhaNtazM1337/SharksVolunteers-Frontend

#### Deployment guide

1. Configure MySQL and set up database

2. Edit pub/config/config.js

```
  MYSQL: {
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "help",
    timezone: "+08:00",
    dateStrings: true
  }, // MySQL database


  APP_ID: "", //APP ID
  APP_SECRET: "", //APP Secret

```

3. Install node and pm2

4. Install dependencies

```
npm install
```

5. Deploy and run

```
npm start
```

or using pm2

```
pm2 start bin/www
```

#### Contact information
yixiuliz123494@gmail.com


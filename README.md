# django-rest-api

It is a sign up form using application Django and React.js which can be plugged into any application which is using same tehcnology stack.

Frameworks/libraries Used-
Django v3.1.5
React.js v17.0.1
Database- sqlite

Do setup via following steps-
1. Clone the repository.

2. Install React Dependenceies
  *Do cd react and npm install to install the react dependencies.
  
		*cd .. (To come back to main repository directory)

3. Install Django Dependencies
  *Install django and djangorestframework packages using pip3. (pip3 install <package_name>)

4. Do setup
  *Open two terminals
		
  *In 1st terminal, go to react directory inside main repository directory and in 2nd terminal go to djangorestapi directory inside main repository directory.
  
5. Run Django development server(1st Terminal)
  *Migrate the changes to the database by running python3 manage.py makemigrations and python3 manage.py migrate respectfully.
  
		*Run the development server using python3 runserver localhost:8000 

6. Run React development server(2nd Terminal)
  
		*Run npm start
  
 
 Note: Proxy server has already been set to localhost:8000 in package.json file, in case you want to run the django server with some other port combination, make     sure you have changed the same in package.json file too.
 
Run the App-
1. You can access the form by hitting localhost:3000 on your browser and do submissions.
2. In order to fetch the recorder subscriptions, simply run the "curl http://localhost:8000/subscribe/users | json_pp" command on the terminal.

Example-

Command-  curl http://localhost:8000/subscribe/users | json_pp

Output - {
           "users" : [
              {
                 "email" : "rahul@gmail.com",
                 "id" : 21
              },
              {
                 "email" : "anurag@yahoo.com",
                 "id" : 22
              }
           ]
        }













# api-gateway
To run the project, please follow the next instructions:

1. Database is located inside "db" folder in tw files: gateways.json and peripherical.json. Database's name must be ManageGateways. But if you wish start from zero, let server creates the database.

The Project has two folder: Server and Client folders. 

First, go to Server folder and run following command lines:
1. npm install
2. npm start

To manager the data, go to Client forlder and run following command lines:

1. npm install
2. ng serve -o

About the Client UI

1. When the app start, it'll show you a form to insert all gateway. 
2. Every gateway created will appear in a list below the form.
3. You can see detail of a particular gateway clicking in Detail link
4. If you want create a peripherical inside a specify gateway, click in "Insert_Peripheral" link
5. Every peripherical created will appear in a list below the form.
6. A notification about to many peripheral will appear when 10 devices exist and you wish create another more
7. "Remove" link was created in order to delete a specify device

# api-gateway
To run the project, please follow the next instructions:

**Database:** 

Choice the way to create the data

_Option #1: Import files_

There is one database sample located in db folder. Inside you can find two files: gateways.json and peripheral.json with sample. Make sure that database's name must be ManageGateways.

_Option #2: Empty database_

If you wish start from zero, start server to create the database.  

**Source code**

The Project's code are in two folder: "Server" and "Client" folders. 

First, go to "Server" folder and run following command lines:
1. npm install
2. npm start

To manager the data, go to "Client" folder and run following command lines:
1. npm install
2. ng serve -o

**About the Client UI**

1. When the app start, it'll show you a form to insert all gateway. 
2. Every gateway created will appear in a list below the form.
3. You can see detail of a particular gateway clicking in Detail link.
4. If a ip address exist, a error notification will appear. A similar error will appear if a gateway's unique serial number exist.
5. If you want create a peripheral inside a specify gateway, click in "Insert_Peripheral" link.
6. Every peripheral created will appear in a list below the form.
4. If a peripheral's UID exist, a error notification will appear.
7. A notification about to many peripheral will appear when 10 devices exist and you wish create another more.
8. "Remove" link was created in order to delete a specify device.

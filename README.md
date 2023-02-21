
# Dougs

## Installation

```bash
$ git clone https://github.com/Bric66/dougs_tech_test_backend.git
$ cd dougs_tech_test_backend
$ npm install
```
 ## Run 
```bash
$ npm start
```

 ## Test
```bash
$ npm test
```

## Architecture

The following program has been built respecting as best as possible the principles of clean architecture.

Two major layers (adapter layer is useless here):

- **core:** this is the heart of the application, it contains the business code. entities, usescases and interfaces.

- **app:** this is the part of the program that makes the link between the core and the adapters. this is where the API points are built and the usescases are implemented by the adapters

## Connection

First, create an **.env** file at the root of the project and create one environment variable:

 **PORT**

>    //.env file example
>    
>     
>     PORT=3000

    
    

## API

## **Movements:**

 **- POST - /movements/validation**
 

>   Validation of synchronization between movements and balances
>
>    *body example:*
>    
     {
          movements: [  
				{  
					  id: "2fd270ab-2204-453a-a394-9f275c512ed2",  
					        date : new Date("01-17-2023"),  
					        label : 'label1',  
					        amount : 100,  
			    },  
			    {  
					  id:  "4bb19c9a-006a-4b57-83dd-7b368ef93322",  
					        date : new Date("01-20-2023"),  
					        label : 'label2',  
					        amount : 50,  
			    },  
			    {  
					  id: "d4b896e5-b1a9-4f0e-8220-2dc91cc2ad6f",  
					        date : new Date("01-25-2023"),  
					        label : 'label3',  
					        amount : 50,  
			    },  
		],  
		
		balances: [  
				   {  
						  date : new Date("2023-01-01"),  
						  balance : 100  
				  },  
				   {  
						  date : new Date("2023-02-01"),  
					      balance : 300  
				  }  
		]
	  }

 
## **Status:**

**- GET - /status**

> server and db healthcheck 

  

## Test
  
All the layers of the program are tested with Jest, you will find the **unit tests** on the core part, and the **end to end tests** on the app part.  The program has a coverage rate of 100%


## Conclusion

The program is designed and built in such a way that it can be maintained and evolved simply.

Possible improvements for the future could go through the use of a database, which could make it possible to replace POST /movements/validation by GET /movements/validation by requiring precise dates. It could be also possible to create an endpoint to delete duplicate transactions (DELETE /movement for example) and an endpoint to add a transaction manually (POST /movement for example) to handle missing amounts.

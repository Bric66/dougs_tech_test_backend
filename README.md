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

The following program has been built respecting as best as possible the SOLID and Clean Architecture principles.

Two major layers (adapter layer is useless here):

- **core:**  this is the heart of the application, it contains the business logic, entities and usecases

- **app:** this is the final part, that consume the core logic. It is non correlated with the business logic and considered as implementation detail. The app can be easily change thanks to the core.

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
	  "movements": [
	    {
	      "id": "2fd270ab-2204-453a-a394-9f275c512ed2",
	      "date": "2023-01-17",
	      "label": "label2",
	      "amount": 100
	    },
	    {
	      "id": "4bb19c9a-006a-4b57-83dd-7b368ef93322",
	      "date": "2023-01-20",
	      "label": "label2",
	      "amount": 10
	    },
	    {
	      "id": "d4b896e5-b1a9-4f0e-8220-2dc91cc2ad6f",
	      "date": "2023-01-25",
	      "label": "label2",
	      "amount": 50
	    }
	  ],
	  "balances": [
	    {
	      "date": "2023-01-01",
	      "balance": 100
	    },
	    {
	      "date": "2023-02-01",
	      "balance": 300
	    }
	  ]
	}
 
## **Status:**

**- GET - /status**

> server healthcheck 

  

## Test
  
All the layers of the program are tested with Jest, you will find the **unit tests** on the core part, and the **end to end tests** on the app part.  The program has a coverage rate of 100%


## Conclusion

The program is designed and built in such a way that it can be maintained and evolved simply.

Possible improvements for the future could go through the use of a database, which could make it possible to replace POST /movements/validation by GET /movements/validation by requiring precise dates. It could be also possible to create an endpoint to delete duplicate transactions (DELETE /movement for example) and an endpoint to add a transaction manually (POST /movement for example) to handle missing amounts.

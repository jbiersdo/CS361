# Microservice for Currency Converter
This Microservice provides the user to extract the latest conversion rates for specific countries so that a conversion rate can be calculated.
There is an API that will provide this information as long as one subscribes to a free account. This is done using an HTTP request to retrieve the data and receives the data in JSON format.

### Available Endpoints
/convert
This fetch the information at the API url and store the information as a JSON file.
The API url is located at:
http://data.fixer.io/api/latest?access_key=5d35c596a45714ff94a4ed9321076f80&format=1
The key is the account key provided to you once you sign up for an account.
This JSON file is then returned to the user.

### Example call:
The user will request the conversion data and if the microservice can connect to the API the rate information will be sent as a JSON
If the microservice cannot connect then it return an error.

### Parameters:
There are no parameters that will be submitted for the GET request.

### Response:
Response data will be returned in JSON format by default. The convert endpoint will return the conversion object of all of the rates.

### Example response in JSON:
{
  "success": true,
  "timestamp": 1691030884,
  "base": "EUR",
  "date": "2023-08-03",
  "rates": {
    "AED": 4.018259,
    "AFN": 93.65094,
    "ALL": 102.749622,
    "AMD": 424.00813,
    "ANG": 1.978729,
    ...
    }
}

  ### UML Sequence Diagram
  ![image](https://github.com/jbiersdo/CS361/assets/8892744/ed8cc3e3-860a-4426-b3c1-9d1cd65e5414)

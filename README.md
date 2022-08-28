# Jerry Vohrer Shippo Takehome Challenge

## Description

This application is a simple tool and UI that will allow a user to:
1. Create a shipment
2. Retrieve a shipment
3. Retrieve rates for a shipment
4. Retrieve either the sender or recipient address by specifying their object ids or retrieve
both simultaneously by passing a shipment’s object id
5. Retrieve a parcel by specifying its object id or by passing a shipment’s object id

On page load, the user will be presented with a login page. User can enter any name they wish. The password for this demo must be a functioning API token. Don't have one? Click [HERE](https://apps.goshippo.com/join?) to create a Shippo account and create an API token.

Once logged in, the user will be greeted with their name/username and be presented with an order including their lowest rate by default  for review. 

They can click `Check Rates` to see their other shipping options. 

Or `Send Package` to complete the transaction and recieve a confirmation.


## Technology Stack
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Future Additions
- Expand the UI so that the user can enter their own address and parcel information for submission
- To ensure valid addresses, include Shippo's address verification
- Router and links to make the site easier and more intuitive to navigate
- Ability to route to a profile page where user can view personal info and past shipments, financial data, etc. 
- Improve site accessibility

## Installation

###### In your terminal...

`git clone git@github.com:Jerry-Vrrr/shippo-takehome.git`


`cd <<path>>`


`npm i`


Once all the dependancies are installed run `npm start` and the site should be accessible at http://localhost:3000/.

## Credits
 [Jerry Vohrer](https://terminal.turing.edu/profiles/1334)


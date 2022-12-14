

var addressFrom  = {
    "name": "Shawn Ippotle",
    "street1": "215 Clayton St.",
    "city": "San Francisco",
    "state": "CA",
    "zip": "94117",
    "country": "US"
};

var addressTo = {
    "name": "Mr Hippo",
    "street1": "Broadway 1",
    "city": "New York",
    "state": "NY",
    "zip": "10007",
    "country": "US"
};

var parcel = {
    "length": "5",
    "width": "5",
    "height": "5",
    "distance_unit": "in",
    "weight": "2",
    "mass_unit": "lb"
};

var shipment = Object.create({
    "address_from": addressFrom,
    "address_to": addressTo,
    "parcels": parcel,
    "async": true
})

const getData = (ends, key) => {
	return fetch(
		`https://api.goshippo.com/${ends}`,
		{
			method: 'GET',
			headers: {'Authorization': `${key}`}
		}
	).then((response) => {
		return response.json()
	})
}

const postData = (key) => {
	return fetch(
		'https://api.goshippo.com/shipments/',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/json', 'Authorization': `${key}`},
			body: JSON.stringify({
				"address_from": addressFrom,
				"address_to": addressTo,
				"parcels": parcel,
				"async": true
			}),
		}
	).then((response) => response.json())
}

export {
	postData,
	getData,
}
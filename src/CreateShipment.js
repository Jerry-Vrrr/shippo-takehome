import { useState, useEffect } from "react";
import { postData, getData } from "./apiCalls";
import "./CreateShipment.css";

export default function CreateShipment({
  shipment,
  rates,
  setRates,
  display,
  showRates,
  setShowRates,
  createShipment,
  password,
}) {
  const [toAddress, setToAddress] = useState(null);
  const [fromAddress, setFromAddress] = useState(null);

  useEffect(() => {
    getData(`addresses/3e5f4d147eb74521a7a0d15120a7ad8c`, password).then(
      (response) => setFromAddress(response)
    );
    getData(`addresses/1fb89061783344ed98626e4841a15a1d`, password).then(
      (response) => setToAddress(response)
    );
  }, [display]);

  shipment && console.log(display);
  const seeRates = (event) => {
    event.preventDefault();
    display && setRates(display.rates);
    display && setShowRates(true);
  };
  const hideRates = (event) => {
    setShowRates(false);
  };
  const sendPackage = (event) => {
    event.preventDefault();
    createShipment();
  };

  return (
    <div>
      {!shipment && <h2>Create Shipment</h2>}
      {!shipment && <h4>Confirm Details and Submit to See Rates</h4>}
      {!shipment && display && <div className="details">
        <div className="address">
          {!shipment && display && fromAddress && <div>FROM: {fromAddress.name}</div>}
          {!shipment && display && fromAddress &&  <div>{fromAddress.street1}</div>}
          {!shipment && display && fromAddress &&  (
            <div>
              {fromAddress.city}, {fromAddress.state} {fromAddress.country}
            </div>
          )}
        </div>
        <div className="address">
          {!shipment && display && toAddress && <div>TO: {toAddress.name}</div>}
          {!shipment && display && toAddress && <div>{toAddress.street1}</div>}
          {!shipment && display && toAddress && (
            <div>
              {toAddress.city}, {toAddress.state} {toAddress.country}
            </div>
          )}
        </div>

        {!shipment && display && (
          <p>
            Dimensions:
            Height: {Math.round(display.parcels[0].height)} inch
            &times; Width: {Math.round(display.parcels[0].width)} inch &times;
            Length: {Math.round(display.parcels[0].length)} inch
          </p>
        )}
      </div>}

      {!shipment && display && rates && (
        <p>
          Lowest Rate: {rates[0].provider} {rates[0].amount} {rates[0].currency}
        </p>
      )}
      {!shipment && !showRates && (
        <form onClick={(event) => seeRates(event)}>
          <button className="button">
            <span className="text">Check Rates</span>
          </button>
        </form>
      )}
      {!shipment && showRates && (
        <form onClick={(event) => hideRates(event)}>
          <button className="button">
            <span className="text">Hide Rates</span>
          </button>
        </form>
      )}
      {!shipment && !showRates && (
        <form onClick={(event) => sendPackage(event)}>
          <button className="button">
            <span className="text">Send Package</span>
          </button>
        </form>
      )}
      {showRates &&
        display.rates
          .sort((a, b) => a.amount - b.amount)
          .map((rate) => {
            return (
              <p>
                {rate.provider} {rate.amount} {rate.currency}
              </p>
            );
          })}
      {shipment && <h1>Your Shipment Details Have Been Recieved!</h1>}
      {shipment && (
        <p>Your shipment Was Created On: {shipment.object_created}</p>
      )}
      {shipment && <p>Reference # {shipment.object_id}</p>}
      {shipment && (
        <p>
          {" "}
          Dimensions: Height: {Math.round(shipment.parcels[0].height)} inches
          &times; Width: {Math.round(shipment.parcels[0].width)} inches &times;
          Length: {Math.round(shipment.parcels[0].length)} inches
        </p>
      )}
      {shipment && <p>FROM: {shipment.address_from.name}</p>}
      {shipment && <p>TO: {shipment.address_to.name}</p>}
      {shipment && <p>Shipment Status: {shipment.status}</p>}
      {shipment && (
        <p>Confirmation and Details Sent To: {shipment.object_owner}</p>
      )}
    </div>
  );
}

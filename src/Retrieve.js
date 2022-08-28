import { useState } from "react";
import { getData  } from './apiCalls';

export default function Retrieve({password, setShipment}) {
  const [parcel, setParcel] = useState(null);

  const searchParcel = (event) => {
    setParcel(event.target.value);
  };

  const submitSearch = (event) => {
    event.preventDefault()
    getData(`parcels/${parcel}`, password).then(result => setShipment(result))
  };

  return (
    <div>
      <form className="search" onSubmit={(event) => submitSearch(event)}>
        <input
          className="search"
          type="text"
          placeholder="Search Parcel By Ref#"
          name="username"
          value={parcel}
          required
          onChange={(event) => searchParcel(event)}
        />
        <button className="button">
          <span className="text">Search</span>
        </button>
      </form>
    </div>
  );
}

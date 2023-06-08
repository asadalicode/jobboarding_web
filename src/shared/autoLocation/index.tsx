import { useEffect } from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';

function AutoLocation({ suburbSelect }: any) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleInput = (e: any) => {
    setValue(e.target.value);
  };

  const handleSelect = (val: any) => {
    setValue(val, false);
    suburbSelect(val);
    clearSuggestions();
  };

  return (
    <>
      <input
        value={value}
        onChange={handleInput}
        disabled={!ready}
        className="focus:outline-transparent bg-gray-light border border-gray-light text-sm rounded-lg block w-full p-3 "
        placeholder="Choose location"
      />
      {status === 'OK' && (
        <ul className="shadow w-full">
          {data.map(({ place_id, description }) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <li
              className="hover:bg-gray-light py-1 pl-4 text-left cursor-pointer"
              // eslint-disable-next-line camelcase
              key={place_id}
              onClick={() => handleSelect(description)}
            >
              <small>{description}</small>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default AutoLocation;

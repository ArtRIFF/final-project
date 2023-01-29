import { NavLink } from "react-router-dom";
import Button from "../../../Button/ButtonAll/ButtonAll";

import "../HeaderInterAction.scss";

import {useState} from "react";
import {sendRequest} from "../../../../helpers/sendRequest";
import {API} from "../../../../config/API"

const Search = () => {
    const [searchPhrase, setSearchPhrase] = useState("");
    const handleSubmit = () => {
      const newSearchPhrases = {
        query: searchPhrase
      };
      sendRequest(`${API}products/search`, 'POST',
        {
          body: JSON.stringify(newSearchPhrases),
          headers: {'Content-Type': 'application/json'}
        })
        .then(r => {
          if (r.enabled) {
            alert('Successful search')
          } else {
            console.log('FAIL')
            console.log(r)
          }
        })
        .catch(e => {
          console.error(e);
        })}
    return (
            <div className="header-search">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="nav__search"
                    onChange={(e) => setSearchPhrase(e.target.value)}
                    />
                <NavLink to="/search">
                    <Button 
                    text='Search' 
                    className='section__btn-seacrh' 
                    id='section__btn' 
                    onClick={handleSubmit}
                    />
                </NavLink>
            </div>
    )
}

export default Search;
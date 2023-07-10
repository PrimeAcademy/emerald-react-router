import queryString from 'query-string';
import { useHistory } from 'react-router-dom';

function Search() {
    // history has a location object with the search string
    const history = useHistory();

    return (
        <div>
            <h1>Search!</h1>
            <pre>{JSON.stringify(history)}</pre>
            <div>With query-string:</div>
            <pre>{JSON.stringify(queryString.parse(history.location.search))}</pre>
        </div>
    )

};

export default Search;
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';


function AnimalDetails() {
    // useParams gives us an object with our url params
    // url params are set in the <Route> component in App.jsx (like /details/:id)
    const params = useParams();

    useEffect(() => {
        console.log('route params are: ', params);
        // GET animal with id params.id
    }, []);

    return (
        <div>
            <h1>Animal details</h1>
        </div>
    )
};

export default AnimalDetails;
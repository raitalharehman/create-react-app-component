import React from 'react';
import { Home } from '../../components';

const Page = (props) => {
    return (
        <>
            <Home />
            {console.log("prop",props.state)}
        </>
    );
}

export default Page;

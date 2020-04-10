import React from 'react';

import useGetAuthorizedUserData from '../../hooks/useGetAuthorizedUserData';

const App = (props) => {
    const {children} = props;

    useGetAuthorizedUserData();

    return children;
};

export default App;

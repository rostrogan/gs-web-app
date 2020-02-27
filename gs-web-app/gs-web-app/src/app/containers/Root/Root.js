import React from 'react';

import apiRequestService from '../../services/api/apiRequestService';

const Root = (props) => {
    apiRequestService.getAllUsers();

    return (
        <div>
            <h2>Test</h2>
        </div>
    );
};

export default Root;

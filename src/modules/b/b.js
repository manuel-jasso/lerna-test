import React from 'react';

import C from '@mjasso/c';

class B extends React.Component {

    render () {
        return (
            <div>
                I am module B<br/>
                &nbsp; Rendering C: <C/>
            </div>
        );
    }
}

export default B;

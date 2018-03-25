import React from 'react';

import A from '@mjasso/a';

// some change

class C extends React.Component {

    render () {
        return (
            <div>
                I am module C<br/>
                &nbsp; Rendering A (alone): <A alone={true}/>
            </div>
        );
    }
}

export default C;

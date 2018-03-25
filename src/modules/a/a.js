import React from 'react';

import B from '@mjasso/b';

// some change

class A extends React.Component {

    render () {
        let alone = this.props.alone
            ? <span>(alone)</span>
            : <span>Rendering B: <B/></span>;

        return (
            <div>
                I am module A<br/>
                &nbsp; {alone}
            </div>
        );
    }
}

export default A;

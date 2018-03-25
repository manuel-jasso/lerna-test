import React from 'react';

import B from '@stubhub/b';

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

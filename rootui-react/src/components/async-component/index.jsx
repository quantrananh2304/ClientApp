/**
 * External Dependencies
 */
import Loadable from 'react-loadable';
import React from 'react';
import { Spinner } from 'reactstrap';

export default function AsyncComponent( props ) {
    const LoadableComponent = Loadable( {
        loader: props.component,
        loading: () => {
            return (
                <Spinner
                    color="secondary"
                    type="grow"
                >
                    Loading...
                </Spinner>
            );
        },
    } );

    return (
        <LoadableComponent />
    );
}

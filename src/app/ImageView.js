

import React from 'react';

export default class ImageView extends React.Component {


    constructor() {
        this.props = {
            size : 43,
            error : '',
            default : '',
            title:'',
            src:'',
            backgroundColor:'',
            color:''
        };
    }

    render() {

        const styles = {

        };

        const prop = this.props;

        return (

            <div>
                <img />
                <a></a>
            </div>

        );
    }


}

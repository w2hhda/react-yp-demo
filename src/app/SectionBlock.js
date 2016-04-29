

import React from 'react';

export default class SectionBlock extends React.Component {



    /*
    *
    * .dtTitleWrap{
     padding-bottom: 10px;
     width: 100%;
     box-sizing: border-box;
     }
     .dtTitleInner {
     position: relative;
     padding-left: 14px;
     height: 30px;
     line-height: 30px;
     }
     .dtTitleContent{
     vertical-align: middle;
     font-size: 14px;
     }
     .dtTitleBtn{
     display: inline-block;
     width: 2px;
     height: 46%;
     margin-right: 4px;
     background-color: #e03731;
     color: #e03731;
     vertical-align: middle;
     }
    *
    * */

    render() {

        const styles = {

            container : {
                display : 'flex',
                height : 30,
                alignItems : "center"
            },

            leftDraw : {
                display: 'inline-block',
                width: 2,
                height: '46%',
                marginRight: 4,
                backgroundColor: '#65bd6a',
                marginLeft: 14,
            },

            text : {
                fontSize: 13,
                paddingLeft : 2,
            }

        };

        let title = this.props.value;

        return (

            <div style={styles.container}>
                <span style={styles.leftDraw}/>
                <span style={styles.text}>{title}</span>
            </div>

        );

    }

}

import React from 'react';
import GridList from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

class NumberBlock extends React.Component {

    render() {

        const styles = {

            grid:{
                flexDirection : 'row',
                width:'100%',
                display: 'flex',
                flexWrap : 'wrap',
                alignContent: 'flex-start',
                backgroundColor: '#00cccc',
            },

            container:{
                backgroundColor: '#cccccc',
                textAlign: 'center',
                height:67,
                display: 'flex',
                flexDirection: 'row',
                flexWrap : 'nowrap',
                alignItems : 'center',
                width:'100%',
                flexBasis:'50%',
                boxSizing: 'border-box',
                border: '1px solid red'
            },

            avatar: {
                order: 1,
                flexBasis: '35%',
                alignSelf: 'center',
                display: 'flex',
                justifyContent: 'flex-end',
            },

            img: {
                height: 46,
                width: 46,
            },

            text: {
                fontSize: 16,
                textAlign:'center',
                whiteSpace: 'nowrap',
                order: 2,
                flexBasis:'40%',
            }

        };

        //let tilesData = this.state.numbers.items;
        let tilesData = [
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": -1,
                    "parameter_param": null,
                    "parameter_type": 1,
                    "parameter_url": "com.meizu.yellowpage.YPActivity"
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 100,
                "desc": "火车机票",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_plane.png",
                "item_id": 1001,
                "title": "火车机票",
                "weight": 8
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": -1,
                    "parameter_param": null,
                    "parameter_type": 2,
                    "parameter_url": "com.meizu.yellowpage.YPActivity"
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 100,
                "desc": "酒店住宿",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_hotel.png",
                "item_id": 1002,
                "title": "酒店住宿",
                "weight": 7
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": -1,
                    "parameter_param": null,
                    "parameter_type": 3,
                    "parameter_url": "com.meizu.yellowpage.YPActivity"
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 100,
                "desc": "物流快递",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_kuaidi.png",
                "item_id": 1003,
                "title": "物流快递",
                "weight": 6
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": -1,
                    "parameter_param": null,
                    "parameter_type": 4,
                    "parameter_url": "com.meizu.yellowpage.YPActivity"
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 100,
                "desc": "银行保险",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_bank.png",
                "item_id": 1004,
                "title": "银行保险",
                "weight": 5
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": -1,
                    "parameter_param": null,
                    "parameter_type": 5,
                    "parameter_url": "com.meizu.yellowpage.YPActivity"
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 100,
                "desc": "客服售后",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_kefu.png",
                "item_id": 1005,
                "title": "客服售后",
                "weight": 4
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": -1,
                    "parameter_param": null,
                    "parameter_type": 6,
                    "parameter_url": "com.meizu.yellowpage.YPActivity"
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 100,
                "desc": "公共热线",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_gongg.png",
                "item_id": 1006,
                "title": "公共热线",
                "weight": 3
            }
        ];

        return (
            <div>
                <Divider style={{ backgroundColor:'#f0f0f0', height:10}}/>
                <div style={styles.grid}>
                    {tilesData.map(tile => (
                        <div style={styles.container} key={tile.item_id}>
                            <div style={styles.avatar}>
                                <img style={styles.img} src={tile.icon} />
                            </div>
                            <span style={styles.text}>{tile.title}</span>
                        </div>
                    ))}
                </div>
            </div>

        );
    }

}

export default NumberBlock;

import React from 'react';
import GridList from 'material-ui/GridList';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import SectionBlock from './SectionBlock';

class ServicesBlock extends React.Component {

    render() {

        const styles = {

            grid: {
                flexDirection: 'row',
                display: 'flex',
                flexWrap: 'wrap',
                padding: '6px 6px 15px',
                backgroundColor: '#00cccc',
            },

            container: {
                backgroundColor: '#cccccc',
                textAlign: 'center',
                height: 76,
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                alignItems: 'center',
                width: '100%',
                flexBasis: '25%',
                boxSizing: 'border-box',
                border: '1px solid red',
                justifyContent: 'center'
            },

            avatar: {
                order: 1,
                alignSelf: 'center',
                display: 'flex',
                flexBasis:'60%'
            },

            img: {
                height: 43,
                width: 43,
            },

            text: {
                display: 'block',
                fontSize: 12,
                textAlign: 'center',
                whiteSpace: 'nowrap',
                order: 2,
                color: '#7d7d7d',
                fontWeight: 'bold',
                flexBasis:'20%'
            }

        };

        const tilesData = [
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": -1,
                    "parameter_param": null,
                    "parameter_type": -1,
                    "parameter_url": "https://recharge.meizu.com/html/tel.html?channel_id=1458543711539"
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 105,
                "desc": "充话费",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_shouji.png",
                "item_id": 2001,
                "title": "充话费",
                "weight": 9
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": -1,
                    "parameter_param": null,
                    "parameter_type": -1,
                    "parameter_url": "https://magneto.meizu.com/flowrecharge/html/flow.html?channel_id=1458543711539"
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 105,
                "desc": "充流量",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_chongliuliang.png",
                "item_id": 2003,
                "title": "充流量",
                "weight": 6
            },
            {
                "action_extends": {
                    "parameter_bg": "#3781e4",
                    "parameter_id": -1,
                    "parameter_param": null,
                    "parameter_type": -1,
                    "parameter_url": "http://cms.meizu.com/cp/h5/geturl.do?biz=huangye&id=1"
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 102,
                "desc": "查快递",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_chakuaidi.png",
                "item_id": 2004,
                "title": "查快递",
                "weight": 5
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": 35,
                    "parameter_param": null,
                    "parameter_type": 1,
                    "parameter_url": ""
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 101,
                "desc": "找美食",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_meishi.png",
                "item_id": 2005,
                "title": "找美食",
                "weight": 4
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": -1,
                    "parameter_param": null,
                    "parameter_type": 5,
                    "parameter_url": ""
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 101,
                "desc": "看电影",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_movie.png",
                "item_id": 2006,
                "title": "看电影",
                "weight": 3
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": 73,
                    "parameter_param": null,
                    "parameter_type": 1,
                    "parameter_url": ""
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 101,
                "desc": "休闲娱乐",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_yule.png",
                "item_id": 2007,
                "title": "休闲娱乐",
                "weight": 2
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": -1,
                    "parameter_param": null,
                    "parameter_type": -1,
                    "parameter_url": "com.meizu.intent.action.TO_BUY_GLOBAL_DATA"
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 106,
                "desc": "国际流量",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_guojiliuliang.png",
                "item_id": 2008,
                "title": "国际流量",
                "weight": 1
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": 1,
                    "parameter_param": null,
                    "parameter_type": -1,
                    "parameter_url": ""
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 103,
                "desc": "查余额",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_yue.png",
                "item_id": 2009,
                "title": "查余额",
                "weight": 8
            },
            {
                "action_extends": {
                    "parameter_bg": "",
                    "parameter_id": 2,
                    "parameter_param": null,
                    "parameter_type": -1,
                    "parameter_url": ""
                },
                "action_parameter": "",
                "action_target": "",
                "action_type": 103,
                "desc": "查流量",
                "icon": "http://yp.res.meizu.com/resource/mp/ic_liuliang.png",
                "item_id": 2010,
                "title": "查流量",
                "weight": 7
            }
        ];

        const appProp = {
            value: "便捷服务",
        };

        return (
            <div>
                <Divider style={{ backgroundColor:'#f0f0f0', height:10}}/>
                <SectionBlock {...appProp}/>
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

export default ServicesBlock;

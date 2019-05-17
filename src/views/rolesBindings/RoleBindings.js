import React from 'react';
import {Layout} from 'antd';
import {ResponsiveSankey} from '@nivo/sankey'
import {fetchRolesBindingsSankeyData} from "../../actions/rolesBindingsActions";


export default class RoleBindings extends React.Component {
    componentWillMount() {
        this.props.dispatch(fetchRolesBindingsSankeyData());
    }

    getSankey = () => {
        return <ResponsiveSankey
            data={this.props.sankeyData}
            align="justify"
            colors={{
                "scheme": "nivo"
            }}
            margin={{
                "bottom": 40,
            }}
            sort="descending"
            nodeOpacity={1}
            nodeThickness={18}
            nodeInnerPadding={3}
            nodeSpacing={24}
            nodeBorderWidth={0}
            linkOpacity={0.5}
            linkHoverOthersOpacity={0.1}
            enableLinkGradient={false}
            labelPosition="inside"
            labelOrientation="horizontal"
            labelPadding={2}
            labelTextColor="#000000"
            animate={false}
        />
    };

    render() {
        return (
            <div className={"sankeyGraph"} style={{height: 800, fontSize: 10}}>
                {this.props.sankeyData === null ? '' : this.getSankey()}
            </div>
        );
    }
}

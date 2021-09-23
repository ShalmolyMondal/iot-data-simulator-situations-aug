import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import glamorous from "glamorous";
import { css } from 'glamor';

import ViewLayout from 'components/ViewLayout';

export default class SystemsScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ViewLayout />
        )
    }
}

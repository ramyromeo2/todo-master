/** @odoo-module **/

import { Component, xml, whenReady, mount } from "@odoo/owl";
import Header from "./header.js";  // Ensure this path is correct

class Root extends Component {
    static components = { Header };  // Include Header as a subcomponent
    static template = xml`
        <div>
            <Header/> 
            <h1>Hello World</h1>
            <h2>What's up</h2>
        </div>
    `;
}

whenReady(() => {
    mount(Root, document.body);
});

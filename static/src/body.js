/** @odoo-module **/

import { Component, xml } from '@odoo/owl';

class Body extends Component {}
Body.template = xml`
    <main>
        <h1>Welcome to Our Site</h1>
        <!-- More content here -->
    </main>
`;

export default Body;

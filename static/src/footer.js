/** @odoo-module **/

import { Component, xml } from '@odoo/owl';

class Footer extends Component {}
Footer.template = xml`
    <footer>
        <p>© 2023 My Website</p>
    </footer>
`;

export default Footer;

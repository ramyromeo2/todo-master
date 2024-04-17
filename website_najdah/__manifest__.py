# -*- coding: utf-8 -*-
{
    'name': "Najdah ewbsite",

    'summary': "Website for Najdah",

    'description': "Website for Najdah",

    'author': "Najdah",
    'website': "https://najdahksa.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/15.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'website',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web'],
    'application': True,
    'installable': True,
    'data': [
        # 'security/ir.model.access.csv',
        'views/template.xml',
        # 'views/todo.xml',
    ],
    'assets': {
        'website_najdah.assets': [
            ('include', 'web._assets_core'),
            'web/static/lib/jquery/jquery.js',
            'web/static/src/start.js',
            ('remove','/web/static/src/**/*.scss'),
            'website_najdah/static/src/**/*',
        ],
    },
    'license': 'AGPL-3'
}
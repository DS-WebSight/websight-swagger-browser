import { colors } from 'websight-admin/theme'

import { SWAGGER_BROWSER_ROOT_PATH } from '../../../../utils/Constants.js';

const NavigationItemFragment = {
    title: 'Swagger Browser',
    img: 'description',
    color: colors.primaryBlue,
    description: 'REST API documentation for Websight Admin Tools.',
    href: SWAGGER_BROWSER_ROOT_PATH
}

export default NavigationItemFragment;
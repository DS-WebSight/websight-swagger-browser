import React from 'react';
import { LinkItem } from '@atlaskit/menu';

import { NavigationItemIcon } from 'websight-admin/Icons';

import { SWAGGER_BROWSER_ROOT_PATH } from '../../../../utils/Constants.js';

export default class NavigationItemFragment extends React.Component {
    render() {
        return (
            <LinkItem
                href={SWAGGER_BROWSER_ROOT_PATH}
                elemBefore={<NavigationItemIcon className='material-icons'>description</NavigationItemIcon>}
            >
                Swagger Browser
            </LinkItem>
        );
    }
}

import React from 'react';
import { Route } from 'react-router-dom';

import { ConnectedItem, Item, MenuSection } from '@atlaskit/navigation-next';

const RoutedLinkItem = ({ itemComponent: Component = ConnectedItem, to, subText, text }) => {
    return (
        <Route
            render={() => (
                <Component
                    component={() => (
                        <Item
                            before={() => <i className='material-icons'>description</i>}
                            text={text}
                            href={'#' + to}
                            subText={subText}
                            isSelected={location.hash === ('#' + to) || location.hash.startsWith('#' + to + '/')}
                        />
                    )}
                />
            )}
        />
    );
}

function shortenName(name) {
    const result = name.startsWith('WebSight') ? name.substring(9, name.length) : name;
    return result.endsWith('Service') ? result.substring(0, result.length - 8) : result;
}

export default function NavigationMenu(props) {

    return (
        <MenuSection>
            {({ className }) => (
                <div className={className}>
                    {props.specs &&
                        props.specs.map((value, index) => {
                            return <RoutedLinkItem key={index}
                                text={shortenName(value.bundleName)}
                                subText={value.bundleSymbolicName}
                                to={value.location} />
                        })
                    }
                </div>
            )}
        </MenuSection>
    );
}
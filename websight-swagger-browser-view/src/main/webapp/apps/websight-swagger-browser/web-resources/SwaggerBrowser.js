import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import {
    ContainerHeader,
    HeaderSection,
    LayoutManager,
    NavigationProvider
} from '@atlaskit/navigation-next';

import NavigationMenu from './components/NavigationMenu.js';

import { PageContentContainer } from 'websight-admin/Containers';
import GlobalNavigation from 'websight-admin/GlobalNavigation';
import { AvatarIcon } from 'websight-admin/Icons';

import Footer from 'websight-admin/Footer';
import SwaggerBrowserService from './services/SwaggerBrowserService.js';

import { SWAGGER_BROWSER_ROOT_PATH } from './utils/Constants.js';

const NavigationHeader = () => (
    <HeaderSection>
        {({ css }) => (
            <div style={{ ...css, paddingBottom: 20 }}>
                <ContainerHeader
                    before={() => (
                        <AvatarIcon className='material-icons'>
                            description
                        </AvatarIcon>
                    )}
                    href={SWAGGER_BROWSER_ROOT_PATH}
                    text='Swagger API Documentation'
                />
            </div>
        )}
    </HeaderSection>
)

const iframeStyle = {
    minHeight: 'inherit',
    width: '100%',
    border: 'none'
}

export default class SwaggerBrowser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            specs: []
        }
    }

    componentDidMount() {
        this.getSpecs();
    }

    getSpecs() {
        const onSuccess = (data = { specs: [] }) => {
            this.setState(
                () => ({
                    specs: data.entity
                })
            );
        };

        this.setState(
            () => SwaggerBrowserService.getSpecs(onSuccess)
        );
    }

    render() {
        const { specs } = this.state;
        return (
            <HashRouter>
                <NavigationProvider>
                    <LayoutManager
                        key='layout-manager'
                        globalNavigation={GlobalNavigation}
                        productNavigation={() => null}
                        containerNavigation={() => (
                            <>
                                <NavigationHeader />
                                <NavigationMenu
                                    key='leftNavigation'
                                    specs={specs}
                                />
                            </>
                        )}
                        experimental_horizontalGlobalNav
                    >
                        <PageContentContainer>
                            <Switch>
                                {specs && specs.length > 0 &&
                                    <>
                                        <Route exact path='/' render={() => <Redirect to={specs[0].location} />} />
                                        {specs.map((value, index) => {
                                            return <Route
                                                key={index}
                                                path={value.location}
                                                render={() =>
                                                    <iframe style={iframeStyle} src={value.location}/>
                                                }
                                            />
                                        })}
                                    </>
                                }
                            </Switch>
                        </PageContentContainer>
                        <Footer />
                    </LayoutManager>
                </NavigationProvider>
            </HashRouter>
        );
    }
}

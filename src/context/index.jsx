import React, {PureComponent} from 'react';
import {AppContextType} from "./context_types";

export function withContext(WrappedComponent) {
    return class extends PureComponent {
        state = {
            isMobile: window.innerWidth < 768,
            isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
            isDesktop: window.innerWidth >= 1024
        };

        componentDidMount() {
            this.checkResolution();
            this.bindEvents();
        }

        componentWillUnmount() {
            this.unbindEvents();
        }

        bindEvents () {
            window.addEventListener('resize', this.checkResolution);
        }

        unbindEvents () {
            window.removeEventListener('resize', this.checkResolution);
        }

        checkResolution = () => {
            const {isMobile, isTablet, isDesktop} = this.state;

            if (window.innerWidth < 768 && !isMobile) {
                this.setState({
                    isMobile: true,
                    isTablet: false,
                    isDesktop: false
                })
            } else if (window.innerWidth > 767 && window.innerWidth < 1024 && !isTablet) {
                this.setState({
                    isMobile: false,
                    isTablet: true,
                    isDesktop: false
                })
            } else if (window.innerWidth >= 1024 && !isDesktop) {
                this.setState({
                    isMobile: false,
                    isTablet: false,
                    isDesktop: true
                })
            }
        };

        render () {
            return (
                <AppContextType.Provider value={this.state}>
                    <WrappedComponent {...this.props}/>
                </AppContextType.Provider>
            )
        }
    }
}

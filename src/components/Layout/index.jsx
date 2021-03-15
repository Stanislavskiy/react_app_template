import React from 'react';
import style from './Layout.module.scss';
import Header from "./Header";
import Footer from "./Footer";
import cn from 'classnames';

class Layout extends React.PureComponent {
    state = {
        menuOpen: false
    };

    handleMenuOpen = () => {
        setTimeout(() => {
            const {menuOpen} = this.state;

            if (menuOpen) {
                window.addEventListener('click', this.handleMenuOuterClick)
            }
        }, 150);
    };

    handleMenuOuterClick = (e) => {
        const {menuOpen} = this.state;
        const dropDown = e.target.closest('#headerNav');

        if (!dropDown && menuOpen) {
            this.setState({menuOpen: false});

            window.removeEventListener('click', this.handleMenuOuterClick)
        }
    };

    render() {
        const {menuOpen} = this.state;

        return(
            <div className={style.container}>
                <Header
                    menuOpen={menuOpen}
                    onToggleOpen={() => this.setState({menuOpen: !menuOpen}, this.handleMenuOpen)}
                />
                <main className={style.main}>{this.props.children}</main>
                <Footer/>
                <div className={cn(style.fade, {
                    [style.fadeActive]: menuOpen
                })}/>
            </div>
        )
    }

};

export default Layout;
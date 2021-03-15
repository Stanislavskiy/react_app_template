import React, {PureComponent} from 'react';
import {HEADER_NAVIGATION_ITEMS} from "./constants";
import Button from "../../Button";
import cn from 'classnames';
import {AppContextType} from "../../../context/context_types";
import Hamburger from "./Hamburger";
import {PAGE_HOME_PATH} from "../../../router/constants";
import {Link, withRouter} from "react-router-dom";

import style from './Header.module.scss';

class Header extends PureComponent {
    state = {
        scrolled: false
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {
        const {scrolled} = this.state;

        if (!scrolled && window.scrollY > 1) {
            this.setState({scrolled: true})
        } else if (scrolled && window.scrollY < 1) {
            this.setState({scrolled: false})
        }
    };

    render() {
        const {wrapperClass, onToggleOpen, menuOpen, location} = this.props;
        const {scrolled} = this.state;
        const {isMobile} = this.context;

        return (
            <header className={cn(style.container, wrapperClass, {
                [style.containerScrolled]: scrolled,
                [style.containerOpen]: menuOpen
            })}>
                <div className={cn(style.content, 'content')}>
                    <Link className={style.logoLink} to={PAGE_HOME_PATH}>
                        <img alt={'logo'}/>
                    </Link>
                    <nav id={'headerNav'} className={style.menuWrapper}>
                        <ul className={style.menu}>
                            {HEADER_NAVIGATION_ITEMS.map((item, i) => (
                                <li
                                    className={cn(style.menuItem, {
                                        [style.menuItemActive]: location.pathname === item.path
                                    })}
                                    key={i}
                                >
                                    <Link className={style.menuLink} to={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {isMobile ? (
                        <Hamburger
                            isOpen={menuOpen}
                            color={menuOpen ? "rgb(39,29,37)" : "rgb(201,201,201)"}
                            onClick={onToggleOpen}
                        />
                    ): (
                        <Button
                            wrapperClass={style.button}
                            text={'CTA'}
                            compact
                            light
                            outline
                        />
                    )}
                </div>
            </header>
        )
    }
}
Header.contextType = AppContextType;

export default withRouter(Header);
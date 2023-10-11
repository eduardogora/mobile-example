import React, { Component } from 'react';
import './NavBar.css';

export default class NavBar extends Component {

    constructor(props){
        super(props);
    
        const maxHeight = window.innerHeight - 50;
        const scrollToTop = (Math.min(window.scrollY, maxHeight) / maxHeight);
        this.state = {scrollToTop: scrollToTop};
        this.onScroll = this.onScroll.bind(this);
      }
    
      onScroll()  {
    
        const maxHeight = window.innerHeight - 50;
    
        const scrollTotop = (Math.min(window.scrollY, maxHeight) / maxHeight);
    
        this.setState({scrollToTop: scrollTotop});
      }
    
      componentDidMount() {
          document.addEventListener('scroll', this.onScroll);
      };
    
      componentWillUnmount() {
          document.removeEventListener('scroll', this.onScroll);
      }

    render() {

        const {scrollToTop} = this.state;

        return (
        <div className='nav-bar' style={{backgroundColor: 'rgba(0, 0, 0, ' + scrollToTop+')', boxShadow: `0 2px 20px 0px rgba(0,0, 0, ${(scrollToTop * 0.25)})`}}>
            <h1>NavBar</h1>
            <div className='nav-bar-btns'>
                <NavBarBtn>About us</NavBarBtn>
                <NavBarBtn>Projects</NavBarBtn>
                <NavBarBtn>Blog</NavBarBtn>
                <NavBarBtn>Contact us</NavBarBtn>
            </div>
        </div>
        )
    }
}

function NavBarBtn({children}) {
    return(
        <div className='nav-bar-btn'>
            {children}
        </div>
    )
}
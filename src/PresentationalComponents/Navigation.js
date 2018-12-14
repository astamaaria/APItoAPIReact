import React from 'react';
import {Navbar, NavItem, PageHeader, Nav} from 'react-bootstrap';

const Navigation  = (props) =>{
    return(
        <Navbar staticTop>
            <PageHeader>
                LakihankeData
                <small>
                    <Nav pullRight>
                        <NavItem target="_blank" rel="noopener noreferrer" href="https://localhost:44323/api/v1/hankeikkuna/lainsaadanto/">
                        APIfromAPI
                    </NavItem>
                    <NavItem target="_blank" rel="noopener noreferrer" href="https://api.hankeikkuna.fi/">
                        AlkuperäinenAPI
                    </NavItem>
                    </Nav>
                </small>
            </PageHeader>
            
        </Navbar>
    )
}

export default Navigation;
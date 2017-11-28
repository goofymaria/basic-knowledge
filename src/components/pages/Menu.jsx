import React from 'react';
import {Page, ContentBlock, ContentBlockTitle, Navbar, List, ListItem} from 'framework7-react';

export const Menu = () => {
    return (
        <Page>
            <Navbar title="Basic Knowledge Assesment" sliding />
            <ContentBlockTitle>CHOOSE</ContentBlockTitle>
            <ContentBlock>
                <List mediaList>
                    <ListItem
                        link="/str/"
                        media="<img src='img/lel.jpg' widht='50' height='50'>"
                        title="Basic Knowledge"
                        text=""
                    ></ListItem>
                    <ListItem
                        link="//"
                        media=""
                        title=""
                        text=""
                    ></ListItem>
                    <ListItem
                        link="//"
                        media=""
                        title=""
                        text=""
                    ></ListItem>
                </List>
            </ContentBlock>
        </Page>
    );
};

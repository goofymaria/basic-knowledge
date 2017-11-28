import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem} from 'framework7-react';

export const Str = () => {
    return (
        <Page>
            <Navbar title="Test your Knowledge" backLink="Back" sliding />
            <ContentBlock>
                <List mediaList>
                    <ListItem
                        link="/axe/"
                        media="<img src='img/q.jpg' widht='80' height='80'>"
                        title="QUIZ"
                        text=""
                    ></ListItem>
                   
                </List>
            </ContentBlock>
        </Page>
    );
};

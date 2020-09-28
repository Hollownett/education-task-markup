import React from 'react'

import {
    Header as AppHeader,
    HederTitle,
    HeaderContainer,
    TitleContainer,
    LinksContainer,
    Links,
} from './components'

function ProfileHeader(props) {
    return (
        <AppHeader>
            <TitleContainer>
                <HeaderContainer>
                    <HederTitle>{props.headerTitle}</HederTitle>
                </HeaderContainer>
                <LinksContainer>
                    <Links
                        exact
                        activeStyle={{
                            textDecorationColor: "#FFC200",
                            textDecorationLine: "underline",
                        }}
                        to="/profile">
                        Profile
                    </Links>
                    <Links
                        exact
                        activeStyle={{
                            textDecorationColor: "#FFC200",
                            textDecorationLine: "underline",
                        }}
                        to="/boards">
                        Notifications
                    </Links>
                </LinksContainer>
            </TitleContainer>
        </AppHeader>
    )
}

export default ProfileHeader

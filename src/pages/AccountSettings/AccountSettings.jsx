import React from 'react'
import { StyledContainer, StyledContent } from '../../components/Styled/AccountSettings.styled'
import AccountSettingsLeftNav from './AccountSettingsLeftNav'
import AccountSettingsRightContent from './AccountSettingsRightContent'
import Footer from '../../components/Footer/Footer'

const AccountSettings = () => {
  return (
    <>
    <StyledContainer>
        <StyledContent>
            <AccountSettingsLeftNav />
            <AccountSettingsRightContent />
        </StyledContent>
    </StyledContainer>
    </>
  )
}

export default AccountSettings

import React from 'react'

export const SignOut = (props) => {
  return(
    <div
      onClick={props.onSignOut}
    >
      로그아웃
    </div>
  )
}

export default SignOut
import React from 'react'

export const SignOut = (props) => {
  return(
    <div
      onClick={ ()=>{
          props.onSignOut(),
          props.onSetUpTargetPath(props.targetPath)
        }
      }
    >
      로그아웃
    </div>
  )
}

export default SignOut
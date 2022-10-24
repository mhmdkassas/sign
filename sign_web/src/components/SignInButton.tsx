import React from 'react';

export function SignInButton(props: {
    webState: number; 
    setWebState: any;
}): JSX.Element {

    const {webState, setWebState } = props;

    const changeWebState = () => {
        setWebState(1)
    }
    return (
        <div>
            <button className="SignInButton" onClick={changeWebState}>Sign Me</button>
        </div>
    );
}

export default SignInButton;
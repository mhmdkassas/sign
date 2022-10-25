import React from 'react';
import sign from '.././sign.svg';

export function SignSVG() {
    return( 
        <div className="sign">
            <img src={sign} height="540px" width="540px"/>
        </div>
    );
}

export default SignSVG;
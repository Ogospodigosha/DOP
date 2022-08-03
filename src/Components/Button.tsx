import React from 'react';
type ButtonPropsType = {
    nickName: string
    callback: ()=>void
}
export const Button = (props:ButtonPropsType) => {
    const onClickHandler =()=>{
        props.callback()
    }
    return (
       <button onClick={onClickHandler}>{props.nickName}</button>
    );
};


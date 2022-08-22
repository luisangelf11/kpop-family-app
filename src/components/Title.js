import React from 'react';
import '../components/Title.css';

export default function Title({titleName}){
    return(
        <>
            <h2 className='title'>{titleName}</h2>
        </>
    );
}

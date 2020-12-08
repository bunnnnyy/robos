import React from 'react';

const Card = ({id , name , email})=>{
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="profile pic" src={`https://robohash.org/${id}?200*200`} />
            <div>
                <h2>{name}</h2>
                <h5>{email}</h5>
            </div>
        </div>
    );
}

export default Card;
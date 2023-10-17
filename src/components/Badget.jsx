import React from 'react'

const Badget = ({ barTitle, badgetTitle }) => {

    //console.log(badgetTitle)
    return (
        <div className='d-flex gap-3 flex-wrap'>
            {barTitle}
            {badgetTitle && badgetTitle?.map((badge, i) =>
            (
                <p className={`
                ${barTitle==='Categories' ? 'bg-primary' : barTitle==='Languages' ? 'bg-danger' :
                barTitle==='Companies' ? 'bg-warning' : 
                null } badge rounded`
            
            
            } key={i}>{badge.name}</p>
            )
            )}


        </div>
    )
}

export default Badget
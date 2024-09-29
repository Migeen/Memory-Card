import React from 'react'

const Card = () => {

    return (
        <div className='w-44 h-56 border border-black rounded p-1'>

        </div>
    );
}

const CardContainer = () => {
    return (
        <div className='bg-gray-700 w-ful h-4/5 p-7 flex justify-center'>
            <div className='bg-white w-4/5 h-full flex flex-wrap p-20 gap-14 '>
                <Card/>
                <Card/>          
            </div>
        </div>
    )
}

export default CardContainer
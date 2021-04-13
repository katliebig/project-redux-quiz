import React from 'react'

import ResultScore from './ResultScore'
import ResultComment from './ResultComment'
import Image from './Image'
import RestartButton from './RestartButton'

const Summary = () => {
    return (
        <div>
            <Image />
            <ResultScore />
            <ResultComment />
            <RestartButton />
        </div>
    )
}

export default Summary
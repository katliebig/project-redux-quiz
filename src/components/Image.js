import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    
`
const ImagePhoto = styled.img`
width: 250px;
`



const Image = () => {
    return (
        <Container>
            <ImagePhoto src="./assets/nicolas-cage-smiling.png"></ImagePhoto>
        </Container>
    )
}

export default Image
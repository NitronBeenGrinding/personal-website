import React from 'react'

const Projects = () => {
    return (
        <div>
            <div className='section-basic section-t5'>
                <h3 class="section-subtitle">
                    Deliver or Die - Unity Game Engine (Fall 2020)
                </h3>
                <p class="section-text">
                    Deliver or Die was a large scale video game built on the Unity Engine by me and two other engineers. It consists
                    of a truck being followed by increasing swarms of more and tougher enemies. The game uses high level features of the
                    Unity engine such as NavMesh, terrain manipulation, and cool usage of the new AI feature! I encourage you to give it
                    a try or check out some of my other games <a href="http://www-personal.umich.edu/~sadhneni/">here</a>.
                </p>
            </div>
            <div className='section-basic section-t1'>
                <h3 className='section-subtitle'>
                    Waste Compliance Data Service - Amazon AWS (Summer 2021)
                </h3>
                <p className='section-text'>
                    I am currently not allowed to talk about this due to my NDA, so this is coming sooooooonnnn!!!!!
                </p>
            </div>
            <div className='section-basic section-t3'>
                <h3 className='section-subtitle'>
                    OneStop Ticket App - React and React Native (Current)
                </h3>
                <p className='section-text'>
                    The OneStop Ticket App's main goal is to limit the risk of selling student tickets at the University of Michigan! I am
                    currently building an app using React Native that will be able to transfer money and tickets to the proper person, as well
                    as utilizing search queries to find accurate results. Cuurently, I expect to use AWS Cognito Auth, API Gateway, and Firebase
                    to accomplish this feat! See you when it is finished!
                </p>
            </div>
        </div>
    )
}

export default Projects

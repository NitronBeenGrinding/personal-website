import React from 'react'
import '../css/style.css';

const Resume = () => {
    return (
        <div>
            <div className='section-basic section-t3'>
                <h1 class='section-title'>Resume - Abinav Sadhneni</h1>
                <h3 class="section-subtitle">Incoming Google Software Engineer</h3>
                <h3 class="section-subtitle">University of Michigan Class of '22</h3>
                <h3 class="section-subtitle">Hometown: Troy, MI</h3>
            </div>
            <div class='section-basic section-t4'>
                <div class='resume-formatting'>
                    <h3>Official Resume:</h3>
                    <p>Download here.</p>
                    <h3 class="res-st">Contacts: </h3>
                    <p>Github: <a href="https://github.com/NitronBeenGrinding"> NitronBeenGrinding </a></p>
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/abinav-sadhneni-b7184a1a1/"> Abinav Sadhneni</a></p>
                    <p>Email: asadhneni@gmail.com</p>

                    <h3 class="res-st">Education: </h3>
                    <h5 class="res-mnt"> University of Michigan - Ann Arbor, MI</h5>
                    <p>Intended B.S. in Computer Science - September '19 to April '22
                    <br></br>GPA - 3.8</p>
                    <p>Notable Classes and Focuses:
                        <ul>
                            <li>EECS 281: Data Structures and Algorithms (C++)</li> 
                            <li>EECS 370: Computer Organization (C, ARM)</li> 
                            <li>EECS 376: Foundations of CS (P-NP Problems, Encryption, Deciders)</li>
                            <li>EECS 445: Introduction to Machine Learning</li> 
                            <li>EECS 481: Software Engineering (Ubuntu, Test coverage) </li>
                            <li>EECS 482: Intro to Operating Systems (OS, Memory)</li>
                            <li>EECS 485: Web Systems (HTML, Jinja2, Python) </li>
                            <li>EECS 491: Introduction to Distributed Systems</li>
                            <li>EECS 492: Intro to AI (Markov Models, NLP) </li>
                            <li>EECS 494: Computer Game Design & Development (Unity, C#)</li> 
                            <li>MATH 423: Mathematics in Finance (Option Pricing, Brownian Motion)</li>
                            <li>MATH 425: Intro to Probability (Random, Poisson Distributions) </li>
                        </ul>
                    </p>
                    <h5 class="res-mnt"> Troy High School - Troy, MI </h5>
                    <p>
                        Public high school - Septermber '15 to June '19
                        <br></br>GPA - 4.35
                    </p>

                    <h3>Working Experience: </h3>
                    <h5>Incoming Google Engineer, Ads Software - Mountain View, CA</h5>
                    <p>Expected to start on June 6th, moving to California wish me luck!</p>
                    <h5>Former Amazon SWE1 Intern, AWS Amazon - Seattle, WA</h5>
                    <ul>
                        <li>
                            Worked on the large-scale Waste Compliance goal which allows companies to store waste dependent 
                            on specific sites, clusters, streams, and containers 
                        </li>
                        <li>
                            Learned multiple technologies in AWS such as Lambda, Coral Lambda Endpoint, API Gateway, 
                            DynamoDB, Cloudwatch, CDK Pipelines, etc. in a couple weeks 
                        </li>
                        <li>
                            Worked in large group involving 30+ high-level employees, used required coding practices, and learned 
                            how to work in huge code repositories
                        </li>
                        <li>
                            Personally set up meetings and managed my project such that goals were met on time 
                        </li>
                        <li>
                            Wrote my own design document and went through a professional design review before implementation 
                            of the project
                        </li>
                        <li> 
                            Demoed project to over 150 senior engineers and wrote clear documentation for use and future 
                            modification 
                        </li>
                    </ul>

                    <h3>Notable Projects:</h3>

                    <h5>ONESTOP UMICH TICKET SERVICE APP | SEPT 2021 - PRESENT </h5>
                    <ul>
                    <li>Under production, will be used by UMich students to resell tickets instead of risky transactions online </li>
                    <li>
                        Created using Expo React Native interface, integrates multiple libraries such as Stack Navigator and 
                        Elements to render friendly UI to user
                    </li> 
                    <li>
                        Uses AWS Cognito with user pools to verify that the user is a UMich student by identifying student 
                        email; comprehensive authentication workflow
                    </li>
                    <li>
                        Uses AWS GraphQL API Gateway to manage ticket buyers and sellers on the market 
                    </li>
                    <li>
                        Final goal is to release app on iOS and Android by the end of the year (December 2021) 
                    </li>
                    </ul>

                    <h5>BACKEND API FOR AWS WASTE COMPLIANCE DATA SERVICE | JUN - AUG 2021</h5>
                    <ul>
                        <li>
                            Used AWS Services such as Lambda, API Gateway, DynamoDB with no prior experience 
                        </li>
                        <li>
                            Wrote and used a fully developed pipeline to continuously test newly deployed code 
                        </li>
                        <li>
                            Created comprehensive integration tests such that the framework was tested externally mocking client 
                            calls 
                        </li>
                        <li>
                            Worked with separate teams to integrate the API with multiple dependents; the most notable being an 
                            automated workflow creator 
                        </li>
                        <li>
                            Worked with multiple different languages to fully create standalone service (Java, TypeScript, 
                            JavaScript, C++, Python) 
                        </li>
                    </ul>
                    
                    <h5>DELIVER OR DIE - UNITY (LARGE SCALE PROJECT) | NOV - DEC 2020</h5>
                    <ul>
                        <li>Uses the Unity Game Engine with C# </li>
                        <li>
                            Contains high level features such as animation, NavMesh, terrain manipulation, advanced AI 
                            programming 
                        </li>
                        <li>
                            Encouraged planning and teamwork with high chemistry and detailed professional worklogs, including 
                            readable, labeled, and explainable code
                        </li>
                    </ul>
                    <h5>These projects can be found under the Projects tab.</h5>

                    <h3>Programming Proficiencies: </h3>
                    <ul>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Python</li>
                        <li>TypeScript</li>
                        <li>HTML, CSS, JavaScript</li>
                        <li>AWS Tools (Lambda, CDK Pipeline, API Gateway, IAM)</li>
                        <li>MatLab</li>
                        <li>React Native</li>
                    </ul>

                    <h3>Mathematical Proficiencies: </h3>
                    <ul>
                        <li>Linear Algebra</li>
                        <li>Multivariable Calculus</li>
                        <li>Financial Mathematics</li>
                        <li>Probablistic Mathematics</li>
                        <li>AI and Machine Learning</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume

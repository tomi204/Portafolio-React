import React from 'react'
import { FaIdCard } from 'react-icons/fa'
import "./Intro.css"

const Intro = () => {
    return (
        <div className='intro-main'>
            <div className='titulo'>
                <h1> Tomás Oliver</h1>
                <h3>I am a very proactive, focused and dedicated person.
                    dedicated.
                    I am passionate about technology, Blockchain
                    and all it has to offer.</h3>
                <a href="">
                    <button>
                        Download CV <FaIdCard />
                    </button>
                </a>
            </div>
            <div className='d3'></div>
        </div>
    )
}

export default Intro
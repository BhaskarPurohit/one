import React from 'react'
import "../styles/Home.scss"
import vg from "../assets/2.webp"

const Home = () => {
  return (
    <>
     <div className='home' id=''>
        <main>
            <h1>Techie Star</h1>
            <p>Solution to all your problems</p>
        </main>
     </div>

     <div className="home2">

        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We offer solution to all the tech problems you face every day.
                We are leading tech company whose aim is to increse the problem solving ability in children.
            </p>
        </div>
     </div>
     <div className="home3">
        <div>
            <h1>Who We Are</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis inventore consequuntur eveniet accusamus aspernatur exercitationem delectus ipsa pariatur nesciunt assumenda, laborum dolorum id sint enim magnam totam saepe vel similique sunt quia cupiditate. Voluptates est in ad modi iusto! Aperiam dolorum maxime inventore nemo odio ad eaque, minus temporibus dolorem!</p>
        </div>
     </div>
    </>
  )
}

export default Home
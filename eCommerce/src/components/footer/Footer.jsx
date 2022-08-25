import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsInstagram, BsWhatsapp, BsLinkedin, BsGithub} from 'react-icons/bs'
import './footer.scss'
const Footer = () => {
  


    return (
    <>
     


<footer className=" text-center text-white">
<div className="container p-4">

  <section className="mb-4">
    <Link className="btn btn-primary btn-floating m-1 rounded-circle" id='face' to='https://www.facebook.com/gejo.leschevich'><BsFacebook/> </Link>  
    <Link className="btn btn-primary btn-floating m-1 rounded-circle" id='insta' to='https://www.instagram.com/gejol86/'><BsInstagram/> </Link>  
    <Link className="btn btn-primary btn-floating m-1 rounded-circle" id='whats' to='/'><BsWhatsapp/> </Link>  
    <Link className="btn btn-primary btn-floating m-1 rounded-circle" id='linked' to='https://www.linkedin.com/in/german-leschevich-b9986927/'><BsLinkedin/> </Link>  
    <Link className="btn btn-primary btn-floating m-1 rounded-circle" id='git' to='https://github.com/gleschevich/Vi-Commerce'><BsGithub/> </Link>  

    
  </section>



  <section className="mb-2">
    <p className='text-large'>
      VI-COMMERCE: Somos una tienda de vinilos musicales que realiza envíos a todo el país!
    </p>
  </section>

</div>

<div className="text-center" >
  © 2022 Copyright: 
  <Link className="text-white" to="https://github.com/gleschevich/Vi-Commerce"> Germán Leschevich</Link>
</div>

</footer> 
    </>
  )
}

export default Footer



















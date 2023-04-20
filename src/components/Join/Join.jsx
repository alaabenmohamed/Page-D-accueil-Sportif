import React , { useRef }  from 'react'
import emailjs from'@emailjs/browser'/*yetsab*/


import './Join.css'
const Join = () => {
  const form=useRef()
  const sendEmail = (e) => { /* debut :copier coller de recherche internet emailjs ->react */
    e.preventDefault();

    emailjs.sendForm('service_9h4h7ru', 'template_mdx5nfr', form.current, 'iIuZvhltmv_PFgG24')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }; /*fin*/
  return (
  <div className="Join" id="join-us">e 
    <div className="left-j">
        <hr/> {/* 5at*/}
       <div>
        <span className='stroke-text'> READY TO </span>
        <span>LEVEL UP</span>
        </div>
        <div><span>YOUR BODY</span>
            <span  className='stroke-text' >WITH US?</span>
            </div>
    </div>
    <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder=" Enter your email adrees" />
           <button className="btn btn-j">Join Now</button>
        </form>
    </div>
  </div>
  )
}

export default Join
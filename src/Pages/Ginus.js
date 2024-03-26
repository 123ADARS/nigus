import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container-main'>
        <header>
                <div className='head' >
                    <div>
                    <a href="tel:#">+91 98806 98312</a>
                    </div>
                    <div>
                    <a href="mailto:#">sales@nigussystems.com</a>
                    </div>
                    <div className='contact'>
                       <h4>Contact</h4>
                    </div>
                    <div className='btn'>
                        <button>Sales</button>
                  </div>
                  <div className='btn'>
                     <button>Support</button>
                  </div>
                </div>
                <div className='navbar'>
                 <div className='navbar-logo border'>
                   <div className='logo'>
                   <a class="brand" href="http://www.nigussystems.com">
                    <img class="brand-logo-dark" src="images/nigus-logo.png" alt="" width="100" height="50" /></a>
                    </div>      
                </div>
                <div className='contact border'>
                         {/* <span>SOFTWARE DEVLOPMENT</span> */}
                         <Link to="/">
                                SOFTWARE DEVLOPMENT
                            </Link>
                    </div>
                    <div className='sales border'>
                          
                    <Link to="/software">
                                WEB DEVLOPMENT
                            </Link>
                    </div>
                    <div className='support border'>
                    <Link to="/system">
                                SYSTEM INTEGRATION
                            </Link>
                    </div>    
                    <div className='support border'>
                    <Link to="/AI">
                                AI/ML DEVELOMENT
                            </Link>
                    </div> 
                    <div className='support border'>
                      <Link to="/testing">TESTING</Link>
                    </div> 
                     <div className='support border'>
                        <Link to="/systemtesting">SYSTEM TESTING</Link>
                    </div>      
                 </div>
        </header>
    
      
        <div className='container'>
             <div className='container-box'>
             <h2 class="h1">Revolutionizing Enterprise with Innovative Solutions</h2>
             <span className='h2'>  
                Modernize the organization with innovative software solutions and application integrations   
             </span>
             </div>
             <div className='container-images'>
                  <div>
                  <img className="a"
                  src="http://www.nigussystems.com/images/integration-logos.gif" alt="logo"/>
                  </div>
             </div>
        </div>

        <div className='clients'>
                  <div className='clients-box'>
                  <h1>Our clients</h1>
                  </div>
                  <div className='image'>< img  className='b' src="http://www.nigussystems.com/images/slider3.png" alt="slider3" /></div>
          </div >
          <div className='text'>
          <h3>Future-Ready Solutions: Transforming your business with  innovative software</h3>
          {/* <p>Integrate any business application with new or existing systems</p> */}
          </div>
          <div className='box-section'> 
              <div className='box1 box'>

              <img src="http://www.nigussystems.com/images/apps.png" alt="3CX Apps: Web Client, iOS, Android, Windows, Mac" width="140" height="140"/>
               <h1 className='a1'>Web Development</h1>
              </div>

              <div className='box2 box'>
              <img src="http://www.nigussystems.com/images/crm%20integration.png" alt="crm-integration" width="140" height="140"/>
               <h1 className='a2'>Software Development</h1>
                </div>
              <div className='box3 box'>
              <img src="http://www.nigussystems.com/images/application-integration.png" alt="Business Application" width="140" height="140"/>
               <h1 className='a3'>QA & TESTING SERVICES</h1> 
                </div>
             </div>
            <div className='description'>
              <div className='content'>
                <div className='content-1'>
                <h4 className='ad1'>Integrating diverse software solutions with enterprise <br/>software and applications, encompassing Analytics,<br/> Support, IT Management, Human Resources, CRM,<br/> and Operations Software, enhances adaptability and <br/>efficiency to meet the increasing demands of <br/>business operations.</h4>
                </div>
              <div content-2>
              <ul className='ad2'>
                 <li class="t">Web Development</li>
                 <li>Enterprise Web App Development</li>
                 <li>Mobile App Development</li>
              </ul>
              </div>
              </div>
              <div className='image-content'>
              <img className="as" src="http://www.nigussystems.com/images/business-conferencing.png" width="450" height="350" alt="business-conferencing"/>
              </div>
          </div>
          <div className='system'>
            <h3>Why Nigus System?</h3>
          </div>
          <div className='card'>
                 <div className='card1 cd'> 
                 <img src="http://www.nigussystems.com/images/versatality-features.png" alt="Versatility of Features" />
                 <div className='cost1'><h4>COST EFFECTIVE SOLUTION</h4></div>
                 <div className='line1'><h5>Optimize your budget with our cost-effective software solutions. Enjoy comprehensive set of features without compromising on quality.  Our pricing models are designed to offer value for your investment, helping you achieve a higher return on investment.</h5></div>
                 </div>
                 <div className='card2 cd'> 
                 <img src="http://www.nigussystems.com/images/service-mobility.png" alt="agbg"/>
                 <div className='cost2'><h4>INNOVATIVE TECHNOLOGY</h4></div>
                 <div className='line2'><h5>Embrace cutting-edge technology with our software solutions, ensuring your business stays ahead in an ever-evolving digital landscape. Benefit from features designed to enhance efficiency and adaptability.</h5></div>
                 </div>
                 {/* <div className='card3 cd'>3</div>
                 <div className='card4 cd'>4</div> */}
          {/* </div>
          {/* <div className='card'>
                 <div className='card1 cd'> 
                 <img src="http://www.nigussystems.com/images/versatality-features.png" alt="grid"/>
                 </div>
                 <div><h4>Customer-Centric Solutions</h4></div>

                 {/* <div className='card3 cd'>3</div>
                 <div className='card4 cd'>4</div> */}
          </div> */
          <div className='all z'>
          <div className='about'>
               <p> We provide a range of software solutions, applications, and system integrations with business applications, offering numerous advantages as the software extracts insights from various applications.</p>
          </div>
          <div className='about1 z'>
            <p>Our versatile software solutions and integrations cater to diverse industries, streamlining operations and enhancing efficiency. With a commitment to innovation, we provide tailored services to meet the evolving needs of businesses across sectors.</p>
          </div>
          
          </div> 
          <div className='ed'>
          <h4>IT</h4> <h4>ITeS</h4><h4>Manufacturing </h4> <h4>   Retail </h4>    <h4>Education</h4>
          </div >
          <footer className='end'>
            <div className="f">
            <div className='logoq'>
                   <a class="brand" href="http://www.nigussystems.com">
                    <img class="brand-logo-dark" src="images/nigus-logo.png" alt="" width="100" height="50" /></a>
                    </div> 
                    <div className='w'>
                    <h5>
                    Nigus Systems Private Limited
                    </h5>
                    <h5>We work across 24 x 7 to help you run your business without any hassle.</h5>
                    <a href="https://in.linkedin.com/company/nigus-systems" alt="h">Linkedin</a>
                    <span>©&nbsp;2024Nigus Systems Pvt Ltd</span>
                    </div>
                    </div>
          </footer>
    </div>
  )
}
export default Home


 

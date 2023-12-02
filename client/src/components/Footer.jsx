import React from 'react';

function Footer() {
  const socialLinks =[
    {
      id: 1,
      title: 'GitHub',
      link: 'https://github.com/xJuanPablo',
    },{
      id: 2,
      title: 'LinkedIn',
      link: '',
    },{
      id: 3,
      title: `Pablo's TechTide`,
      link: 'https://pablos-tech-tide.com/',
      break: <br/>
    }
  ]
  return (
    <div className='footer'>
    <div className="footer-container">
      <div className='footer-col1'>
        <h2 className='footer-col1-title'>BuzzBurst</h2>
        <p>With end-to-end encryption, your messages are shielded from prying eyes, ensuring confidential and private communication. This small yet mighty web application prioritizes user-friendly design, making it easy for anyone to enjoy the benefits of private messaging.</p>
      </div>
      <div className='footer-col2 side-by-side'>
        <h3>Contact Info</h3>
        <br />
        <br />
        <p>
          +1(254)624-5415
        </p>
        <br />
        <p>
          Pabloarchuleta@gmail.com
        </p>
        <br />
        <p>
          123 fake Rd,
        </p>
        <p>
          Belton, Texas 76513
        </p>
        <p>
          United States
        </p>
      </div>
      <div className='footer-col2 side-by-side'>
        <h3>Social Links</h3>
        <br /><br />
        <ul>
          {socialLinks.map(({id, title, link}) =>(
            <div key={id}>
              <li><a href={link}>{title}</a></li>
              <br />
            </div>
            
          ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Footer
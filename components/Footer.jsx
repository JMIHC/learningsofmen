import Link from 'next/link'

function Footer() {
    return (
      <footer className="footer my-12 bg-base-100 text-base-content rounded">
        <div className="grid grid-flow-col">
          <Link href='/' className="link link-hover">Front page</Link> 
        </div> 
        <div>
          <p>Copyright © 2022 - Johnny Cornyn   Reach out at johnny@learningsof.men</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;
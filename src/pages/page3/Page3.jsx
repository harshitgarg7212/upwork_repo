import React from "react";
import image from '../../assets/images/photography.png';
import "../../styles/page3.css";
import Banner from "../../components/page3/Banner";

const Page3 = () => {
  return (
    <div>
      <div className="heroBg">
        <Banner />
      </div>
      <div className="max-width">
        <div className="descriptionCard">
          <h2>Lorem ipsum dolor sit amet</h2>
          <p style={{ lineHeight: '1.5' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur.
            <br />
            <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit,
          </p>
        </div>
        <div className="des-pic-Card">
          <div>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p style={{ lineHeight: '1.5' }}>
              <b className="page3-heading">Lorem ipsum dolor sit amet </b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
              irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur.
              <br />
              <br />
              <b className="page3-heading">Lorem ipsum dolor sit amet </b>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
              ullamco laboris nisi
              <br />
              <hr></hr>
              <b style={{ fontSize: '20px' }}>Lorem ipsum dolor sit amet </b>Sed ut perspiciatis unde omnis
              iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
              ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              consequuntur magni dolores eos
            </p>
          </div>
          <div>
            <img src={image}></img>
          </div>
        </div>
        <div className="des-pic-Card">
          <div>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p style={{ lineHeight: '1.5' }}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
              porro quisquam est,
            </p>
          </div>
          <div>
            <img src={image}></img>
          </div>
        </div>
        <div className="descriptionCard">
          <h2><b>Lorem ipsum dolor sit amet</b></h2>
          <p style={{ lineHeight: '1.5' }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim 
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia 
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
            adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>
      </div>
      <h2 className="pg3-bottom-headline">Lorem ipsum dolor sit amet</h2>
    </div>
  );
};

export default Page3;

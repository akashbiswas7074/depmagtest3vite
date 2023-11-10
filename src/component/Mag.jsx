import HTMLFlipBook from "react-pageflip";
import React, { Component,useRef,useCallback, } from "react";
import reactLogo from "./1.png";
import poem1 from "./poemsnew/poem1.png";
import poem2 from "./poemsnew/poem2.png";
import poem3 from "./poemsnew/poem3.png";
import poem4 from "./poemsnew/poem4.png";
import poem5 from "./poemsnew/poem5.png";
import poem6 from "./poemsnew/poem6.png";
import poem7 from "./poemsnew/poem7.png";
import poem8 from "./poemsnew/poem8.png";
import poem9 from "./poemsnew/poem9.png";
import poem10 from "./poemsnew/poem10.png";
import poem11 from "./poemsnew/poem11.png";
import poem12 from "./poemsnew/poem12.png";
import poem13 from "./poemsnew/poem13.png";
import poem14 from "./poemsnew/poem14.png";
import poem15 from "./poemsnew/poem15.png";
import poem16 from "./poemsnew/poem16.png";
import shortstory1 from "./shortstorynew/shortstory1.png";
import shortstory2 from "./shortstorynew/shortstory2.png";
import shortstory3 from "./shortstorynew/shortstory3.png";
import shortstory4 from "./shortstorynew/shortstory4.png";
import shortstory5 from "./shortstorynew/shortstory5.png";
import shortstory6 from "./shortstorynew/shortstory6.png";
import shortstory7 from "./shortstorynew/shortstory7.png";
import shortstory8 from "./shortstorynew/shortstory8.png";
import shortstory9 from "./shortstorynew/shortstory9.png";
import shortstory10 from "./shortstorynew/shortstory10.png";
import shortstory11 from "./shortstorynew/shortstory11.png";
import shortstory12 from "./shortstorynew/shortstory12.png";
import shortstory13 from "./shortstorynew/shortstory13.png";
import shortstory14 from "./shortstorynew/shortstory14.png";
import shortstory15 from "./shortstorynew/shortstory15.png";
import "./Cssmag2.css"
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import {
  TransformWrapper,
  TransformComponent,
  
} from "react-zoom-pan-pinch";
import arrow from "./arrow.png";
import Quickpinch from "./Quickpinch";

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        
        <div className="page-image"></div>
        
        <div className="page-text">{props.children}</div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

class DemoBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      totalPage: 0,
    };
  }

  
  nextButtonClick = () => {
    this.flipBook.pageFlip().flipNext()
  };



prevButtonClick = () => {
    this.flipBook.pageFlip().turnToPrevPage();
  };
  onPage = (e) => {
    this.setState({
      page: e.data,
    });
  };

 

  render() {
    return (
      <div>
        <HTMLFlipBook
          width={450}
          height={773}
          size="stretch"
          minWidth={355}
          maxWidth={900}
          minHeight={550}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          autoSize={true}
          
          flippingTime={1000}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
          
          clickEventForward={true}
          showPageCorners={true}
          
    disableFlipByClick={true}
        >

          <PageCover>BOOK TITLE</PageCover>
          <Page number={1}><Zoom>
      <img
        src={reactLogo} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"
	
          
         
      />
    </Zoom></Page>
          {/*poem*/}
          <Page number={2}> <Zoom>
      <img
        src={poem1} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={3}><Zoom>
      <img
        src={poem2} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={4}><Zoom>
      <img
        src={poem3} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={5}><Zoom>
      <img
        src={poem4} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem5} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem6} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem7} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem8} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem9} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem10} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem11} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem12} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem13} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem14} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem15} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={poem16} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
{/*shortstory*/}

          <Page number={6}><Zoom>
      <img
        src={shortstory1} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory2} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory3} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory4} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory5} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory6} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory7} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory8} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory9} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory10} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory11} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory12} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory13} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory14} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}><Zoom>
      <img
        src={shortstory15} alt="react logo" 
        
        align-items= "stretch"
        width="100%"
	height= "100%"
	display= "flex"
	flex-direction= "column"
	justify-content="space-between"   
         
      />
    </Zoom></Page>
          <Page number={6}></Page>
          <Page number={6}></Page>
          <Page number={6}></Page>
          <Page number={6}></Page>
          <Page number={6}></Page>

          <PageCover>THE END</PageCover>

        </HTMLFlipBook>

        <div className="container">
          <div>

            <button type="button" onClick={this.prevButtonClick} style={{
              left: '-450%',
            }}>
              <img src={arrow} width={"20px"} style={{
              
              position: "center",   rotate: "180deg", }}/>
            </button>

            [<span>{this.state.page}</span> ]

            <button type="button" onClick={this.nextButtonClick}>
             <img src={arrow} width={"20px"} style={{
              
          position: "center",  }}/>
            </button>

          </div>
          <div>

            KGEC <i>{this.state.state}</i>CSE-Department <i>{this.state.orientation}</i>

          </div>
        </div>
      </div>
    );
  }
}

export default DemoBook;
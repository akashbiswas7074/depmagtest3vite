import HTMLFlipBook from "react-pageflip";
import React, { Component,useRef,useCallback, } from "react";
import arrowleft from "./arrow-point-to-right.png";
import reactLogo from "./1.png";
import "./Cssmag2.css"
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'



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
          height={743}
          size="stretch"
          minWidth={335}
          maxWidth={900}
          minHeight={660}
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
          <Page number={2}> </Page>
          <Page number={3}></Page>
          <Page number={4}></Page>
          <Page number={5}></Page>
          <Page number={6}></Page>
          <PageCover>THE END</PageCover>

        </HTMLFlipBook>

        <div className="container">
          <div>

            <button type="button" onClick={this.prevButtonClick} style={{
             backgroundColor: "#E0E0E0",
            }}>
            <img src={arrowleft} width = "16" height = "16"  style={{
              transform: 'rotate(180deg)',
            }}/>
            </button>

            [<span>{this.state.page}</span> ]

            <button type="button" onClick={this.nextButtonClick} style={{
             backgroundColor: "#E0E0E0",
            }} >
            <img src={arrowleft} width = "16" height = "16"  style={{
              transform: 'rotate(0deg)',
            }}/>
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
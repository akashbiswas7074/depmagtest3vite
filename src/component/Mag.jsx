import HTMLFlipBook from "react-pageflip";
import React, { Component,useRef,useCallback, } from "react";
import reactLogo from "./1.png";
import "./Cssmag2.css"
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import {
  TransformWrapper,
  TransformComponent,
  
} from "react-zoom-pan-pinch";

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
    this.flipBook.pageFlip().turnToNextPage()
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
          height={733}
          size="stretch"
          minWidth={215}
          maxWidth={1000}
          minHeight={400}
          maxHeight={1533}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          autoSize={true}
          usePortrait={true}
          flippingTime={1000}
          onFlip={this.onPage}
          onChangeOrientation={this.onChangeOrientation}
          onChangeState={this.onChangeState}
          className="demo-book"
          ref={(el) => (this.flipBook = el)}
          
          clickEventForward={true}
          showPageCorners={true}
          useMouseEvents={true}
    swipeDistance={50}
    disableFlipByClick={true}
        >

          <PageCover>BOOK TITLE</PageCover>
          <Page number={1}><page-image><img  src={reactLogo} alt="react logo"  style={{
           
            height: 700,
            width: 350,
          }}/></page-image></Page>
          <Page number={2}> <TransformWrapper>
      <TransformComponent>
      <img  src={reactLogo} alt="react logo" style={{
           
           height: 700,
           width: 350,
         }}/>
      </TransformComponent>
    </TransformWrapper></Page>
          <Page number={3}><Zoom><TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
          </div>
          <TransformComponent>
          <img  src={reactLogo} alt="react logo" style={{
           
           height: 700,
           width: 350,
         }}/>
            <div>Example text</div>
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper></Zoom></Page>
          <Page number={4}><Zoom><Quickpinch/> </Zoom></Page>
          <Page number={5}> <Zoom>
      <img
        src={reactLogo} alt="react logo" width="500"
      />
    </Zoom></Page>
          <Page number={6}></Page>
          <PageCover>THE END</PageCover>

        </HTMLFlipBook>

        <div className="container">
          <div>

            <button type="button" onClick={this.prevButtonClick}>
              Previous page
            </button>

            [<span>{this.state.page}</span> ]

            <button type="button" onClick={this.nextButtonClick}>
              Next page
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
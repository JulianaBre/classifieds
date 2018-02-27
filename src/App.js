import React, { Component } from 'react';
import Tabber from "./components/tabber";


class App extends Component {
  _realEstate() {
    return (
      <div className="container">
        <div className="container-top">
          <div className="container-left">
          <div className="title">International Real Estate</div>
          <div className="title subtitle"> House hunting in London!</div>
          <div className="container-left-content">
            <div className="content-left">
              Despite the slump after the 2008 housing crash, prices in London have rebounded to the highest levels ever.
            </div>
            <div className="content-right">
              <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" 
                width="200px" alt="house"></img>
            </div>    
          </div>  
          <div>
            <img className="slideshow" src="https://maxcdn.icons8.com/Share/icon/p1em/Photo_Video//camera1600.png"
              width="22px" alt="slideshow"></img>
            <span><a href="#">Slide Show</a></span>
          </div>
          </div>
          <div className="container-right">
            <div className="title">Find Properties</div>
            <ul className="property-links">
              <li><a href="#">Go to Real Estate section</a></li>
              <li><a href="#">Search for Properties</a></li>
              <li><a href="#">Download the Real Estate app</a></li>
              <li><a href="#">Commercial Real Estate</a></li>
              <li><a href="#">Video Showcase: Real Estate</a></li>
              <li><a href="#">Post an Ad</a></li>
            </ul>  
          </div>  
        </div>
        <div className="container-middle">
          <div className="container-left">
            <img src="https://cdn.pixabay.com/photo/2016/06/01/17/43/house-1429409_1280.png"
              width="200px" alt="house advertisement"></img>
          </div>
          <div className="container-right">
            <div>
              <div><a href="#">NoMads Newest Condos</a></div>
              <div><a href="#">2 BRs starting $2.050 M</a></div>
              <div><a href="#">3 BRs starting $2.9 M</a></div>
              <div className="ad-space"><img  src="http://placehold.it/200x100" 
                  width="150px" alt="image placeholder"></img></div>
            </div>
          </div>
        </div> 
        <div className="container-bottom">
          <a href="#">Place a Classified Ad >></a>
        </div>   
      </div>    
    );
  }

  _tabContent(title, content) {
    return (
      <div className="container">
        <div className="subtitle">{title}</div>
        <div className="container">{content}</div>
      </div>  
    )
  }

  _content2() {
    return (
      <div>
        <p>
        Mortgage company HSH Associates released another of its quarterly surveys
        estimating how much money a potential homebuyer should earn before
        attempting a foray into the real estate market in most major cities.
        Today’s news is that, unless you’re the sort of person who gets paid in
        giant sacks bearing dollar signs, buying in San Jose is a difficult
        prospect.
        </p>
        <p>
        Last November 
        HSH recommended pulling in at least $216,181 annually before trying to
        put down roots in Silicon Valley, which was already absurd to begin
        with. But now the marker has bounced up an astounding degree in only
        months, coming in at $235,646 in the latest tabulation.
        That’s a spike of more than $19,400 since the fall. For
        perspective, San Francisco’s figure went up roughly $5,000 (to
        $176,121/year) during the same period—a queasy trajectory in and of
        itself—while the national figure dropped more than $800 in the same
        period.
        Statistically, the increase is actually just 0.8 percent in both SF and San Jose.
        </p>
      </div>
    );
  }

  _content3() {
    return (
      <div>
        <p>
        “Don’t cry out loud,” urges 
        songstress Melissa Manchester, who famously adds, “keep it inside,
        learn how to hide your feelings.” To which we say, pish posh. Should you
        find yourself on the verge of salty tears, don’t worry—there are many
        places in the city to sit and let out a good, healthy cry.
        </p>
        <p>
        Inspired by out sister site Curbed Philly 
        we selected some places that are better for warm weather and a few
        options for winter’s chill. (And with Valentine’s Day here, we won’t
        judge lonely hearts who get depressed on this day.) While there are
        definitely many more spots to sob in the city, we chose ten of our
        favorites boo-hoo hubs.
        Do you have a favorite place we didn’t include? Let us know. We won’t judge. 
        </p>     
      </div>
    );
  }

  _content4() {
    return (
      <div>
        <p>
        March is set to come in like a lion in San Francisco, as
        the National Weather Service (NWS) forecasts a week of storms ahead,
        closing out an otherwise bone-dry February and kicking off spring with a
        sudden drenching.
        Rain walloped the city very early Monday, and that’s just the start of the business according to NWS, which warns of 
        a chance of showers and thunderstorms after 10 a.m. Some of the storms
        could produce small hail. Winds could gust as high as 32 mph.
        </p>
        <p>
        All of this activity won’t add up to to much
        precipitation, “less than a tenth of an inch, except higher amounts
        possible in thunderstorms” in the city. But at least it may relieve the unfortunate 
        spring-like heat that’s cranked up the dial across the Bay Area all month long.
        This spate of storms is just getting started. Although
        predictions expect Tuesday to be clear and sunny again, and hedge only
        about a 30 percent chance of rain on Wednesday morning, odds favor a
        substantial San Francisco soaking of up to a quarter of an inch on
        Wednesday night and into Thursday, with precipitation pegged at 80 to 90.
        percent likelihood.
        </p>     
      </div>
    );
  }


  render() {
    return (
      <Tabber activeTabClass="active"className="tabber">
        <Tabber.Controls>
          <Tabber.Tab>
              <div>Real Estate</div>
          </Tabber.Tab>
          <Tabber.Tab>
              <div>Autos</div>
          </Tabber.Tab>
          <Tabber.Tab>
              <div>Jobs</div>
          </Tabber.Tab>
          <Tabber.Tab className="tab-end">
              <div>Classifieds</div>
          </Tabber.Tab>
        </Tabber.Controls>
        <Tabber.Container>
          <Tabber.Content>
            {this._realEstate()}
          </Tabber.Content>
          <Tabber.Content>
            {this._tabContent("Tab 2 Content", this._content2())}
          </Tabber.Content>
          <Tabber.Content>
            {this._tabContent("Tab 3 Content", this._content3())}
          </Tabber.Content>
          <Tabber.Content>
            {this._tabContent("Tab 4 Content", this._content4())}
          </Tabber.Content>
        </Tabber.Container>
      </Tabber>
    );
  }
}

export default App;

import React, { Component } from 'react'
import Card from '../components/Card'
import Win from '../components/Win'
import '../styles/Card.css'

const SHOW_CARD = 1400

class App extends Component {

  constructor () {
    super()
    this.state = {
      cards: [
        'https://s-media-cache-ak0.pinimg.com/236x/b4/34/6c/b4346ce1ccf8cc67eaabcf1b07f15025.jpg',
        'http://www.smh.com.au/content/dam/images/3/m/5/s/j/image.related.articleLeadNarrow.300x0.1237xt.png/1418088262047.jpg',
        'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/29/14/enhanced/webdr04/anigif_original-grid-image-26699-1414606736-11.gif',
        'https://s-media-cache-ak0.pinimg.com/564x/e2/60/0c/e2600c1a0992ab6fd32d12f1dcc9af89.jpg',
        'https://67.media.tumblr.com/5b5ec4f3126714dddf5c257bbe8b91ca/tumblr_mldcz9vVct1s8mg7mo1_500.jpg',
        'https://s-media-cache-ak0.pinimg.com/236x/b4/34/6c/b4346ce1ccf8cc67eaabcf1b07f15025.jpg',
        'http://www.smh.com.au/content/dam/images/3/m/5/s/j/image.related.articleLeadNarrow.300x0.1237xt.png/1418088262047.jpg',
        'http://images2.fanpop.com/images/photos/5600000/Morticia-Addams-addams-family-5683828-380-357.jpg',
        'https://s-media-cache-ak0.pinimg.com/564x/e2/60/0c/e2600c1a0992ab6fd32d12f1dcc9af89.jpg',
        'https://67.media.tumblr.com/5b5ec4f3126714dddf5c257bbe8b91ca/tumblr_mldcz9vVct1s8mg7mo1_500.jpg',
        'http://images2.fanpop.com/images/photos/5600000/Morticia-Addams-addams-family-5683828-380-357.jpg',
        'http://www.addamsfamily.com/addams/lurch7.jpg',
        'http://vignette4.wikia.nocookie.net/addamsfamily/images/d/db/Little_helper_gomez.jpg/revision/latest?cb=20150403201303',
        'http://vignette4.wikia.nocookie.net/addamsfamily/images/d/db/Little_helper_gomez.jpg/revision/latest?cb=20150403201303',
        'http://cdn.gothic.life/wp-content/uploads/2015/09/Carolyn-Jones.-She-was-the-original-Morticia-Addams.jpg',
        'http://cdn.gothic.life/wp-content/uploads/2015/09/Carolyn-Jones.-She-was-the-original-Morticia-Addams.jpg',
        'http://i.giphy.com/iS8clpbY7CfEk.gif',
        'https://66.media.tumblr.com/7b88c17756bce1bd837ecfdb9559846c/tumblr_nwp3dlK7Wm1rpduwho1_500.gif',
        'https://img.buzzfeed.com/buzzfeed-static/static/2014-10/29/14/enhanced/webdr04/anigif_original-grid-image-26699-1414606736-11.gif',
        'https://s-media-cache-ak0.pinimg.com/564x/ba/0e/96/ba0e96e752411a978cc1dcc62c7f0e4a.jpg',
        'http://www.addamsfamily.com/addams/lurch7.jpg',
        'http://vignette2.wikia.nocookie.net/villains/images/f/fa/Villain_Uncle_Fester_a_la_John_Leslie_Coogan.png/revision/latest?cb=20130201102632',
        'http://vignette2.wikia.nocookie.net/villains/images/f/fa/Villain_Uncle_Fester_a_la_John_Leslie_Coogan.png/revision/latest?cb=20130201102632',
        'http://i.giphy.com/iS8clpbY7CfEk.gif',
        'https://media1.giphy.com/media/OG4Ho3Fr8mwGA/200_s.gif',
        'http://theredlist.com/media/database/films/tv-series/fantasy-and-sci-fi/1960/the-addams-family/032-the-addams-family-theredlist.jpg',
        'https://s-media-cache-ak0.pinimg.com/564x/ba/0e/96/ba0e96e752411a978cc1dcc62c7f0e4a.jpg',
        'https://66.media.tumblr.com/7b88c17756bce1bd837ecfdb9559846c/tumblr_nwp3dlK7Wm1rpduwho1_500.gif',
        'http://i.dailymail.co.uk/i/pix/2014/12/08/23E48D9800000578-0-image-m-6_1418081495346.jpg',
        'https://media1.giphy.com/media/OG4Ho3Fr8mwGA/200_s.gif',
        'http://theredlist.com/media/database/films/tv-series/fantasy-and-sci-fi/1960/the-addams-family/032-the-addams-family-theredlist.jpg',
        'http://i.dailymail.co.uk/i/pix/2014/12/08/23E48D9800000578-0-image-m-6_1418081495346.jpg'
      ],
      matched: [],
      turned: [],
      win: false
    }
  }

  flipCard = index => {
    const { cards, turned } = this.state
    if (turned.length < 2) {
      this.setState({
        turned: turned.concat(index)
      }, () => {
        if (this.state.turned.length === 2) {
          if (cards[this.state.turned[0]] === cards[this.state.turned[1]]) {
            this.setState({
              matched: this.state.matched.concat(...this.state.turned),
              turned: []
            }, () => {
              if (this.state.matched.length === cards.length) {
                setTimeout(() => {
                  this.setState({ win: true })
                }, SHOW_CARD / 2)
              }
            })
          } else {
            setTimeout(() => {
              this.setState({ turned: [] })
            }, SHOW_CARD)
          }
        }
      })
    }
  }

  render () {
    if (!this.state.win) {
      const cards = this.state.cards.map((card, index) => {
        const up = (this.state.turned + this.state.matched).includes(index)
        return <Card flipCard={this.flipCard} value={card} up={up} index={index} key={index} />
      })
      return <div className='Title'>
        <h1>Addams Family Memory</h1>
        <main>
          {cards}
        </main>
      </div>
    } else {
      return <Win />
    }
  }
}

export default App
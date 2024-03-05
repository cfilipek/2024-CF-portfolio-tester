import { useState, useEffect } from 'react';
import BoopButton from './components/BoopButton';
import MemoryGame from './components/MemoryGame';
import Modal from './components/Modal';
import './App.css';
import Footer from './components/Footer';

function App() {

  const [audio, setAudio] = useState(true)
  const [color, setColor] = useState('#000')
  const [num, setNum] = useState(0)
  const [bkgdNum, setBkgdNum] = useState(0)
  const [itemNum, setItemNum] = useState(0)
  const [personNum, setPersonNum] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [date, setDate] = useState(new Date())

  const signs = ['Aries: The Ram','Taurus: The Bull','Gemini: The Twins','Cancer: The Crab','Leo: The Lion','Virgo: The Virgin','Libra: The Scales','Scorpio: The Scorpion','Sagittarius: The Archer','Capricorn: The Goat','Aquarius: The Water Bearer','Pisces: The Fish'];

  var sign = Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', {month: 'numeric'}).format(Date.now())) - 1;
    
  useEffect(() => {
      const timer = setInterval(()=> setDate(new Date()), 1000 )
      return function cleanup() {
          clearInterval(timer)
      }
  }, [])


  const backgrounds = [{src: 'img/bkgd-1.png', id: 1}, {src: 'img/bkgd-2.png', id: 2}]
  const items = [{src: 'img/item-1.png', id: 1}, {src: 'img/item-2.png', id: 2}]
  const people = [{src: 'img/person-2.png', id: 1}, {src: 'img/person-1.png', id: 2}]

  const changeColor = () => {
    const colorsArr = ['#1900df', '#bc00dd', '#00dd1f', '#dd5900', '#000']
    num === 4 ? setNum(0) : setNum(num + 1)
    setColor(colorsArr[num])
  }

  const changePerson = () => {
    personNum === 1 ? setPersonNum(0) : setPersonNum(personNum + 1)
  }
  
  const changeBackground = () => {
    bkgdNum === 1 ? setBkgdNum(0) : setBkgdNum(bkgdNum + 1)
  }

  const changeItems = () => {
    itemNum === 1 ? setItemNum(0) : setItemNum(itemNum + 1)
  }

  const disableAudio = () => {
    setAudio(false)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleOpen = () => {
    setShowModal(true)
  }

  return (
    <div className="App" style={{color: color}}>
      <h1>Welcome to Claire Filipek's Portfolio</h1>
      <p>Hi there! Welcome to my portfolio site. I am a Front End Developer looking to show off my skills. I want to build beautiful applications with excellent user experiences. Hope you enjoy my site. Play, have fun, and         
        <BoopButton audio={audio} color={color} changeColor={handleOpen} label={'Hire Me'} />
      </p>
      <p>Today's date : {date.toLocaleDateString()}</p>
      <p>It's {signs[sign]} Season</p>
      <BoopButton audio={audio} color={color} changeColor={changeColor} label={'Change Color'} />

      <div className='comic' style={{border: '6px solid', borderColor: color, borderRadius: '16px'}}>
        <img className='comic-item' style={{maxWidth: '100%'}} src={people[personNum].src} alt='Self-Portrait Comic Person'/>
        <img className='comic-person' style={{maxWidth: '100%'}} src={items[itemNum].src} alt='Self-Portrait Comic Item'/>
        <img className='comic-background' style={{maxWidth: '100%'}} src={backgrounds[bkgdNum].src } alt='Self-Portrait Comic Background'/>
      </div>
      <BoopButton audio={audio} color={color} changeColor={disableAudio} label={'Disable Audio'} />
      <BoopButton audio={audio} color={color} changeColor={changePerson} label={'Change Person'} />
      <BoopButton audio={audio} color={color} changeColor={changeItems} label={'Change Items'} />
      <BoopButton audio={audio} color={color} changeColor={changeBackground} label={'Change Background'} />

      <div style={{backgroundColor: color}} className='game-bkgd'>
        <MemoryGame audio={audio} color={'yellow'}/>
      </div>

      {showModal && <Modal audio={audio} color={color} handleClose={handleClose}>
        <div>
          <h1 style={{color: color}}>Claire Filipek's Resume</h1>
          <h2 style={{color: color}}>Experience</h2>
          <h3>Jr. Coding Instructor | The ForUsGirls Foundation</h3>
          <p style={{fontSize: '16px'}}>New York, NY | Nov. 2023 - Jan. 2024</p>
          <ul style={{textAlign: 'left'}}>
            <li>Helping to prepare young women and girls from diverse backgrounds as web developers, web designers, and front-end programmers</li>
            <li>Assisting in teaching an introductory HTML & CSS+ web design program that will provide girls with basic coding skills and the ability to build a website.</li>
          </ul>
          <div style={{borderBottom: `2px solid ${color}`, width: '100%'}}></div>
          <h3>Jr. Developer | Halo Media LLC</h3>
          <p style={{fontSize: '16px'}}>New York, NY | Jun. 2021 - Nov. 2022</p>
          <ul style={{textAlign: 'left'}}>
            <li>As a part of the "music team", worked on websites for musical artists such as Post Malone, Kim Petras, and James Blake. Worked from Figma files delivered by the team's Designers.</li>
            <li>Built numerous unique Drupal and custom WordPress templates. Leveraging the CMS system and numerous plugins.</li>
          </ul>
          <div style={{borderBottom: `2px solid ${color}`, width: '100%'}}></div>
          <h3>Jr. FrontEnd Developer | Code & Theory</h3>
          <p style={{fontSize: '16px'}}>New York, NY | Feb. 2020 - Sep. 2020</p>
          <ul style={{textAlign: 'left'}}>
            <li>Worked on teams in an agile environment to build varied applications for clients including Johnson & Johnson and CNN: a highlight was working on the CNN Magic Wall for the 2020 Election cycle.</li>
          </ul>
          <div style={{borderBottom: `2px solid ${color}`, width: '100%'}}></div>
          <h2 style={{color: color}}>Education</h2>
          <h3>Software Engineering Certificate | The Grace Hopper Program at Fullstack Academy</h3>
          <p style={{fontSize: '16px'}}>New York, NY | May. 2019 - Sep. 2019</p>
          <h3>BFA Graphic Design | School of Visual Arts (SVA)</h3>
          <p style={{fontSize: '16px'}}>New York, NY | Aug. 2013 - May. 2018</p>
          <div style={{borderBottom: `2px solid ${color}`, width: '100%'}}></div>
          <h2 style={{color: color}}>Skills</h2>
          <ul style={{textAlign: 'left'}}>
            <li>WordPress, Drupal, and various CMS Systems</li>
            <li>JavaScript (ES6, React, Redux, Node.js)</li>
            <li>TypeScript</li>
            <li>HTML, CSS, SCSS</li>
            <li>The Adobe Suite</li>
          </ul>
        </div>
      </Modal>}

      <div className='modal-btn'>
        <BoopButton audio={audio} color={color} changeColor={handleOpen} label={'View Resume'} />
        {/* <button onClick={handleOpen}>Add New Event</button> */}
      </div>

      <Footer color={color} />
    </div>
  );
}

export default App;

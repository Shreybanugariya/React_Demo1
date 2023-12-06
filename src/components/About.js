import React, { useState } from 'react'

export default function About() {
  console.log('here')
  const [demoStyle, setDemoStyle] = useState({
    color : 'white',
    backgroundColor: '#022b53cf',
    colorText: 'Light',
    border: '2px solid white'
  })
  
  const toggleStyle = () => {
    if (demoStyle.color === 'white') {
      setDemoStyle({
        ...demoStyle,
        color: '#022b53cf',
        backgroundColor: 'white',
        colorText: 'Dark',
      })
    } else setDemoStyle({ ...demoStyle, color: 'white', backgroundColor: '#022b53cf', colorText: 'Light' })
  }
  return (
    <div className='container' style={demoStyle}>
      <h2 className='my-4'>About Us</h2>
      <div id="accordion" className='my-3' style={demoStyle}>
        <div className="card">
            <div className="card-header" id="headingOne" style={demoStyle}>
            <h5 className="mb-0" style={demoStyle}>
                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
                </button>
            </h5>
            </div>  

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion" style={demoStyle}>
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingTwo" style={demoStyle}>
            <h5 className="mb-0" style={demoStyle}>
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Collapsible Group Item #2
                </button>
            </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion" style={demoStyle}>
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingThree" style={demoStyle}>
            <h5 className="mb-0" style={demoStyle}>
                <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Collapsible Group Item #3
                </button>
            </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion" style={demoStyle}>
            <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
      </div>
      <button onClick={toggleStyle} type="button" className="btn btn-dark">Check in {demoStyle.colorText}</button>
    </div>
  )
}

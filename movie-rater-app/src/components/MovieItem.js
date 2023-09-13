import { useState } from 'react';



function Movieitem(props) {
  let [view, setView] = useState(false);

  const simpleView = () => {
    return (
      <div className='simple'>
        <h2>{props.item.trackName}</h2>
        <p>{props.item.artistName}</p>
        <video src={props.item.previewUrl} controls></video>  
      </div>
    )
  }

  const detailView = () => {
    return (
      <div class="imgcontainer">
        
        <img src={props.item.artworkUrl100}
          alt="Avatar" class="trackimage" />
         
        <p>{props.item.artistName}</p>
       
      </div>
    )
  }
  return (
    <div onClick={() => setView(!view)}
      style={{ 'display': 'inline-block' }}>

      {view ? simpleView() : detailView()}

    </div>
  )
}

export default Movieitem
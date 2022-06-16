import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({ tracks, handleDelete }) {



  return (
    <tr className="table-row">
        <td className="row-image">
            {/* you can use the default image if no image is given */}
            <img src={tracks.image} alt={tracks.title} />
        </td>
        <td className="row-title">{tracks.title}</td>
        <td>{tracks.artist}</td>
        <td>{tracks.BPM}</td>
        <button onClick={handleDelete}>Delete Track</button>
    </tr>
  )
}

export default Track
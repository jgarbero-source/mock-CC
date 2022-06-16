import React from 'react'
import Track from "./Track"

function TracksList({ goodTracks, filteredSearch, handleDelete }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {filteredSearch=filteredSearch.map(tracks => <Track id={tracks.id} tracks={tracks} handleDelete={handleDelete}/>)}
      </tbody>
    </table>
  )
}

export default TracksList
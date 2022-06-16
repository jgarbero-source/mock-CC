import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {

  //first we need to render. Because this is the highest up, I will start here.
    //fetch request with data. make sure it's good.
    //create state and put it in the the data variable.
    //bring that data down to tracklist and map it there for the tracks to take.
    //edit track so all the correct information is rendered. 

      //DONE DONE DONE DONE DONE DONE DONE
  
  //be able to create new inputs
    //create a usestate with the formdata
    //add handle change to each of the inputs (as well as a handle submit to form)
    //add the value attribute (formData.name) etc
    //add a name if there isn't wone.
    //update the state when the change occurs. make sure to do the {...formData, [name]: value thing}
    //in the handle submit
      //put prevent default
      //put an add project function
    //for the add project, pass it the form data on top of the original. 
    //to make it persist, put a post command inside of the submit function

        //DONE DONE DONE DONE DONE DONE   

  //to create a search filter 
    //create an onchange thing on the search bar. 
    //create a state
    //when a change occurs, update that to the state.
    //create an array with that filters through and matches each character to each character in the input
    //map over this array down in the track list. we got ourselves a finished product!

        //DONE DONE DONE DONE DONE DONE 

    
  //now let's think about delete.
    //add a button to each thing.
    //for each button, trigger a function 

  const [goodTracks, setGoodTracks] = useState([])
  const [search, setSearch] = useState("")
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    BPM: ``,
    image: ""
  })

  function handleDelete(e) {
    console.log(e.target)
  }

  function handleChange(e) {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  console.log(formData)

  function handleSubmit(e) {
    e.preventDefault()
    addTrack(formData)

    fetch("http://localhost:8001/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })

    setFormData({
      title: "",
      artist: "",
      BPM: ``,
      image: ""
    })
  }

  function addTrack(newTrack) {
    setGoodTracks([...goodTracks, newTrack])
  }

  useEffect(() => {
    fetch("http://localhost:8001/tracks")
      .then(r=>r.json())
      .then(data=>setGoodTracks(data))
  }, [])

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const filteredSearch = goodTracks.filter(tracks => {
    return tracks.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTrackForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <TracksList handleDelete={handleDelete} filteredSearch={filteredSearch} />
    </div>
  )
}

export default TracksPage
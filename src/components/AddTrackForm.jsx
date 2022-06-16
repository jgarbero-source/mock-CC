import React from 'react'

function AddTrackForm({ formData, handleChange, handleSubmit }) {
  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={formData.image} 
            type="text" 
            name="image" 
            placeholder="Image URL"
            onChange={handleChange}
          />
          <input 
            value={formData.title} 
            type="text" 
            name="title" 
            placeholder="title"
            onChange={handleChange}
          />
          <input 
            value={formData.artist} 
            type="text" 
            name="artist" 
            placeholder="Artist"
            onChange={handleChange}
          />
          <input 
            value={formData.BPM} 
            type="number" 
            name="BPM" 
            placeholder="BPM" 
            step="1.00" 
            onChange={handleChange}
          />
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm
import React from 'react'
import MovieItem from './MovieItem'

function MovieList(props) {
    const display = props.data.map((item, index) => {
        return (
            <MovieItem item={item} key={index}/>
        )
    })
  return (
    <div>
        {display}
    </div>
  )
}

export default MovieList
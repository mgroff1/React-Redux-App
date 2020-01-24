import React from 'react'
import PropTypes from 'prop-types'


const SearchMenu = ({ defaultUser, onGet, onClear }) => {
  let _input

  return (


          <div className="container">
            <div className="flex">
            <div className="prepend">
              <button
                className="btnsearch btn"
                type="button"
                onClick={() => onGet(_input.value)}
              >
                Get repos
            </button>
            </div>
            <div className="prepend">
            <input
              type="text"
              className="formin"
              placeholder="input Git username"
              aria-label=""
              aria-describedby="basic-addon1"
              // defaultValue={defaultUser}
              ref={node => _input = node}
            /></div>


        <div className="prepend">
          <button
            type="button"
            className="btnclear btn"
            onClick={() => onClear()}
          >
            Clear repos
        </button>
        </div>
</div>
    </div>
  )
}

SearchMenu.propTypes = {
  defaultUser: PropTypes.string,
  onGet: PropTypes.func,
  onClear: PropTypes.func
}

export default SearchMenu

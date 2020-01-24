import React from 'react'
import PropTypes from 'prop-types'


const RepoList = ({ repos, hasError, isLoading }) => {
  if (hasError) {
    return (
      <div className="container">
        <h6>Sorry! There was an error loading the repos.</h6>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="container">
        <h6>Loading…</h6>
      </div>
    )
  }

  return (
    <div className="container">
      {
        repos.map((repo, i) =>
          <div
            className=" repos"
           key={i}
          >
            <div
              className="contain"
            >
              <a
                href={repo.html_url}
                className="text"
                target="blank"
              >
                {repo.name}
              </a>
              <span
                className="spanme"
              >
                {repo.stargazers_count}
              </span>
            </div>
          </div>)
      }
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.array,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool
}

export default RepoList

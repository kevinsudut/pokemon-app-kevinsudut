import React from 'react'
import style from '../style/index'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDatabase } from '@fortawesome/free-solid-svg-icons'

function MyNavbar() {
      return (
            <React.Fragment>
                  <style.Navbar>
                        <style.Menu>
                              <Link to="/">
                                    <style.MenuItem>
                                          <style.FontXLarge>
                                                <FontAwesomeIcon icon={faHome} />
                                          </style.FontXLarge>
                                          <span>Home</span>
                                    </style.MenuItem>
                              </Link>
                        </style.Menu>
                        <style.Menu>
                              <Link to="/my-pokemon">
                                    <style.MenuItem>
                                          <style.FontXLarge>
                                                <FontAwesomeIcon icon={faDatabase} />
                                          </style.FontXLarge>
                                          <span>My Pokemon</span>
                                    </style.MenuItem>
                              </Link>
                        </style.Menu>
                  </style.Navbar>
            </React.Fragment>
      )
}

export default MyNavbar

import React from 'react';
import './notfound.css';
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
const NotFound: React.FC = () => {
    return (
        <div className="container-notfound">
        <Helmet>
          <title>Page Not Found</title>
        </Helmet>
        <div className="notfound">
          <div className="notfound__title">404</div>
          <div className="notfound__subtitle">
            Oops! This Page Could Not Be Found
          </div>
          <p className="notfound__content">
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
          <Link to="/news/OSL" className="notfound__button">
            Go To News List
          </Link>
        </div>
      </div>
    )
}

export default NotFound

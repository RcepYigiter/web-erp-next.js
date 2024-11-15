
import React from 'react'
import '@/public/css/page-not-found.css'
const BlankPage = () => {


  return (
    <div className="error-wrapper" id="error-wrapper">
      <div id="error-page">
        <div id="error-inner">
          <div className="box-404">
            <div><span className="zigg">Stok</span></div>
          </div>
          {/* <h2>Page Not Found</h2> */}
          {/* <p>The page you were trying to visit has disappeared or moved to another dimension. Perhaps searching will help.<br /></p> */}
        </div>
        <div id="search-404">
          <form action="/search" id="search404">
            <input name="cof" type="hidden" defaultValue="FORID:10" />
            <input name="ie" type="hidden" defaultValue="ISO-8859-1" />
            <input className="src-form404" name="q" placeholder="Ara..." required="required" type="search" />
            <button className="src-btn404" title="Search" type="submit">
              <svg className="icons icon-Search" viewBox="0 0 24 24">
                <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
              </svg>
            </button>
          </form>

        </div>
      </div>
    </div>


  )
}

export default BlankPage
import React from 'react'
import Home from '../page'
import MuhasebeSidebar from '@/components/sidebar/MuhasebeSidebar'

const MuhasebePage = () => {
    return (
      <Home>
          {/* <ToggleHeader /> */}

          <div className='flex '>
              <MuhasebeSidebar />
              <div className="animated fadeInRight min-w-[490px]  w-full overflow-hidden">
                  <div className=" flex  items-center justify-between ">


                      <div className="mail-tools tooltip-demo ">

                          <button className="btn btn-sm"><i className="fa fa-refresh" /> Refresh</button>
                          <button className="btn btn-sm"><i className="fa fa-eye" /></button>
                          <button className="btn btn-sm"><i className="fa fa-exclamation" /> </button>
                          <button className="btn btn-sm"><i className="fa fa-trash-o" /> </button>
                      </div>

                      <div className=' items-center hidden md:flex'>
                          <div className="btn-group float-right">
                              <button className="btn  btn-sm"><i className="fa fa-arrow-left" /></button>
                              <button className="btn  btn-sm"><i className="fa fa-arrow-right" /></button>
                          </div>
                          <form method="get" action="index.html" className="float-right mail-search">
                              <div className="input-group">
                                  <input type="text" className="form-control form-control-sm" name="search" placeholder="Search email" />
                                  <div className="input-group-append">
                                      <button type="submit" className="btn btn-sm btn-primary">
                                          Search
                                      </button>
                                  </div>
                              </div>
                          </form>

                      </div>

                  </div>

                  




              </div>
          </div>
      </Home>

      

    )
}

export default MuhasebePage
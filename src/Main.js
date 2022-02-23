import React from 'react'
import MySection from './MySection'
import SideBar from './SideBar'

export default function Main() {
  return (
    <>

<section class="shop spad">
        <div class="container">
            <div class="row">
              
              <SideBar></SideBar>

              <MySection></MySection>
               
            </div>
        </div>
    </section>

    </>
  )
}

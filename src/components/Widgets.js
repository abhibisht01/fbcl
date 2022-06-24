import React from 'react'
import '../css/widgets.css'


function Widgets() {
    return (
        <div className="widgets">
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/ImagineDragons/videos&tabs=timeline&width=200&height=2000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="300"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"

                allow="encrypted-media"
            ></iframe>
        </div>
    );
}


export default Widgets;
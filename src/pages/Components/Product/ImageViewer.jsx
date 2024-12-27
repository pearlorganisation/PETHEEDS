import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';



// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import React from 'react'
import style from './lightGallery.module.css'

const ImageViewer = ({ imageData }) => {

    const isDatAvailable = imageData?.length > 0 ? imageData : []
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div>
            <LightGallery
                elementClassNames={style.light}
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                mode="lg-fade">
                {
                    isDatAvailable?.length <= 0 ? <div className='font-medium bg-slate-200 px-6 py-2'>No Photos</div> : isDatAvailable.map(item => {
                        return <a
                            data-lg-size="1400-1400"
                            data-pinterest-text="Shinimamiya, Osaka, Japan"
                            data-tweet-text="Shinimamiya, Osaka, Japan"
                            className="gallery-item"
                            data-src={item}
                            data-sub-html="<h4>Photo by - <a href='https://unsplash.com/@asoshiation' >Shah </a></h4><p> Location - <a href='https://unsplash.com/s/photos/shinimamiya%2C-osaka%2C-japan'>Shinimamiya, Osaka, Japan</a></p>"
                        >
                            <img
                                className="img-responsive size-20 md:size-40"
                                src={item}
                                onError={(event) => {
                                    event.target.src =
                                        "/placeholder.jpg";
                                    event.onerror = null;
                                }}
                            />
                        </a>
                    })
                }


            </LightGallery>
        </div>
    )
}

export default ImageViewer
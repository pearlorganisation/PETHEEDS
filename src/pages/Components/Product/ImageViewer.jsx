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
    const dummyData = [`https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1406&q=80`,
        `https://images.unsplash.com/photo-1544550285-f813152fb2fd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80`,
        `https://images.unsplash.com/photo-1584592740039-cddf0671f3d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80`,
        `https://images.unsplash.com/photo-1455541504462-57ebb2a9cec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&q=80`,

    ]
    const isDatAvailable = imageData?.length > 0 ? imageData : dummyData
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
                    isDatAvailable.map(item => {
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
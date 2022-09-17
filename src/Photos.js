import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return (
          <div className="photos">
            <div className="row">
            {props.photos.map(function(photo, index) {
               return (
                <div className="col-4" key={index}>
                    <a href={photo.src.original} >
                        <img src={photo.src.landscape} className="img-fluid" alt="picture" />
                    </a>
                </div>
               );
            })}
            </div>
          </div>  
        );
    } else {
        return null;
    }   
}
import React from "react";
import "./Preloader.scss"


const Preloader = () => {
    return (
                <div className="preloader">
                        <div className="preloader__letters-holder">
                            <div className="l-1 preloader__letter">L</div>
                            <div className="l-2 preloader__letter">o</div>
                            <div className="l-3 preloader__letter">a</div>
                            <div className="l-4 preloader__letter">d</div>
                            <div className="l-5 preloader__letter">i</div>
                            <div className="l-6 preloader__letter">n</div>
                            <div className="l-7 preloader__letter">g</div>
                            <div className="l-8 preloader__letter">.</div>
                            <div className="l-9 preloader__letter">.</div>
                            <div className="l-10 preloader__letter">.</div>
                        </div>
                </div>
    )
};

export default Preloader;
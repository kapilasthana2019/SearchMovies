import React from 'react'
function MyFooter() {
    return (
    <div>
        <div className="row fixed-bottom">
            <div className="col-md-12">
                <div className="footer p-3 mt-4 text-center bg-dark text-warning">
                    Developed By:-
                        <span className="text-warning font-weight-bold">kapil asthana
                        , using  ReactJs &amp; Redux along with external Movies APIs</span>
                        &nbsp;&nbsp;<i className="fab fa-imdb"></i>
                    <a href="https://www.omdbapi.com" target="blank">
                        &nbsp; OMDB APIs
                            </a>
                </div>

            </div>
        </div>

    </div>
    )
}

export default MyFooter

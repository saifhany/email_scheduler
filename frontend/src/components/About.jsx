import React from 'react'


const About = () => {
    return (
        <section className="about py-3 px-5" style={{ marginTop: "-0rem" }} >
            <div className="row  align-content-center " style={{height:"70vh"}}>
                <div className="heading text-center py-4 px-2 ">
                    <h1><strong>About</strong></h1>
                </div>
                <div className="col-md-6">
                    <div className="main px-3" >
                        <h3>It is an Email scheduling and sending application based on MERN stack.
                            It also has the feature to view the future scheduled emails and past sent emails as well.
                        </h3>
                    </div>
                    <div className="d-flex">
                        <img style={{ width: "3rem", height: "55px" }} src="/images/react.png" alt="img"></img>
                        <img style={{ width: "3rem", height: "55px" }} src="/images/nodejs.png" alt="img"></img>
                        <img style={{ width: "3rem", height: "55px" }} src="/images/mongodb.png" alt="img"></img>
                        <img style={{ width: "3rem", height: "55px" }} src="/images/aws.png" alt="img"></img>
                        <img style={{ width: "3rem", height: "55px" }} src="/images/bootstrap.png" alt="img"></img>
                        <img style={{ width: "3rem", height: "55px" }} src="/images/icons.svg" alt="img"></img>
                    </div>
                </div>
                <div className="col-md-6 align-items-center">
                    <div className="px-3">
                        <div className="fst-bold px-3">React JS</div>
                        <div className="progress ">
                            <div className="progress-bar w-75  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="fst-bold px-3">Node JS</div>
                        <div className="progress ">
                            <div className="progress-bar w-50  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80"></div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="fst-bold px-3">Mongo DB</div>
                        <div className="progress ">
                            <div className="progress-bar w-25  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80"></div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="fst-bold px-3">Heroku</div>
                        <div className="progress ">
                            <div className="progress-bar w-75  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80"></div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="fst-bold px-3">Bootstrap</div>
                        <div className="progress ">
                            <div className="progress-bar w-100  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80"></div>
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="fst-bold px-3">React Icons</div>
                        <div className="progress ">
                            <div className="progress-bar w-50  bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="80"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About

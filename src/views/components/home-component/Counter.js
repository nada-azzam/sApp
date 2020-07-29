import React from 'react';


const CounterArea = ()=> {
  return (

    <section className="section counter-area ptb_50">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-5 col-sm-3 single-counter text-center">
                <div className="counter-inner p-3 p-md-0">
                    <div className="counter-item d-inline-block mb-3">
                        <span className="counter fw-7">0</span><span className="fw-7">M</span>
                    </div>
                    <h5>Users</h5>
                </div>
            </div>
            <div className="col-5 col-sm-3 single-counter text-center">
                <div className="counter-inner p-3 p-md-0">
                    <div className="counter-item d-inline-block mb-3">
                        <span className="counter fw-7">0</span><span className="fw-7">K</span>
                    </div>
                    <h5>Download</h5>
                </div>
            </div>
            <div className="col-5 col-sm-3 single-counter text-center">
                <div className="counter-inner p-3 p-md-0">
                    <div className="counter-item d-inline-block mb-3">
                        <span className="counter fw-7">0</span><span className="fw-7">M</span>
                    </div>
                    <h5>Customer</h5>
                </div>
            </div>
            <div className="col-5 col-sm-3 single-counter text-center">
                <div className="counter-inner p-3 p-md-0">
                    <div className="counter-item d-inline-block mb-3">
                        <span className="counter fw-7">0</span><span className="fw-7">K</span>
                    </div>
                    <h5>Developer</h5>
                </div>
            </div>
        </div>
    </div>
</section>
  );
}

export default CounterArea;

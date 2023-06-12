import React, {Fragment} from "react";
import Lottie from "lottie-react";
import Animation  from "../Animation.json";

export const About = () => (
    <div className="p-5 mb-4 bg-body-tertiary rounded-3">
        <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">Лучшее React приложение</h1>
            <p className="col-md-8 fs-4">
                Версия приложения <strong>1.0.42</strong>
            </p>
            <div style={{width:"510px", margin: "0 auto"}}>
                <Lottie animationData={Animation} />
            </div>



        </div>
    </div>
)

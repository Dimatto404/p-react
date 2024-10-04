import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron rounded-3 bg-light">
            <h1 className="display-4 px-5">A Warm Welcome!</h1>
            <p className="lead px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis ut tortor quis accumsan. Praesent vestibulum a sapien a malesuada. Sed convallis dui erat, non scelerisque turpis fermentum varius. Maecenas porta, massa aliquet lobortis scelerisque, orci purus imperdiet massa, vel pharetra nisi mauris nec massa.</p>
            <p className="lead px-5">
                <a className="btn btn-primary btn-lg px-5" href="#" role="button">Call to Action!</a>
            </p>
        </div>
    );
};

export default Jumbotron;
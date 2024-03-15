import React from "react";
import "./Mod.css";

export default function Slidebar() {
    const nextbtn = () => {
        let slider = document.querySelector('.slider1');
        let slides = slider.querySelectorAll('.slides');
        slider.appendChild(slides[0].cloneNode(true));
        slider.removeChild(slides[0]);
    }

    const prevbtn = () => {
        let slider = document.querySelector('.slider1');
        let slides = slider.querySelectorAll('.slides');
        let lastSlide = slides[slides.length - 1].cloneNode(true);
        slider.insertBefore(lastSlide, slides[0]);
        slider.removeChild(slides[slides.length - 1]);
    }

    return (
        <>
            <div className="con1">
                <div className="slider1">
                    <div className="slides" style={{ "--img": 'url(https://images.pexels.com/photos/4767578/pexels-photo-4767578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                        <div className="cont">
                            <h2>Avatar</h2>
                            <p>Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), </p>
                        </div>
                    </div>
                    <div className="slides" style={{ "--img": 'url(https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                    <div className="cont">
                            <h2>Avatar</h2>
                            <p>Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), </p>
                        </div>
                    </div>
                    <div className="slides" style={{ "--img": 'url(https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                    <div className="cont">
                            <h2>Avatar</h2>
                            <p>Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), </p>
                        </div>
                    </div>
                    <div className="slides" style={{ "--img": 'url(https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                    <div className="cont">
                            <h2>Avatar</h2>
                            <p>Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), </p>
                        </div>
                    </div>
                    <div className="slides" style={{ "--img": 'url(https://images.pexels.com/photos/2055389/pexels-photo-2055389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                    <div className="cont">
                            <h2>Avatar</h2>
                            <p>Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), </p>
                        </div>
                    </div>
                    <div className="slides" style={{ "--img": 'url(https://images.pexels.com/photos/1687575/pexels-photo-1687575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
                    <div className="cont">
                            <h2>Avatar</h2>
                            <p>Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), </p>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <span onClick={prevbtn} className="prev1"></span>
                    <span onClick={nextbtn} className="next1"></span>
                </div>
            </div>
        </>
    );
}

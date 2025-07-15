import { Component } from "react";
import "./index.css";
import Header from "../Header";
import Footer from "../Footer";



class Dashboard extends Component{
    state={}

    render(){
        return <div className="dash">
            <Header/>
            <div className="dash-card-content">
                <div className="dash-card"> 
                    <div>
                        l
                    </div>
                    <div>
                    <h1>Hyper boost your <span className="style-text">Revenue Management, Marketing</span> and Commercial Functions with Business Ready AI</h1>
                    <p>Powerful AI solutions that go beyond mere data sorting and exploration. Use our array of AI enabled solutions that understand your business and recommend the optimal way forward. </p>
                    <button className="dash-btn" type="button">Get started</button>
                    </div>
            </div>
                <div className="dash-background-card">
                    <img src="" alt="background"/>
                </div>
               </div>
            <Footer/>
        </div>
    }
}

export default Dashboard
import { Component } from "react";
import "./index.css";
import { RiExpandUpDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Header from "../Header";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowDown } from "react-icons/sl";
import Footer from "../Footer";



class Dashboard extends Component{
    state={userdata:[],pages:[0,10],tab:1}

    componentDidMount(){
        this.getUser()
    }
    getUser=async()=>{
        const resdata=await fetch("https://jsonplaceholder.typicode.com/comments")
        const data=await resdata.json()
        
        if (resdata.ok){
           this.setState(pres=>{
            const listdata=[]
            data.map(each=>listdata.push(each))
            return {userdata:listdata}
           })
           console.log(data)
        }else{
            console.log("error")
        }

    }
    render(){
        const {userdata,pages,tab}=this.state
        
        console.log("TextDecoderStream",userdata,pages,pages[0])
        const k=[];
        let count=pages[0];
        if (userdata.length!==0){
        while (pages[1]>count){
            k.push(userdata[count])
            count+=1
        }}
        console.log("k",k,count)
        return <div className="dash">
            <Header/>
            <div className="dash-card-content">
                <h1>Hyper boost your Revenue Management, Marketing and Commercial Functions with Business Ready AI</h1>
            </div>
            <Footer/>
        </div>
    }
}

export default Dashboard
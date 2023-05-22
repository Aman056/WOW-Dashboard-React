import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Table from './Table';
import { format } from 'date-fns'
import Pagination from '@mui/material/Pagination';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Stack from '@mui/material/Stack';


export default function Dashboard() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [pagee, setPagee] = useState();
    const [page1, setPage1] = React.useState(1);
    const [dataTable, setDataTable] = useState([])
    const [data, setData] = useState()
    const [show, setShow] = useState(50)


    let startOne = startDate?.toISOString()?.substring(0, 10) || '2022-04-01'
    let EndOne = endDate?.toISOString()?.substring(0, 10) || '2022-08-24'

    // Handle ------------------------------------------------------------------------->

    const handleClick = (id) => {
        setShow(id);
    };
    const handleChange = (event, value) => {
        setPage1(value || 1);
    };
    const page = (pg) => {
        setPagee(pg)
    }

    // Api------------------------------------------------------------------->

    const alldata = () => {
        axios.get('https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticcount?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10')
            .then(response => {
                setData(response.data);
            }, error => {
                console.log(error, 'Console');
            });

    }
    useEffect(() => {
        alldata();
    }, []);

    const Tabledata = () => {
        URL = `https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=${startOne}&todate=${EndOne}&page=${page1}&limit=${show} `
        axios.get(URL)
            .then(tableresponse => {
                setDataTable(tableresponse?.data);
            }, error => {
                console.log(error);
            });
    }
    useEffect(() => {
        Tabledata();
    }, [show, startDate, endDate, pagee, page1]);


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-none d-lg-none">
                <div className="container-fluid">
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-light" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className=" w-100 m-1" id="navitem" ><i className="bi bi-view-list p-3"></i>Dashboard</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-person-circle p-3"></i>WOW Users</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-camera-reels p-3"></i>Video Clips</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-exclamation-triangle p-3"></i>REported Content</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-stack p-3"></i>Category</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-info-circle p-3"></i>Info Page</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-bell p-3"></i>Push Notification</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-person-add p-3"></i>Internal User</li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className='row'>
                <div className="col-3 text-light d-none d-lg-block" id='leftnev'>
                    <div className='container-flude d-flex m-2' >
                        <div className='' id='icons' ></div>
                        <h4 className='pt-2 px-3'>WOW <i className="bi bi-stop-circle px-3 py-1" style={{ fontSize: '15px', marginLeft: '40px', color: '#9b17d4' }}></i></h4>
                    </div>
                    <div className='m-3'>
                        <ul className='text-decoration-none' >
                            <li className=" w-100 m-1" id="navitem" ><i className="bi bi-view-list p-3"></i>Dashboard</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-person-circle p-3"></i>WOW Users</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-camera-reels p-3"></i>Video Clips</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-exclamation-triangle p-3"></i>REported Content</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-stack p-3"></i>Category</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-info-circle p-3"></i>Info Page</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-bell p-3"></i>Push Notification</li>
                            <li className="w-100 m-1" id="navitem"><i className="bi bi-person-add p-3"></i>Internal User</li>
                        </ul>
                    </div>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-9 p-3' id="contleft">

                    <div className=" text-light " id="table" style={{ backgroundColor: '#2c354c' }}>
                        <div className='main mt-1'>

                            <div className="box1">  <div className='container d-flex' id='icondiv' >
                                <div id='icons'><i id="icn" className="bi bi-download"></i></div>
                                <div className='conatiner' id='content' >
                                    <h6>{data?.data?.activeinstall}</h6>
                                    <p>Total installed</p>
                                </div>
                            </div></div>
                            <div className="box2"><div className='container d-flex' id='icondiv' >
                                <div id='icons'><i id="icn" className="bi bi-activity"></i></div>
                                <div className='Container' id='content'>
                                    <h6> {data?.data?.aliveappusers}</h6>
                                    <p>Alive App User</p>
                                </div>
                            </div></div>
                            <div className="box3">  <div className='container d-flex' id='icondiv' >
                                <div id='icons'><i id="icn" className="bi bi-clipboard2-pulse"></i></div>
                                <div className='Container' id='content'>
                                    <h6>{data?.data?.alivechurn}</h6>
                                    <p>Alive Churn Rate</p>
                                </div>
                            </div></div>
                            <div className="box4">  <div className='container d-flex' id='icondiv' >
                                <div id='icons'><i id="icn" className="bi bi-arrow-repeat"></i></div>
                                <div className='Container' id='content'>
                                    <h6>{data?.data?.churn}</h6>
                                    <p>Churn Rate</p>
                                </div>
                            </div></div>
                            <div className="box5"> <div className='container d-flex' id='icondiv' >
                                <div id='icons'><i id="icn" className="bi bi-box-arrow-in-down"></i></div>
                                <div className='Container' id='content'>
                                    <h6>  {data?.data?.totalInstall}</h6>
                                    <p>Total Install</p>
                                </div>
                            </div></div>
                            <div className="box6"> <div className='container d-flex' id='icondiv' >
                                <div id='icons'><i id="icn" className="bi bi-x-octagon"></i></div>
                                <div className='Container' id='content'>
                                    <h6>{data?.data?.totaluninstall}</h6>
                                    <p>Total uninstall</p>
                                </div>
                            </div></div>
                        </div>

                    </div>

                    <div className='col containe-flude' id='main-container' style={{ backgroundColor: '#2c354c' }}>
                        <div className='col conatiner-flude' id="calender">
                            <div className="dropdown">
                                <button className="btn text-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Show
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" onClick={() => handleClick(10)}>10</a></li>
                                    <li><a className="dropdown-item" onClick={() => handleClick(50)}>50</a></li>
                                    <li><a className="dropdown-item" onClick={() => handleClick(100)}>100</a></li>
                                    <li><a className="dropdown-item" onClick={() => handleClick(500)}>500</a></li>
                                    <li><a className="dropdown-item" onClick={() => handleClick(1000)}>1000</a></li>
                                </ul>
                            </div>
                            <div className='conatiner-flude d-flex'>
                                <DatePicker id='date' placeholderText='Start Date' selected={startDate} onChange={date => setStartDate(date)} />
                                <p className='heading text-white px-2'>to</p>
                                <DatePicker id='date' placeholderText='End Date' selected={endDate} onChange={date => setEndDate(date)} />
                            </div>
                        </div>
                        <div className='tabledata text-white'>
                            <Table dataTable={dataTable} />
                        </div>
                        <div className='row m-auto'>
                            <div className='col justify-content-end d-flex m-auto mt-3'>
                                <Pagination color="primary" count={10} page={page1} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


// import { useEffect } from 'react'
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import "./Update.css"
import Header from "../Header";
import Footer from '../footer';



export default function UpdateStore() {
	let [StoreName, SetStoreName] = useState(" ")
	let [ContectNO, setContectNO] = useState(" ")
	let [Timeing, setTimeing] = useState(" ")
	let [Active, setActive] = useState(" ")
	let params = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		console.warn("StoreCode is :" + params);
		GetProductDetails()
	}, [])

	const GetProductDetails = async () => {
		let result = await fetch(`http://localhost:5000/GetAllStoreByID/${params.StoreCode}`)
		result = await result.json()
		SetStoreName(result.StoreName)
		setContectNO(result.ContectNO)
		setTimeing(result.Timeing)
		setActive(result.Active)

	}
	async function CollectData() {

		let result = fetch(`http://localhost:5000/UpdateStore/${params.StoreCode}`, {
			method: 'PUT',
			body: JSON.stringify({ StoreName, ContectNO,Timeing,Active }),
			headers: {
				'Content-Type': 'application/json'
			}
		})

		result = (await result).json()
		navigate('/Manage-Store')

	}
	return (

		<div>

			<section className="login">
				<div className="login_box">
					<div className="left">

						<div className="contact">
							<form >
								<h1 className="Lable"><b>Update Store </b></h1><br />
								<label><b> Store Name </b></label>
								<input type="text" value={StoreName}  onChange={(e) => { SetStoreName(e.target.value) }} />
								<label> <b>Contact Number</b></label>
								<input type="text" value={ContectNO} onChange={(e) => { setContectNO(e.target.value) }}/>
								<label><b> Timing</b></label>
								<input type="text" value={Timeing}  onChange={(e) => { setTimeing(e.target.value) }}/>
								<label className='myselectlabel'><b>Active Status</b> </label>
								<select className='mySelect' onChange={(e) => { setActive(e.target.value) }}>
									<option value={Active}>{Active}</option>
									<option Value="No">No</option>
									<option Value="Yes">Yes</option>
								</select>

								<button type="button" className="submit" onClick={CollectData}>Update</button>
							</form>
						</div>
					</div>
					<div className="right">
						<div className="right-text">
							<h2>SPA</h2>
							<h5>Affordable Home Salon</h5>
						</div>
						<div className="right-inductor"><img src="" alt="" /></div>
					</div>
				</div>
			</section>

		</div>

	)
}

// import { useEffect } from 'react'
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import "./Update.css"



export default function UpdateServises() {
	let [Service, SetService] = useState(" ")
	let [Price, setPrice] = useState(" ")
	let [Active, setActive] = useState(" ")
	let [Discount, setDiscount] = useState(" ")
	let [Flat, setFlat] = useState(" ")
	let params = useParams();
	const navigate = useNavigate();




	useEffect(() => {
		console.warn(params);
		GetProductDetails()
	}, [])


	const GetProductDetails = async () => {

		let result = await fetch(`http://localhost:5000/GetServisesByID/${params.Scode}`)
		result = await result.json()
		SetService(result.Service)
		setPrice(result.Price)
		setActive(result.Active)
		setDiscount(result.Discount)
		setFlat(result.Flat)




	}








	async function CollectData() {
		
		let result = fetch(`http://localhost:5000/UpdateServices/${params.Scode}`, {
			method: 'PUT',
			body: JSON.stringify({ Discount, Flat }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		
		result =(await result).json()
			navigate('/Manage-services')

	}
	return (

		<div>

			<section className="login">
				<div className="login_box">
					<div className="left">

						<div className="contact">
							<form >
								<h1 className="Lable"><b>Update Servises </b></h1><br />
								<label> Service Name </label>
								<input type="text" value={Service} readOnly />
								<label> Price</label>
								<input type="text" value={Price} readOnly />
								<label> Active Status</label>
								<input type="text" value={Active} readOnly />
								<label> <b>Discount</b></label>
								<input type="number"  placeholder='Enter Discount Value' onChange={(e) => { setDiscount(e.target.value) }} />
								<label> <b>Flat</b></label>
								<input type="number" placeholder='Enter Flat Value' onChange={(e) => { setFlat(e.target.value) }} />
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
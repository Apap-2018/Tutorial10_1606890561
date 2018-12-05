import React from 'react';
import { Loading } from '../components/Loading';
import { FormAddHasiLab } from '../containers/FormAddHasilLab';
import { Appointment } from '../utils/Appointment';

export class AddHasilLab extends React.Component {
	constructor(props) {
        super(props)
		this.state = {
			loading: false,
			pasien: {
                id : this.props.match.params.id
            },
            lab : {}
		}
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

	handleFormSubmit(e) {
		e.preventDefault()
		this.setState({
			loading:true
		})

		const data = new FormData(e.target)
		const dataJson = {}

		data.forEach((val, key) => {
			if (val !== ""){
				let name = key.split('.');
				if(name.length > 1){
					let last = name.pop()
					name.reduce((prev, next) => {
						return prev[next] = prev[next] || {};
					}, dataJson)[last] = val
				} else {
					dataJson[key] = val
				}
			}
		})

		Appointment.addHasilLab(dataJson).then(response => {
			if(response.status === 200){
				this.setState({
					loading : false,
					lab : response.result
				})
			alert(`Sukses Add Hasil Lab ${this.state.lab.id}`)
			} else {
				this.setState({
					loading : false
				})
				alert(`Gagal Add Hasil Lab ${this.state.lab.id}`)
			}		

		})
	}
	render() {
		if (this.state.loading) {
			return (
				<Loading msg="Fetching Data..." />
			)
		} else {
			return (
				<FormAddHasiLab pasien={this.state.pasien} onSubmit={this.handleFormSubmit} />
			)
		}
	}
}
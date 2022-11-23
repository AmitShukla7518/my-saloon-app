
import "./Store.css"
import Header from "../Header";
import Footer from '../footer';
export function Add_Store() {

    function collectData() {
        alert("Hello world")
    }
    return (


        <div class="wrapper">
            <Header />
            <section className="h-100 bg-dark">
                <div class="card card-shadow mb-4">
                    <div class="card-header">
                        <div class="card-title">
                            Add Staff
                        </div>
                    </div>
                    <div class="card-body">
                        <form class="container-fluid" id="needs-validation" novalidate>
                            <div class="row">
                                <div class="col-md-6 mb-3">
                                    <label className="form-label" htmlFor="form3Example1m">First name</label>
                                    <input type="text" id="form3Example1m" className="form-control form-control-lg" />

                                </div>
                                <div class="col-md-6 mb-3">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                        <input type="text" id="form3Example1n" className="form-control form-control-lg" />
                                    </div>

                                </div>
                            </div>


                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example9">DOB</label>
                                <input type="text" id="form3Example9" className="form-control form-control-lg" placeholder="YYYY/MM/DD" />

                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example90">Adhar or PanNumber </label>
                                <input type="text" id="form3Example90" className="form-control form-control-lg" placeholder="XXXX XXXX XXXX" />

                            </div>
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form3Example8">Address</label>
                                <input type="text" id="form3Example8" className="form-control form-control-lg" />

                            </div>


                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" placeholder="+91 xxxx-nnnnnn" >Contect No</label>
                                        <input type="number" id="form3Example1m1" className="form-control form-control-lg" maxLength={13} />


                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1n1">Email</label>
                                        <input type="text" id="form3Example1n1" className="form-control form-control-lg" />

                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" placeholder="+91 xxxx-nnnnnn" >Password</label>
                                        <input type="password" id="form3Example1m1" className="form-control form-control-lg" />


                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="form-outline">
                                        <label className="form-label" htmlFor="form3Example1n1">Confirm Password</label>
                                        <input type="password" id="form3Example1n1" className="form-control form-control-lg" />

                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end pt-3">
                                <button type="button" className="btn btn-warning btn-lg ms-2" onClick={collectData}>Submit form</button>
                            </div>
                        </form>

                    </div>
                </div>

            </section>
            <Footer />
        </div>

    )
}
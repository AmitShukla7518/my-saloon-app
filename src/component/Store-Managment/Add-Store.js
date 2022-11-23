
import "./Store.css"
import Header from "../Header";
import Footer from '../footer';
export function Add_Store() {

    const mystyle = {
        padding: "0",
        "max-width": "1250px",
       

      };
      const mystyle2 = {
        "background-size": "cover",
        "background-image": "url(./04.jpg)"
      }

    return (
        
        <div>
<Header/>

            <div className="height-100 " >
                <div className="container my-color" style={mystyle}>
                    <div className="content-box">
               <div className="login-box" style={mystyle2}>
                            <div className="create-item">

                                <div className="with-google create">
                                    <p><a href="">Sign up with Google </a></p>
                                </div>
                                <div className="with-facebook create">
                                    <p><a href=""> Sign up with Facebook </a></p>
                                </div>
                                <div className="with-email create">
                                    <p><a href="create-form.html"> Sign up with Email </a></p>
                                </div>
                            </div>
                        </div>
                        <div className="form-box">
                            <div className="my-sign-form">
                                <h5>Sign Up</h5>
                                <form action="">
                                    <label htmlFor="">Your Name</label>
                                    <input type="text" name="" id="" />

                                    <label htmlFor="">Email</label>
                                    <input type="email" name="" id="" />

                                    <label htmlFor="">Password</label>
                                    <input type="password" name="" id="" />

                                    <label htmlFor="">Confirm Password</label>
                                    <input type="password" name="" id="" />

                                    <div className="my-sign-btn">
                                        <button>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>








    )
}
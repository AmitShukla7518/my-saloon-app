import { Link } from "react-router-dom";

export default function Footer(){
return(

    // <!-- Footer -->
    <div class="wrapper">
       <footer className="footer ptb-20">
        <div className="row">
            <div className="col-md-12 text-center">
                <div className="copy_right">
                    <p>
                        2018 © Dashboard Theme By
                        <Link to="/"> Truckry</Link>
                    </p>
                </div>
                {/* <a id="back-to-top" href="#" style="display: inline;"> <i className="ion-android-arrow-up"></i> </a> */}
            </div>
        </div>
       </footer>
    </div>

)
}
import React from 'react';
import Logo from '../Logo';
import './css/login.css';
import $ from 'jquery';

class Login extends React.Component{

    state ={
        email: "",
        password:""
    }

    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidMount(){

        $(".signIn__FormGroup input").on("keyup", function () {      
            var value = $.trim($(this).val());
            if (value) {
                $(this).closest(".signIn__FormGroup").addClass("hasValue");
            } else {
                $(this).closest(".signIn__FormGroup").removeClass("hasValue");
            }
        });
    }

    render(){
        return(
            <>
                <div className="container">
                    <Logo />
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card signIn">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                              <h2 className="signIn__heading">Sign in to your account</h2>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <form>
                                                <div className="row mt-4">
                                                    <div className="col-lg-12">
                                                        <div className="form-group signIn__FormGroup">

                                                            <input value={this.state.email} id="email" type="text" name="email" className="form-control input_signIn" onChange={e => this.handleChange(e)}/>

                                                            <span className="error-message">Invalid email address</span>


                                                           <div className="field-placeholder">
                                                                <span>
                                                                    Email
                                                                </span>
                                                           </div> 
    
                                                        </div>
                                                    </div>
                                                </div>
    
                                                <div className="row mt-3">
                                                    <div className="col-lg-12">
                                                        <div className="form-group signIn__FormGroup">
                                                            <input name="password" type="password" className="form-control input_signIn" value={this.state.password} onChange={e => this.handleChange(e)}/>

                                                            <span className="error-message">Invalid Password</span>
                                                            <div className="field-placeholder">
                                                                <span>Password</span>
                                                             </div>       
                                                        </div>
                                                    </div>
                                                </div>
    
    
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                       <div className="form-group text-right">
                                                            <label className="signIn__forget--label">
                                                             <a href="#" className="signIn__forget" rel="noopener noreferrer">Forget Password?</a>
                                                        </label>
                                                      </div>
                                                    </div>
                                                </div>
    
    
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="form-group text-center loginRow">
                                                          <button type="submit" className="btn signIn__btn"> Sign In</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="row">
                        <div className="col-lg-12">
                            <p className="signIn__alreadyAccount">Don't have an account? <a href="#" style={{color:'#0052cc'}} rel="noopener noreferrer">Sign up</a> </p>    
                        </div>
    
                     </div>
                </div>
            
            </>
        )
    }
}

export default Login


import React, { useEffect, useState }  from 'react';
import '../App.css';

const SearchResult=(props) =>{
    const [name,setname]=useState("");
    const [uname,setuname]=useState("");
    const [uimg,setuimg]=useState("");
    const [ufollowers,setufollowers]=useState("");
    const [ufollowings,setufollowing]=useState("");
    const [urepos,seturepos]=useState("");
    const [uaccount,setaccount]=useState("");
    const [error,seterror]=useState(null)
   
    useEffect(()=>{
        fetch(`https://api.github.com/users/${props.name}`)
        .then(res => res.json())
        .then(data =>{
           if(data.message){
             if(data.message==="Not Found"){
              seterror(data.message)
             }
             else{
               seterror("You have exceeded API limit,please try after some time");
             }
             
           }
           else{
            setname(data.name);
            setuname(data.login);
            setuimg(data.avatar_url);
            seturepos(data.public_repos);
            setufollowing(data.following);
            setufollowers(data.followers);
            setaccount(data.html_url);
            seterror(null);
           }
            
        })

    },[props.name])
        
    const mystyle = {
      color: 'red',
      wordBreak:'break-all'
    };

    return(
      (error)?(<h4 style={mystyle}>{error}</h4>):(
      <div className="container-fluid res_div mt-4">
                  <div className="row">
                      <div className="col-12 user-img">
                          <img src={uimg} alt=""></img>
                      </div>
                  </div>

                  <div className="row user-name mt-2">
                      <div className="col-12 text-center">
                       <p>{name}</p>
                      </div>
                  </div>

                  <div className="row user-user-name">
                      <div className="col-6">
                        <h6>User Name</h6>
                      </div>
                      <div className="col-6 text-center">
                      <p>{uname}</p>
                      </div>
                  </div>

                  <div className="row user-account">
                      <div className="col-6">
                        <h6>Github Account</h6>
                      </div>
                      <div className="col-6 text-center">
                       <p><a href={uaccount} target="blank">{uaccount}</a></p>
                      </div>
                  </div>

                  <div className="row user-repos">
                      <div className="col-6">
                        <h6>Repositories</h6>
                      </div>
                      <div className="col-6 text-center">
                      <p>{urepos}</p>
                      </div>
                  </div>

                  <div className="row user-follow">
                      <div className="col-6 text-center">
                        <span>{ufollowers}</span>
                        <h6>followers</h6>
                      </div>
                      <div className="col-6 text-center">
                        <span>{ufollowings}</span>
                        <h6>following</h6>
                      </div>
                  </div>
              </div>
      )

 );
}
 export default SearchResult;
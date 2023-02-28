import Time from "./Time"

function Courses(){
    return(
        <div style={{width: '90%', margin:"0 auto", backgroundColor:"rgb(242,241,249)"}}>
            <div style={{display:"flex",justifyContent:"flex-end", border:"2px solid red"}}>
                <h1>Hello</h1>
                <img src="images/profile.jpg" alt="teacher-profile" style={{border:"1px solid white", maxWidth:"50px", borderRadius:"90%"}} />
            </div>
                <div style={{display:"flex", gap:"20px"}} >
                    {/* I have called the component TIme where i have set the time  */}
                    <Time/>
                   <h1 style={{fontSize:"30px"}}>SUBJECTS</h1> 
                </div>
        </div>
    )
}export default Courses
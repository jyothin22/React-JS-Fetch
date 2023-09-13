import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import EquipmentService from '../services/EquipmentService';
class Equipment extends React.Component
{
constructor()
{    super();
     this.state={
    EquipmentId:0,
    EquipmentName:'',
    EquipmentStatus:'',
    EquipmentDate:'',
    EquipmentLoc:'',
    EquipmentType:'',
    showAddForm:false,
    showDelForm:false,
    showUpdateForm:false,
    showEqIdForm:false,
    showEqTable:false
     }
     this.setEquipmentDate=this.setEquipmentDate.bind(this);
     this.setEquipmentLoc=this.setEquipmentLoc.bind(this);
     this.setEquipmentType=this.setEquipmentType.bind(this);
     this.setEquipmentStatus=this.setEquipmentStatus.bind(this);
     this.setEquipmentName=this.setEquipmentName.bind(this);
     this.showAddEquipmentForm=this.showAddEquipmentForm.bind(this);
     this.AddEquipment=this.AddEquipment.bind(this);
     this.DeleteEquipment=this.DeleteEquipment.bind(this);
     this.setEquipmentId=this.setEquipmentId.bind(this);
     this.showAllEquipment=this.showAllEquipment.bind(this);
     this.showDeleteEquipmentForm=this.showDeleteEquipmentForm.bind(this);
     this.showUpdateEquipmentForm=this.showUpdateEquipmentForm.bind(this);
}
setEquipmentName(e)
{
     this.setState({EquipmentName:e.target.value});
}
setEquipmentStatus(e)
{
     this.setState({EquipmentStatus:e.target.value});
}
setEquipmentDate(e)
{
     this.setState({EquipmentDate:e.target.value});
}
setEquipmentLoc(e)
{
     this.setState({EquipmentLoc:e.target.value});
}
setEquipmentType(e)
{
     this.setState({EquipmentType:e.target.value});
}
setEquipmentId(e)
{
    this.setState({EquipmentId:e.target.value})
}
async AddEquipment()
{
     var data={
        "eqId": 0,
        "eqName": this.state.EquipmentName,
        "eqDate": this.state.EquipmentDate,
        "eqStatus": this.state.EquipmentStatus,
        "eqLocation": this.state.EquipmentLoc,
        "eqType": this.state.EquipmentType
      }
      console.log(data);
      var result=await EquipmentService.CreateEquipment(data);
     alert(result);
}
 async DeleteEquipment()  
{
    var data = {
        "eqId":this.state.EquipmentId
    }
    console.log(data);
    var result=await EquipmentService.DeleteEquipment(data);
    console.log(result); 
}
GetEquipment()
{
     alert('equipment by id');
}
showUpdateEquipmentForm()
{
    return(
        <form>
        <div className="form-group">
            <label>Equipment ID:</label>
            <input type="number" value={this.state.EquipmentId} className="form-control" onChange={this.setEquipmentId} />
        </div>
         <div className="form-group">
            <label>Equipment Name:</label>
            <input type="text" value={this.state.EquipmentName} className="form-control" onChange={this.setEquipmentName} />
        </div>
        <div className="form-group">
            <label>Equipment Status</label>
            <input type="text" value={this.state.EquipmentStatus} onChange={this.setEquipmentStatus} className="form-control" />
        </div>
        <div className="form-group">
            <label>Equipment Location</label>
            <input type="text" value={this.state.EquipmentLoc} onChange={this.setEquipmentLoc} className="form-control" />
        </div>
        <div className="form-group">
            <label>Equipment Type</label>
            <input type="text" value={this.state.EquipmentType} onChange={this.setEquipmentType} className="form-control" />
        </div>
        <input type="button" onClick={this.AddEquipment} value="Save" className="btn col-md-3 btn-primary" />
        </form>
     )  
}
 showAddEquipmentForm()
 {   
     return(
        <form>
         <div className="form-group">
            <label>Equipment Name:</label>
            <input type="text" value={this.state.EquipmentName} className="form-control" onChange={this.setEquipmentName} />
        </div>
        <div className="form-group">
            <label>Equipment Status</label>
            <input type="text" value={this.state.EquipmentStatus} onChange={this.setEquipmentStatus} className="form-control" />
        </div>
        <div className="form-group">
            <label>Equipment Location</label>
            <input type="text" value={this.state.EquipmentLoc} onChange={this.setEquipmentLoc} className="form-control" />
        </div>
        <div className="form-group">
            <label>Equipment Type</label>
            <input type="text" value={this.state.EquipmentType} onChange={this.setEquipmentType} className="form-control" />
        </div>
        <input type="button" onClick={this.AddEquipment} value="Save" className="btn col-md-3 btn-primary" />
        </form>
     )
 }
 showDeleteEquipmentForm()
 {   
     return(
        <form>
         <div className="form-group">
            <label>Equipment ID:</label>
            <input type="number" value={this.state.EquipmentId} className="form-control" onChange={this.setEquipmentId} />
        </div>
        <input type="button" onClick={this.DeleteEquipment} value="Delete" className="btn col-md-3 mt-6 btn-primary" />
        </form>
     )
 }
 showEquipmentByIdForm()
 {   
     return(
        <form>
         <div className="form-group">
            <label>Equipment ID:</label>
            <input type="number" value={this.state.EquipmentId} className="form-control" onChange={this.setEquipmentId} />
        </div>
        <input type="button" onClick={this.GetEquipment} value="Get Equipment By Id" className="btn col-md-3 mt-6 btn-primary" />
        </form>
     )
 }
 showAllEquipment()
 {
  alert("This will be in table format")
 }
     render()
     {
         return(
            <div>
            <div className='container'>
            <input type="button" onClick={()=>this.setState({showAddForm:!this.state.showAddForm})} value="Add an Equipment" className="btn mt-5 btn-primary" />
            {this.state.showAddForm ? this.showAddEquipmentForm() : null}
            </div>
            <div className='container'>
            <input type="button" onClick={()=>this.setState({showDelForm:!this.state.showDelForm})} value="Remove an Equipment By ID" className="btn mt-5 btn-primary" />
            {this.state.showDelForm? this.showDeleteEquipmentForm() : null}
            </div>
            <div className='container'>
            <input type="button" onClick={()=>this.setState({showEquipmentByIdForm:!this.state.showEquipmentByIdForm})} value="Get Equipment By ID" className="btn mt-5 btn-primary" />
            {this.state.showEquipmentByIdForm? this.showEquipmentByIdForm() : null}
            </div>
            <div className='container'>
            <input type="button" onClick={()=>this.setState({showEqTable:!this.state.showEqTable})} value="Show All Equipment" className="btn mt-5 btn-primary" />
            {this.state.showEqTable? this.showAllEquipment() : null}
            </div>
            <div className='container'>
            <input type="button" onClick={()=>this.setState({showUpdateForm:!this.state.showUpdateForm})} value="Update an Equipment" className="btn mt-5 btn-primary" />
            {this.state.showUpdateForm ? this.showUpdateEquipmentForm() : null}
            </div>
            </div>
         )
     }
}
export default Equipment;
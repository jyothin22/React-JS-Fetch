import { json } from "react-router-dom";

class EquipmentService
{
          getBaseUrl()
          {
            return "http://localhost:5131/api/";
          }
          async CreateEquipment(data)
          { var msg='';
             await fetch(this.getBaseUrl()+"Equipment/AddEquipment",
             {method:"POST",headers:{'Content-type':'application/json'},body:JSON.stringify(data)}).then(res=>res.json()).then(res=>msg=res)
             .catch(err=>msg=err);
             return msg;
          }
          async DeleteEquipment(data)
          {
             var msg='';
             await fetch(this.getBaseUrl()+"Equipment/DeleteEquipment?id="+data.eqId,
            { method:"DELETE",headers:{'Content-type':'application/json'}}).then(res=>res.json()).then(res=>msg=res)
            .catch(err=>msg=err);
            return msg;
          }
}
export default new EquipmentService;
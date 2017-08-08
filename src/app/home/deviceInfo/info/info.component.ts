import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { costCenter, equipmentStatus,  deptcheck, equiptechLevel, serviceModel, equipPhysicalLevel, equipmentOwner, purchaseVendor} from '../dropdown/dropdown.data';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  public dropdown = {
    costCenter: costCenter,
    equipmentStatus: equipmentStatus,
    deptcheck: deptcheck,
    equiptechLevel: equiptechLevel,
    serviceModel: serviceModel,
    equipPhysicalLevel: equipPhysicalLevel,
    equipmentOwner: equipmentOwner,
    purchaseVendor: purchaseVendor
  }
  public info = {

  }
  constructor(public router: Router) {}
  ngOnInit () {

  }
  
  
}

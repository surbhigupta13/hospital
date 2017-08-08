import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { equipmentStatus,  deptcheck, equiptechLevel, serviceModel, equipPhysicalLevel, equipmentOwner, purchaseVendor, 
  Conditionalriskfactor, AdjustedRiskScore, PMSchedule, PMProcType, PMModel, alarmPriority, RiskPatient, AlarmFatigue,
PotentialforHarm, BestPractices} from '../dropdown/dropdown.data';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit{
  public dropdown = {
    
    equipmentStatus: equipmentStatus,
    deptcheck: deptcheck,
    equiptechLevel: equiptechLevel,
    serviceModel: serviceModel,
    equipPhysicalLevel: equipPhysicalLevel,
    equipmentOwner: equipmentOwner,
    purchaseVendor: purchaseVendor,
    Conditionalriskfactor: Conditionalriskfactor,
    AdjustedRiskScore: AdjustedRiskScore,
    PMSchedule: PMSchedule,
    PMProcType:  PMProcType,
    PMModel: PMModel,
    alarmPriority: alarmPriority,
    RiskPatient: RiskPatient,
    AlarmFatigue: AlarmFatigue,
    PotentialforHarm: PotentialforHarm,
    BestPractices: BestPractices
  }
  public info = {

  }
  constructor(public router: Router) {}
  ngOnInit () {

  }
  
  
}

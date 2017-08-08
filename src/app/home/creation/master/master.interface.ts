export interface master  {
    groupName:any,
    code:string,
    description:string,
    sortOrder:number,
    active:any,
    shortId:number,
    schedule:string
  }
  export const groupName = [
    {label:'Work performed', value:null},
    {label:'WO Types', value:null},
    {label:'WO Status', value:null},
    {label:'WO Risks', value:null},
    {label:'WO Priority', value:null},
    {label:'Received Via', value:null},
    {label:'Received Via2', value:null},
    {label:'Labour Types', value:null},
    {label:'Hrs Types', value:null},
    {label:'Failure Codes', value:null},
    {label:'Physical Risks', value:null},
    {label:'Maintainance Frequency', value:null},
    {label:'Function Risks', value:null},
    {label:'Risk Codes', value:null},
    {label:'Technology Level', value:null},
]
export const active =[
    {label:'True', value:null},
    {label:'False', value:null},
  ]
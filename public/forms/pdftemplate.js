module.exports = item => {
  // const today = new Date();
  // let total = 0;
  // assets.forEach((asset) => {
  // total = total + asset.amount;
  // });
  // console.log("total--->",total)
  // services.forEach((service) => {
  // total = total + service.amount;
  // })

  return `
  <!doctype html>
  <html>
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>PDF Result Template</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <style>
  .heading{
  font-weight:bold;
  font-size:15px;
  margin-left:12px;
  margin-top:18px;
  }
  .pre-emp{
  font-weight:bold;
  font-size:12px;
  margin-left:8px;
  margin-top:18px;
  }
  input{
  width: -webkit-fill-available;
  border:none;
  display:none;
  
  }
  .imgLogo{
    height:50px;
    width:50px;
    margin-top:-45px;
    margin-left:50%;
  }
  .border1{
  border: none;
  border-bottom:1px solid grey;
  margin-bottom:40px;
  width:100%;
  margin-left:10px;
  }
  .table_Head{
  font-size:10px;
  font-weight:bold; 
  margin-left:15px;
  }
  .table_Head1{
  font-size:10px;
  font-weight:bold; 
  margin-left:380px;
  }
  .approved_font{
  font-size:10px;
  font-weight:bold;
  margin-right:10%
  }
  .tableText{
  font-size:8px;
  }
  
  th,td{
  font-size:10px
  }
  
  
  </style>
  </head>
  <body>
  <div class = "container">
  <span >
  <span class = "row">

  <span class = "heading col-xs-5">
  <i>Application for Employment</i>
  </span>
  
  <span class = "pre-emp col-xs-4" style = "margin-left:20px">
  <div class = "row" >
  <i>PRE-EMPLOYMENT QUESTIONNAIRE</i><br>
  </div>
  <div class = "row">
  <i>EQUAL OPPORTUNITY EMPLOYER</i>
  </div>
  </div>
  </span>
  <span class = "col-xs-3"><img class = "imgLogo" src = "https://employmentapp.herokuapp.com/images/image.jpg"></span>
  
  <div class = "row" style = "margin-top:10px">
  <div class = "col-xs-3">
  <i><h3 class = "table_Head">Personal Information</h3></i> 
  </div>
  <div class = "col-xs-4 "></div>
  <div class = "col-xs-1 table_Head1">
  Date: ${item.headerDate}
  </div>
  <div class = "col-xs-4">
  <input type = "text" class = "border1" value = "" disabled >
  </div>
  </div>
  <table>
  <table style="width:60%"; border=solid>
  <tr> 
  <td> <small style="font-size: x-small;">NAME(LAST NAME FIRST): </small>
  <div> ${item.name}</div>
  </td>
  <td> <small style="font-size: x-small;">SOCIAL SECURITY NO: </small>
  <div>${item.socialSecurityNo}</div>
  </td>
  </tr>
  </table>
  <table style="width:60%"; border=solid>
  <tr> 
  <td style="width:39%"> <small style="font-size: x-small;">PRESENT ADDRESS: </small>
  <div>${item.presentAddress.address}</div>
  </td>
  <td> <small style="font-size: x-small;">CITY: </small>
  <div>${item.presentAddress.city}</div>
  </td>
  <td>STATE: 
  <div>${item.presentAddress.state}</div>
  </td>
  <td>ZIPCODE: 
  <div>${item.presentAddress.zipcode}</div>
  </td>
  </tr>
  </table>
  <table style="width:60%"; border=solid>
  <tr> 
  <td style="width:39%">PERMANENT ADDRESS: 
  <div>${item.permanentAddress.address}</div>
  </td>
  <td>CITY: 
  <div>${item.permanentAddress.city}</div>
  </td>
  <td>STATE: 
  <div>${item.permanentAddress.state}</div>
  </td>
  <td>ZIPCODE: 
  <div>${item.permanentAddress.zipcode}</div>
  
  </td>
  </tr>
  </table>
  <table style="width:60%"; border=solid>
  <tr>
  <td style="width:30%">PHONE NO. : 
  <div>${item.phoneNo}</div>
  </td>
  <td style="width:30%">SECONDARY SECONDARY PHONE NO. : 
  <div>${item.secondaryNo}</div>
  </td>
  <td style="width:60%">REFERRED BY : 
  <div>${item.refferedBy}</div>
  
  </td>
  
  </tr>
  
  </table>
  </table>
  <h5>Employement Desired</h5>
  <table style="width:60%"; border=solid>
  <table style="width:60%"; border=solid>
  <td style="width:40%"><small style="font-size: x-small;">POSITION : </small>
  <div>${item.employmentDesired.position}</div>
  </td>
  <td style="width:30%"><small style="font-size: x-small;">DATE YOU CAN START : </small>
  <div>${item.employmentDesired.empDate}</div>
  </td>
  <td style="width:30%"><small style="font-size: x-small;">SALARY DESIRED : </small>
  <div>${item.employmentDesired.salaryDesired}</div>
  </td>
  </table>
  <table style="width:60%"; border=solid>
  <td>
  <small style="font-size: x-small;">ARE YOU EMPLOYED NOW?</small>
  <div>${item.isEmployee}</div>
  
  </td>
  <td>
  <small style="font-size: x-small;">IF SO,MAY WE INQUIRE OF YOUR PRESENT EMPLOYER?</small>
  <div>${item.isPresentEmployee}</div>
  
  </td>
  </table>
  <table style="width:60%"; border=solid>
  <td style="width:33%">
  <small style="font-size: x-small;">
  EVER APPLIED TO THIS COMPANY BEFORE ?</small>
  <div>${item.isAppliedCompany}</div>
  </td>
  <td style="width:33%">
  <small style="font-size: x-small;"> WHERE : </small>
  <div>${item.where}</div>
  </td>
  <td style="width:33%">
  <small style="font-size: x-small;"> WHEN : </small>
  <div>${item.when}</div>
  </td>
  </table>
  </table>
  <h5>Education History</h5>
  <table style="width:60%"; border=solid>
  <table style="width:60%"; border=solid>
  
  <th></th>
  <th>Name & Location Of School</th>
  <th>Years Attended</th>
  <th>Did You Graduate</th>
  <th>Subjects Studied</th>
  <tr>
  <td>HIGH SCHOOL</td>
  <td><div>${item.highSchool.nameAndLocation}</div></td>
  <td><div>${item.highSchool.yearsAttended}</div> </td>
  <td> <div>${item.highSchool.isGraduate}</div></td>
  <td> <div>${item.highSchool.subjectStudied}</div></td>
  </tr>
  <tr>
  <td>COLLEGE</td>
  <td><div>${item.college.nameAndLocation}</div></td>
  <td><div>${item.highSchool.yearsAttended}</div> </td>
  <td> <div>${item.highSchool.isGraduate}</div></td>
  <td><div>${item.highSchool.subjectStudied}</div> </td>
  </tr>
  <tr>
  <td>TRADE,BUSINESS,OR CORRESPONDANCE SCHOOL</td>
  <td><div>${item.tradeAndBusiness.nameAndLocation}</div></td>
  <td><div>${item.tradeAndBusiness.yearsAttended}</div></td>
  <td><div>${item.tradeAndBusiness.isGraduate}</div></td>
  <td> <div>${item.tradeAndBusiness.subjectStudied}</div></td>
  </tr>
  </table>
  <h5>General Information</h5>
  <table style="width:60%"; border=solid>
  <tr> 
  <td width="100%">Subject Of Special study/reserach works: 
  
  ${
    item.generalInformation.specialStudyResearch
    }</td>
  
  </tr>
  
  <tr> 
  <td width="100%">Special Training: 
  ${item.generalInformation.specialTraining}</td>
  
  
  </tr>
  
  <tr> 
  <td width="100%">Special Skills: ${item.generalInformation.specialSkills}</td>
  
  
  </tr>
  <tr> 
  <table style="width:60%"; border=solid>
  <tr>
  <td width="30%">U.S. Military OR Naval Services: ${item.generalInformation.services}</td>
  
  <td width="30%">Rank: ${item.generalInformation.rank}</td>
  
  </tr>
  </table>
  
  
  </tr>
  
  
  </table>
  <h5>FORMER EMPLOYERS</h5>
  <table style="width:60%;" border=solid>
  
  <tr>
  <th><small style="font-size: x-small;">DATE MONTH AND YEAR</th>
  <th><small style="font-size: x-small;">NAME & ADDRESS OF EMPLOYER </th>
  <th><small style="font-size: x-small;">SALARY</th>
  <th><small style="font-size: x-small;">POSITION</th>
  <th><small style="font-size: x-small;">REASON FOR LEAVING</th>
  </tr>
  
  
  ${item.formerEmployers.map((items) => {

      return `<tr>
  <td width="20%"> 
  <small style="font-size: x-small;">
  FROM</small>
  <div>${items.startDate}</div>
  <hr>
  <small style="font-size: x-small;">
  TO
  <div>${items.endDate}</div>
  </small>
  </td>
  <td width="40%"><div>${items.feName}</div></td>
  <td width="10%"><div>${items.feSalary}</div></td>
  <td width="20%"><div>${items.fePosition}</div></td>
  <td width="20%"><div>${items.feReason}</div></td>
  </tr>`;
    }).join('')}
  
  </table>
  <h6>Reference</h6>
  <table style="width:60%;" border = solid> 
  <tr>
  <th> <small style="font-size: x-small;">NAME</th>
  <th> <small style="font-size: x-small;">ADDRESS</th>
  <th> <small style="font-size: x-small;">BUSINESS</th>
  <th> <small style="font-size: x-small;">YEARS KNOWN</th>
  </tr>
  
  ${item.references.map(items => {
      return `<tr>
  <td width="30%">${items.name} </td>
  <td width="30%">${items.address}</td>
  <td width="30%">${items.business} </td>
  <td width="10%">${items.yearsKnown} </td>
  </tr>`;
    }).join('')}
  
  </table>
  <h5>Authorization</h5>
  
  <small style="font-size: x-small;"> <p style="width:60% ;text-align:justify">
  "I certify that the facts contained in this application are true and complete to the best of my knowledge and understand that, if employed ,
  falsified statements on this application shall be grounds for dismisaal.
  <br/>
  I authorize investigation of all statements contained here in and the references and employees listed above to give you any and all 
  infromation concerning my previous employment and any pertinent information they may have ,personal or otherwise ,and release the 
  company from all liability for any damage that may result from utilization of such information.
  <br/>
  I also understand and agree that no representative of the company has any authority to enter into any agreement for employment for any 
  specified period of time ,or to make any agreement contrary to the foregoing ,unless it is in writing and signed by an authorized company 
  representative.
  <br/>
  This waiver does not permit the release or use of disability -related or medical information in a manner prohibited by the Americans with 
  the Disabilities Act (ADA) and other relevant federal and state laws.
  <br/>
  I undersatnd that a consumer credit report and criminal records check may be necessary prior to my employement .If such reports are
  required ,I understand that, in compliance with federal law ,the company will provide me with a written notice regarding the use of these 
  reports and will also obtain a separate written authorization from me to consent to these reports. I also understand that a poor credit 
  history or conviction will not automatically result in disqualification from employement.
  <br/>
  
  In compliance with federal law, all persons hired will be required to verify identity and eligibility to work in the United States and to 
  complete the required employement eligibility verification document form upon hire
  </p></small>
  
  
  
  <div style = "font-size:10px">
  <span>DATE: </span>
  
  <span>${item.signDate}</span>
  
  
  
  <span style = "margin-left:260px">SIGNATURE: </span>
  <span>${item.signature}</span>
  
  </div>
  
  
  
  <div style = "margin-left:30px;margin-top:80px"> <span>____________</span>DO NOT WRITE BELOW THIS LINE<span>___________</span></div>
  
  
  <div style = "font-size:10px">
  <span>DATE: </span>
  
  <span>${item.interviewerDate}</span>
  
  
  
  <span style = "margin-left:260px">INTERVIEWED BY: </span>
  <span>${item.interviewBy}</span>
  </div>
  <h5>Remarks</h5>
  <table>
  <table style="width:60%" ; border=solid >
  <tr>
  <td>
  <input type="textarea" value=${item.remarks.textRemarks} />
  </td>
  </tr>
  </table>
  <table style="width:60%"; border=solid>
  <tr>
  <td> <small style="font-size: x-small;">NEATNESS</small>
  <div>${item.remarks.neatness} </div>
  </td>
  <td>
  <small style="font-size: x-small;">CHARACTER</small>
  <div>${item.remarks.character} </div>
  </td>
  </tr>
  </table>
  <table style="width:60%"; border=solid>
  <tr>
  <td>
  <small style="font-size: x-small;">PERSONALITY</small>
  <div>${item.remarks.personality} </div>
  </td>
  <td><small style="font-size: x-small;">ABILITY</small>
  
  <div>${item.remarks.ability} </div>
  </td>
  </tr>
  </table>
  <table style="width:60%"; border=solid>
  <tr>
  <td >
  <small style="font-size: x-small;">HIRED</small>
  </br>
  <div>${item.remarks.hired} </div>
  </td>
  <td> 
  <small style="font-size: x-small;">FOR DEPT.</small>
  <div>${item.remarks.forDept} </div>
  </td>
  <td> 
  <small style="font-size: x-small;">POSITON</small>
  <div>${item.remarks.position} </div>
  </td>
  <td> 
  <small style="font-size: x-small;">WILL REPORT</small>
  <div>${item.remarks.willReport} </div>
  </td>
  <td> 
  <small style="font-size: x-small;">SALARY WAGES</small>
  <div>${item.remarks.salaryWages} </div>
  </td>
  </tr>
  </table>
  </table>
  
  <h5>APPROVED:</h5>
  </table>
  <div>
  <span>${item.approved.employmentManager}</span>
  <span>${item.approved.departmenttHead}</span>
  <span>${item.approved.generalManager}</span>
  </div>
  <div>
  <span>______________________</span>
  <span>______________________</span>
  <span>______________________</span>
  </div>
  <div>
  <span class = "approved_font">
  
  EMPLOYMENT MANAGER
  </span>
  <span class = "approved_font">
  
  DEPARTMENT HEAD
  </span>
  <span class = "approved_font">
  
  GENERAL MANAGER 
  </span>
  </div>
  <small style="font-size: x-small;">
  <p style="width:60% ;text-align:justify"> 
  
  This application for employment is sold only for general use throughout the United States. 
  TOPS assume no responsibility and hereby disclaims any liability for the inclusion in this
  form of any questions or requests for information upon which a violation of local, state, 
  and/or 'ederal law may be based. It is the user's responsibility to ensure that this form's
  use complies with applicable laws, which change from time to time.
  </p>
  </small>
  </table>
  
  
  
  </div>
  
  </div>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
  </html>
  `;
  };

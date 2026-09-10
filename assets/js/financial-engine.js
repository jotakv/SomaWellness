export const sum = obj => Object.values(obj).reduce((a,b)=>a+Number(b),0);
export function calculateRent(month, model){const band=model.rentSchedule.find(x=>month>=x.fromMonth&&month<=x.toMonth);return model.premises.fullMonthlyRent*(band?.rate??1)}
export function economics(model, overrides={}){
 const c={...model.classes,...overrides}; const w={...model.workshops,perMonth:overrides.workshopsPerMonth??model.workshops.perMonth};
 const capacity=overrides.capacity??model.premises.capacity, weeks=model.calendar.weeksPerMonth;
 const studentsPerClass=capacity*c.occupancy, monthlyAttendances=c.classesPerWeek*weeks*studentsPerClass;
 const classRevenue=monthlyAttendances*c.effectiveRevenuePerAttendance, teacherClassPayment=classRevenue*c.teacherShare;
 const classContribution=classRevenue-teacherClassPayment, workshopRevenue=w.perMonth*w.attendees*w.effectivePrice;
 const teacherWorkshopPayment=workshopRevenue*w.teacherShare, workshopContribution=workshopRevenue-teacherWorkshopPayment;
 const operatingCosts=overrides.operatingCosts??sum(model.operatingCosts), rent=overrides.rent??model.premises.fullMonthlyRent;
 const fcf=classContribution+workshopContribution-operatingCosts-rent;
 return {studentsPerClass,monthlyAttendances,classRevenue,teacherClassPayment,classContribution,workshopRevenue,teacherWorkshopPayment,workshopContribution,totalContribution:classContribution+workshopContribution,operatingCosts,rent,fcf,annualFCF:fcf*12,economicProfitAfterFounderTime:fcf-model.founderTime.founderHoursPerMonth*model.founderTime.shadowHourlyRate};
}
export function rampForMonth(month,model){return model.yearOneRamp.find(x=>month>=x.fromMonth&&month<=x.toMonth)}
export function projectMonth(month,model){const r=rampForMonth(Math.min(month,12),model);const season=model.calendar.seasonality[(month-1)%12];return economics(model,{classesPerWeek:r?.classesPerWeek??model.classes.classesPerWeek,occupancy:(r?.occupancy??model.classes.occupancy)*season,workshopsPerMonth:(r?.workshopsPerMonth??model.workshops.perMonth)*season,rent:calculateRent(month,model)})}
export function projection(model,months=60){let cumulative=0;return Array.from({length:months},(_,i)=>{const v=projectMonth(i+1,model); cumulative+=v.fcf; return {month:i+1,...v,cumulative};})}
export function annualProjection(model){const p=projection(model,60);return Array.from({length:5},(_,y)=>{const rows=p.slice(y*12,y*12+12);return {year:y+1,revenue:rows.reduce((a,x)=>a+x.classRevenue+x.workshopRevenue,0),collaborators:rows.reduce((a,x)=>a+x.teacherClassPayment+x.teacherWorkshopPayment,0),margin:rows.reduce((a,x)=>a+x.totalContribution,0),opex:rows.reduce((a,x)=>a+x.operatingCosts,0),rent:rows.reduce((a,x)=>a+x.rent,0),fcf:rows.reduce((a,x)=>a+x.fcf,0),cumulative:rows.at(-1).cumulative}})}
export function paybackMonth(model){const p=projection(model,120);const hit=p.find(x=>x.cumulative>=model.initialCapital);if(!hit)return null;const prior=hit.month===1?0:p[hit.month-2].cumulative;return (hit.month-1)+(model.initialCapital-prior)/hit.fcf}
export function breakEven(model,o={}){const c={...model.classes,...o};const w={...model.workshops,perMonth:o.workshopsPerMonth??model.workshops.perMonth};const capacity=o.capacity??model.premises.capacity, costs=(o.operatingCosts??sum(model.operatingCosts))+(o.rent??model.premises.fullMonthlyRent);const wc=w.perMonth*w.attendees*w.effectivePrice*(1-w.teacherShare);const neededClassContribution=Math.max(0,costs-wc);const revenueMinimum=neededClassContribution/(1-c.teacherShare);const studentsPerClass=revenueMinimum/(c.classesPerWeek*model.calendar.weeksPerMonth*c.effectiveRevenuePerAttendance);const occupancy=studentsPerClass/capacity;const minimumClasses=neededClassContribution/(model.calendar.weeksPerMonth*capacity*c.occupancy*c.effectiveRevenuePerAttendance*(1-c.teacherShare));return {revenueMinimum,studentsPerClass,occupancy,minimumClasses}}
export function onlineEconomics(month,model){
 const p=model.onlineSchool.planningModel,band=p.subscriberRamp.find(x=>month>=x.fromMonth&&month<=x.toMonth),subscribers=band?.subscribers??0;
 const revenue=subscribers*p.arpu,creatorCosts=revenue*p.creatorShare,paymentCosts=revenue*p.paymentRate,usageCosts=subscribers*p.variablePlatformCostPerSubscriber,fixedCosts=subscribers?p.fixedPlatformCostMonthly:0,variableCosts=creatorCosts+paymentCosts+usageCosts,contribution=revenue-variableCosts-fixedCosts;
 return {subscribers,revenue,creatorCosts,paymentCosts,usageCosts,fixedCosts,variableCosts,contribution,status:'DERIVADO'};
}
export function retreatEconomics(month,model){
 const p=model.retreats.planningModel,events=p.eventMonths.includes(month)?1:0,participants=events*p.capacity*p.occupancy,revenue=participants*p.ticket,variableCosts=participants*p.variableCostPerParticipant,fixedCosts=events*p.fixedCostPerEvent,contribution=revenue-variableCosts-fixedCosts;
 return {events,participants,revenue,variableCosts,fixedCosts,contribution,breakEvenParticipants:events?p.fixedCostPerEvent/(p.ticket-p.variableCostPerParticipant):null,breakEvenOccupancy:events?p.fixedCostPerEvent/(p.ticket-p.variableCostPerParticipant)/p.capacity:null,status:'DERIVADO'};
}

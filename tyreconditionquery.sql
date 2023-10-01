 select  TypeExpiryDate,AddedON ,TyreCondition,
 CASE
      WHEN TyreCondition = 'EXCELLENT' and Cast(AddedON as datetime) + 60 < CAST(GETDATE() AS Date)THEN 'GOOD'
      WHEN TyreCondition = 'GOOD' and Cast(AddedON as datetime) + 40 < GETDATE()THEN 'Average'
      WHEN TyreCondition = 'AVERAGE' and Cast(AddedON as datetime) + 15 < GETDATE()THEN 'Poor'
    
      END
 as condition from VehicleInfo
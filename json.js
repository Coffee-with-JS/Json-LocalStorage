let obj = {
    a: 10 , 
    b : ["apple", 'mango'] ,
    c: 30 ,
    d:  true, 
  }
  
  // a = 10
  
  console.log(obj, typeof obj)
  
  
  
  let json_obj = JSON.stringify(obj)
  
  console.log(json_obj, typeof json_obj)
  
  
  let js_obj = JSON.parse(json_obj)
  
  console.log(js_obj, typeof js_obj)
  
  // console.log(json_obj[0])
  
  
  // "jkhgqduGfouwehfouefwhuo3460-9854657687990"
  
  // 
  // {
  //   "a": 10 , 
  //   "b" : ["apple", "mango"] ,
  //   "c": 30 ,
  //   "d":  true, 
  // }
  
  // json => Python 
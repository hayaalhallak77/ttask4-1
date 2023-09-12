 //start part(a)
 var array=[2,4,3,7,15,9,0,6,1,22];
 var evennum=0;
 var smallnum=0;
 for(var index=0;index<array.length;index++){
      if(array[index]%2==0)
      {
         evennum=evennum+array[index];
      }
       if(index<5)
       {
         smallnum=smallnum+array[index];
       }
 }
 document.write("<h2>Part1</h2>");
 console.log(evennum);
 document.writeln("evennum="+evennum+"<br>" );
 console.log(smallnum);
 document.writeln("smallnum="+smallnum+"<br>");
 //end part(a)

 document.write("<hr>");

 
 //start part(b)
 var object={
     name:'Haya AL-Hallak',
     number:123345678,
     age:22,
     email:'hayahallak77@gmail.com'
 }
 console.log(object);
 console.log(object.name);
 console.log(object.number);
 console.log(object.age);
 console.log(object.email);
 document.write("<h2>Part2</h2>");
 var obj=JSON.stringify(object);
 document.writeln("Object:\t"+obj+"<br>");
 document.writeln("Name:\t"+object.name+"<br>");
 document.writeln("Number\t:"+object.number+"<br>");
 document.writeln("Age:\t"+object.age+"<br>");
 document.writeln("Email:\t"+object.email);
 //end part(b)
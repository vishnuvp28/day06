Question 1:


class Movie{
    
    constructor(title,studio,rating="PG")
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(arr){
        
        let result=[];
        
        arr.filter(movie=>{
            
            if(movie.rating==="PG")
            
            result.push(movie);
            
        });
        
        return result;
    }
    
}

let movie= new Movie("Forest Gump","The Tisch Company","PG-13");

let movie1= new Movie("Cast Away","20th Century Fox","PG");

let movie2= new Movie("Inferno","Columbia Pictures");

let movieArr=[movie,movie1,movie2];

console.log(movie.getPG(movieArr));



Question 2:




class Circle{
    
    constructor(radius,color)
    {
        this.radius=radius;
        
        this.color=color;
        
    }
    
    getradius(){
        
        return `Radius= ${this.radius}`;
    }
    
      
    setradius(){
        this.radius=newrad;
        
        return `New Radius= ${this.radius}`;
    }
    
      
    getcolor(){
        
        return `Color= ${this.color}`;
    }
    
    
      
    setcolor(){
        
             this.color=newcor;
             
        return `New Color= ${this.color}`;

    }
    
     getArea(){
         
         return `Area= ${Math.PI*Math.pow(this.radius,2)}`;
        
    }
    
     getCircumference(){ 
         
         return `Circumference= ${2*Math.PI*this.radius}`;
        
    }
    
}


var newrad= 10;

let newcor="red";

let value= new Circle(5,"blue");

console.log(value.getradius());

console.log(value.setradius());

console.log(value.getcolor());

console.log(value.setcolor());

console.log(value.getArea());

console.log(value.getCircumference());



3) Write a “person” class to hold all the details.



class Person{
    constructor(name,profession,height,weight,age){
        
        this.name=name;
        this.profession=profession;
        this.height=height;
        this.weight=weight;
        this.age=age;
    }
    bio(){
        let cls=`
        Name : ${this.name}
        Profession : ${this.profession}
        Height : ${this.height}
        Weight : ${this.weight}
        Age : ${this.age}
        `;
    return cls;
        
    }
    
}

let details=new Person("Tom cruise","Actor","5.9","75kgs","59");

console.log(details.bio());



4) write a class to calculate uber price.



class Uber{
    
    constructor(kilometer,rateperkm,waitingchargepermin,waitingtime){
        
        this.kilometer=kilometer;
        
        this.rateperkm=rateperkm;
        
        this.waitingchargepermin=waitingchargepermin;
        
        this.waitingtime=waitingtime;
    }
    
    fare(){
        
    let totalcost =this.kilometer*this.rateperkm;
    
    if(this.kilometer>10)
    
    return `Totalcost : ${totalcost}`;
    
    else
    
    totalcost=this.kilometer*this.rateperkm+this.waitingtime*this.waitingchargepermin;
    
     return `Totalcost : ${totalcost}`;
    }
    
}

let uberprice=new Uber(7,14,3,10);

console.log(uberprice.fare());




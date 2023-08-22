// // // slice
// // arr = [1,2,3,4,5,6,7,8,9,0]
// // // console.log(arr.slice(1,4));
// // // console.log(arr.slice(5));
// // // console.log(arr.slice());
// // // console.log(arr.slice(15));

// // // splice

// // // console.log(arr);
// // fruits=["apple", "mango", "kiwi", "banana", "papaya", "orange", "grapes"]

// // // console.log(fruits.slice(1,4));
// // // console.log(fruits.splice(3, 1, "onion", "tomato", "potato", "lady finger"));
// // // console.log(fruits)
// // // console.log(arr.splice(2,5));
// // // console.log(arr);

// // fruits.push("onoin")
// // console.log(fruits);
// // fruits.pop()
// // fruits.pop()
// // fruits.pop()
// // fruits.pop()
// // fruits.pop()

// // fruits.unshift("hello")
// // console.log(fruits);
// // fruits.shift()
// // fruits.shift()
// // console.log(fruits);

// let str = "hello";
// let str2 = "geeksterHIIII";
// let str3 = "fghgfhjkdafa";
// let str4 = `cnhzxfjkznxc`;

// var age = 22;
// // console.log("i am " + age + " years old");
// // console.log(
// //     // templete litreals
// //   `i am ${age} years old `
// // );

// // console.log(str.length);
// // console.log(str.charAt(4));
// // console.log(str.toUpperCase());

// // console.log(str2.substr(2, 4));
// // console.log(str2.substring(2, 4));

// const fruits = "apple, banana, mango, grapes"
// const ar = fruits.split(", ")
// let i = 0
// // ar.map((ele)=>{
// //   const splited = ele.split("")
// //   splited.map((ele)=>{
// //     console.log(ele);
// //     if(ele === "a"){
// //       i = i+1
// //     }
// //     console.log(i);
// //   })
// // })


// const str5 = " hii guys how are you "
// // console.log(str5.trim(" "));
// // console.log(str5.includes("geekster"))
// // console.log(str5.includes("hii"))
// // console.log(str5.includes("Hii"))
// console.log(str5.includes("gu"))
// console.log(str5.includes(" "))


const obj = {
  name:"rishabh",
  hobby: [
    {
      social:["dance", "singing"],
      tvSeries:{
        hindi:["a","b","c"],
        english:["fsadgas", "asdasd"]
      }
    },
    {
      social:["dsgfdss", "dsfdsf"],
      tvSeries:{
        hindi:["wqew","343",],
        english:["er", "ewr"]
      }
    },
    {
      social:["ewgffd", "sifadfanging"],
      tvSeries:{
        hindi:["431434","ewr","dfdsf"],
        english:["fcvgfg", "ewq"]
      }
    },
    {
      social:["43weq", "wq4322"],
      tvSeries:{
        hindi:["434ewq"],
        english:["fa", "asfgbvcdasd"]
      }
    },
  ],
  interest: {
    development:{
      technology:["front-end", "git/github", "chatgpt"],
      skills:["html", "css", "js", "reactJS"]
    },
    devops:{
      cloudComputing:{
        AWS:["ec2", "s3", "lambda", "Route53", "cloudFront"]
      }
    }
  }
}
// console.log("obj => ", Object.entries(obj));

// console.log(obj);
// // console.log(obj.interest.development.technology);
// console.log(obj.name); // object
// console.log(obj["name"]); // json

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

console.log(obj.hasOwnProperty("name"));
console.log(obj.hasOwnProperty("devops"));
const va = obj.interest
console.log(va.hasOwnProperty("devops"));

// prototype


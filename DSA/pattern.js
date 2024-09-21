// Pattern 1

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

const n = parseInt(process.argv[2]);
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log("\n");
  
// }

// Pattern 2
// * 
// * * 
// * * *

// for(let i=0;i<n;i++){

//     for(let j=0;j<=i;j++){

//         process.stdout.write("* ");
        
//     }
//     console.log('\n');
    
// }

//pattern 3
// 1
// 1 2 
// 1 2 3

for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++){
        process.stdout.write(`${j+1} `);
    }
    console.log('\n');
    
}
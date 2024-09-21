// ---------------------Pattern 1------------------------

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

// ------------------------------------Pattern 2---------------------------------
// *
// * *
// * * *

// for(let i=0;i<n;i++){

//     for(let j=0;j<=i;j++){

//         process.stdout.write("* ");

//     }
//     console.log('\n');

// }

//------------------------------pattern 3-------------------------------------------------
// 1
// 1 2
// 1 2 3

// for(let i=0;i<n;i++){
//     for(let j=0;j<=i;j++){
//         process.stdout.write(`${j+1} `);
//     }
//     console.log('\n');

// }

//-------------------------Pattern-4----------------------------
// 1
// 2 2
// 3 3 3

// for(let i=0;i<n;i++){
//     for(let j=0;j<=i;j++){
//         process.stdout.write(`${i+1} `)
//     }
//     console.log('\n');

// }

//-------------------Pattern -4--------------------
// * * * * * *
// * * * * *
// * * * *
// * * *
// * *
// *
// for(let i=0;i<n;i++){
//     for(j=0;j<n-i;j++){
//         process.stdout.write('* ')
//     }
//     console.log("\n");

// }

//------------------Pattern-5-------------
// Input Format: N = 6
// Result:
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - i; j++) {
    process.stdout.write(`${j + 1} `);
  }
  console.log('\n');
  
}

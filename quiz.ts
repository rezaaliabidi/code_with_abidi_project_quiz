#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.green("\n\t\tPIAIC Batch 56 Quarter-1\t\t\t"));
console.log(chalk.bold.blue("\n\tWelcome to my quiz project code_with_abidi"));
console.log(chalk.bold.yellow("Note: Maximum points: 10, you are required to maintain at least 5 points"));
console.log(chalk.bold.white("-------------------------------------------------------------------------"));

let points = 0

// ------------------------------questuion1-----------------------------------------

let question1 = await inquirer.prompt({

    name:"one",
    message: "Typescript is a superset off?",
    type: "list",
    choices: ["python","c++","java","javascript"]
})

if (question1.one === "javascript"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer");
}
// -----------------------------questuion2--------------------------------------------------------

let question2 = await inquirer.prompt({

    name:"two",
    message: "who is the owner of facebook?",
    type: "list",
    choices: ["elon musk","mark","bill gates","none of them"]
})

if (question2.two === "mark"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer");
}

// --------------------------------------questuion3---------------------------------------------

let question3 = await inquirer.prompt({

    name:"three",
    message: "What is the file extension for typescript?",
    type: "list",
    choices: ["j.s",".ts",".html",".css"]
})

if (question3.three === ".ts"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer");
}

// --------------------------questuion4--------------------------------------------------------


let question4 = await inquirer.prompt({

    name:"four",
    message: "Typescript code is compiled into?",
    type: "list",
    choices: ["binary code","Assembly code","javascript","python"]
})

if (question4.four === "javascript"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer");  
}

// -------------------------------question5---------------------------------------------------


let question5 = await inquirer.prompt({

    name:"five",
    message: "which command is type for the output;?",
    type: "list",
    choices: ["Print","display","console.log()","none of them"]
})

if (question5.five === "console.log()"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer"); 
}

//---------------------------------question6---------------------------------------------------

let question6 = await inquirer.prompt({

    name:"six",
    message: "what is the command of tsconfig file?",
    type: "list",
    choices: ["tsc --y","tsc --init","tsc --D","tsc --config"]
})

if (question6.six === "tsc --init"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer"); 
}

//---------------------------------question7---------------------------------------------------

let question7 = await inquirer.prompt({

    name:"seven",
    message: "what is the command of package.json file?",
    type: "list",
    choices: ["npm init -y","npm init","npm login","npm init --inquirer"]
})

if (question7.seven === "npm init -y"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer"); 
}

//------------------------------------question8-----------------------------------------------

let question8 = await inquirer.prompt({

    name:"eight",
    message: "what is the command to publish vscode in npm?",
    type: "list",
    choices: ["npm login","npm publish",".gitignore","node_module"]
})

if (question8.eight === "npm publish"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer"); 
}

//------------------------------------------question9------------------------------------------

let question9 = await inquirer.prompt({

    name:"nine",
    message: "let a:number = 5; let b: number = 2; let c: number; c = ++a + b--; console.log(c)?",
    type: "list",
    choices: ["6","7","8","9"]
})

if (question9.nine === "7"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer"); 
}

//-----------------------------------------question10----------------------------------------------

let question10 = await inquirer.prompt({

    name:"ten",
    message: "when we push typescript file to githup, first we create?",
    type: "list",
    choices: ["index.js","*.ts","*.js",".gitignore"]
})

if (question10.ten === ".gitignore"){
    console.log("Your answer is correct");
    points++
}else{
    console.log("incorrect answer"); 
}





// output condition

if(points >= 10){
    console.log(chalk.bold.green("Congratulation"));
    console.log(chalk.bold.green(`Your points ${points}`));
}

else if(points>=5){
    console.log(chalk.bold.yellow("Keep it up"));
    console.log(chalk.bold.green(`Your points ${points}`));
}
else{
    console.log(chalk.bold.red("You loss! try next time"));
    console.log(chalk.bold.red(`Your points ${points}`));

}

#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import gradient from "gradient-string";
function welcome(){
 console.log(gradient.rainbow(`
      ---------Lets Start Calculation With Us-----------
       _____________________
      |  _________________  |
      | | JO           0. | |
      | |_________________| |
      |  ___ ___ ___   ___  |
      | | 7 | 8 | 9 | | + | |
      | |___|___|___| |___| |
      | | 4 | 5 | 6 | | - | |
      | |___|___|___| |___| |
      | | 1 | 2 | 3 | | x | |
      | |___|___|___| |___| |
      | | . | 0 | = | | / | |
      | |___|___|___| |___| |
      |_____________________|
               
             _______                    ______                                    
            /       \                  /      \                                   
            $$$$$$$  | __    __       /$$$$$$  | _____  ____   _______    ______  
            $$ |__$$ |/  |  /  |      $$ |__$$ |/     \/    \ /       \  /      \ 
            $$    $$< $$ |  $$ |      $$    $$ |$$$$$$ $$$$  |$$$$$$$  | $$$$$$  |
            $$$$$$$  |$$ |  $$ |      $$$$$$$$ |$$ | $$ | $$ |$$ |  $$ | /    $$ |
            $$ |__$$ |$$ \__$$ |      $$ |  $$ |$$ | $$ | $$ |$$ |  $$ |/$$$$$$$ |
            $$    $$/ $$    $$ |      $$ |  $$ |$$ | $$ | $$ |$$ |  $$ |$$    $$ |
            $$$$$$$/   $$$$$$$ |      $$/   $$/ $$/  $$/  $$/ $$/   $$/  $$$$$$$/ 
                       / \__$$ |                                                  
                       $$   $$/                                                    
                        $$$$$/                                                   
 
 
      `))
}
async function askQuestions(){
    let questions=await inquirer.prompt([
                                 {
                                  name:"op",
                                  type:"list",
                                  message:chalk.blueBright("Select operation : "),
                                  choices:[" + Addition"," - Subtraction"," * Multiplication"," / Division"]
                                 },
                                 {name:"num1",
                                  type:"number",
                                  message:chalk.blueBright("Enter first number : "),
                                 },
                                 {name:"num2",
                                 type:"number",
                                 message:chalk.blueBright("Enter Second number : ")
                                 }
                                  ])
    if (questions.op === " + Addition") {
      console.log(chalk.greenBright(`${questions.num1} + ${questions.num2} = ${questions.num1 + questions.num2}`));
        } 
    else if (questions.op ===" - Subtraction") {
       console.log(chalk.greenBright(`${questions.num1} - ${questions.num2} = ${questions.num1 - questions.num2}`));
        } 
    else if (questions.op === " * Multiplication") {
       console.log(chalk.greenBright(`${questions.num1} * ${questions.num2} = ${questions.num1 * questions.num2}`));
        }
    else if (questions.op ===" / Division") {
        if(questions.num2 !== 0){  
          console.log(chalk.greenBright(`${questions.num1} / ${questions.num2} = ${questions.num1 / questions.num2}`)) 
          } 
        else {
          console.log(chalk.red.strikethrough("Error: Division by zero is not allowed."))
          }
    }
}
async function again(){
    do{
        await askQuestions()
        var ask=await inquirer.prompt([
                                     {
                                      name:"restart",
                                      type:"list",
                                      message:chalk.cyanBright("Do you want to restart"),
                                      choices:["yes","no"]
                                     }
                                    ])
        if(ask.restart=="no"){
           console.log(gradient.rainbow("----------Thanks for joining us----------"))
        }
    }                                
    while(ask.restart=="yes")
}
welcome();
setTimeout(()=>{
  again();
},3000)
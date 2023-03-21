let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for (let index = 0; index < weeklyExpenseQuestions.length; index++) {
    const element = weeklyExpenseQuestions[index];
    console.log(element)
    let answer=window.prompt(element)
    weeklyExpenses=weeklyExpenses+parseFloat(answer)
}


for (let index = 0; index < monthlyExpenseQuestions.length; index++) {
    const element = monthlyExpenseQuestions[index];
    console.log(element)
    let answer=window.prompt(element)
    monthlyExpenses=monthlyExpenses+parseFloat(answer)
}


for (let index = 0; index < annualExpenseQuestions.length; index++) {
    const element = annualExpenseQuestions[index];
    console.log(element)
    let answer=window.prompt(element)
    annualExpenses=annualExpenses+parseFloat(answer)
}
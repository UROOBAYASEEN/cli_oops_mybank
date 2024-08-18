import inquirer from 'inquirer';
import chalk from 'chalk';
let managerpin = 12345;
let account_holder = [];
let userpin = [];
let user_data = [];
console.log(chalk.yellow.bold('WELLCOME TO OUR BANK'));
class GET_ACCOUNT {
    firstname;
    lastname;
    nationality;
    age;
    source_of_income;
    monthly_earning;
    CINC;
    selectpincode;
    INSETAMOUNT;
    constructor(fn, ln, na, age, soi, me, nic, pincode, ins) {
        this.firstname = fn;
        this.lastname = ln;
        this.nationality = na;
        this.age = age;
        this.source_of_income = soi;
        this.monthly_earning = me;
        this.CINC = nic;
        this.selectpincode = pincode;
        this.INSETAMOUNT = ins;
    }
    changepincode(newpin) {
        this.selectpincode = newpin;
    }
}
let starting = async () => {
    let processstart = await inquirer.prompt([{
            message: chalk.green.bold('HOW CAN I ASSET YOU'),
            type: 'list',
            name: 'doing',
            choices: ['CREATE NEW BANK ACCOUNT', 'WITHDRAW', 'VIWE ALL ACCOUNT OF BANK', 'EXIT']
        }]);
    if (processstart.doing == 'CREATE NEW BANK ACCOUNT') {
        console.log(chalk.yellow.bold('WELLCOME TO YOUR BANK'));
        console.log(chalk.yellow.bold('PLEASE WAIT.....................'));
        await setTimeout(() => {
            console.log('PLEASE  GIVE ME ALL INFORMATION ABOUT YOURSELF WHICH I REQUIRED TO OPEN YOUR ACCOUNT');
        }, 1000);
        let q1 = await inquirer.prompt([{
                message: 'ENTER YOUR FIRST_NAME',
                type: 'input',
                name: 'fn'
            }, {
                message: 'ENTER YOUR LAST_NAME',
                type: 'input',
                name: 'ln'
            }, {
                message: 'ENTER YOUR NATIONALITY',
                type: 'input',
                name: 'na'
            }, {
                message: 'ENTER YOUR AGE',
                type: 'input',
                name: 'age'
            }, {
                message: 'ENTER YOUR SOUCE OF INCOME',
                type: 'input',
                name: 'sr'
            }, {
                message: 'ENTER YOUR MONTHLY EARNING',
                type: "number",
                name: 'MEN'
            }, {
                message: 'ENTER YOUR CNIC_NUMBER',
                type: 'input',
                name: 'nic'
            }, {
                message: 'CREATE YOUR ATM PIN_CODE',
                type: 'input',
                name: 'PIN'
            }, {
                message: 'ENTER AMOUNT WHICH YOU WANT TO ADD INYOUR ACCOUNT ',
                name: 'ENTER',
                type: 'input',
            }
        ]);
        let ACCOUNT_HOLDER = new GET_ACCOUNT(q1.fn, q1.ln, q1.na, q1.age, q1.sr, q1.MEN, q1.nic, q1.pin, q1.ENTER);
        user_data.push(ACCOUNT_HOLDER);
        if (account_holder.includes(q1.fn)) {
            console.log(chalk.yellow.bold('YOU ALREADY HAVE ACCOUNT ON OUR BANK'));
            user_data.pop();
            await starting();
        }
        else {
            account_holder.push(q1.fn);
            userpin.push(q1.pin);
            console.log(chalk.yellow.bold('YOUR ACCOUNT IS SUCCESSFULLY CREAT'));
            await starting();
        }
    }
    else if (processstart.doing == 'EXIT') {
        console.log('THANKS FOR COMING');
    }
    else if (processstart.doing == 'VIWE ALL ACCOUNT OF BANK') {
        let pin = await inquirer.prompt([{
                message: 'PLEASE ENTER  MANAGER PINCODE',
                type: 'number',
                name: "pin"
            }]);
        if (pin.pin == managerpin) {
            console.log(chalk.yellow.bold('HERE IS ALL DATA OF EVERY USER OF YOUR BANKACCOUNT'));
            console.log(user_data);
            await starting();
        }
    }
    else if (processstart.doing == 'WITHDRAW') {
        let naming = await inquirer.prompt([{
                message: "ENTER YOUR NAME",
                type: 'input',
                name: 'name'
            }]);
        if (account_holder.includes(naming.name)) {
            let indexing = account_holder.indexOf(naming.name);
            let pin = await inquirer.prompt([{
                    message: 'PLEASE ENTER PIN CODE',
                    type: 'INPUT',
                    name: 'pin'
                }]);
            if (pin.pin == userpin[indexing]) {
                console.log('CONRATULATION YOU ENTRT RIGHT PASSWARD');
                let detectamount = await inquirer.prompt([{
                        message: 'HOW MANY AMOUNT YOUR WITHDRAW',
                        name: 'amount',
                        type: 'number'
                    }]);
                if (detectamount.amount < user_data[indexing].INSETAMOUNT) {
                    console.log('MONEY IS WITH DRAW FROM YOUR ACCOUNT');
                    user_data[indexing].INSETAMOUNT - detectamount.AMOUNT;
                    console.log(`NOW YOUR BALANCE IS ${user_data[indexing].INSETAMOUNT}`);
                    await starting();
                }
                else {
                    console.log(chalk.red.bold('WRONG PIN CODE TRY AGAIN'));
                    await starting();
                }
            }
        }
    }
};
starting();

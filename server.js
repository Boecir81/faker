const express = require("express");//import express so you can use express features
const app = express();//create an instance of express and store it in a variable "app"
const port = 8000;//indicates the port number to run on
const { faker } = require('@faker-js/faker');

// The two lines below help the app work with post data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



class User {
    constructor() {
        this.name = faker.address.city();
        // this.price = faker.commerce.price();
        // this.department = 
    }
}

app.get("/api/users/new", (req, res) => {
    let fakeUser = new User();

    res.json({ fakeUser })
})


class Company {
    constructor() {
        this.company = faker.company.companyName();
    }
}

app.get("/api/companies/new", (req, res) => {
    let fakeCompany = new Company();

    res.json({ fakeCompany })
})

class UserCompany {
    constructor() {
        this.usercompany = faker.finance.bitcoinAddress();
    }
}

app.get("/api/usercompanies/new", (req, res) => {
    let fakeUserCompany = new UserCompany();

    res.json({ fakeUserCompany })
})










//this needs to be at the bottom of your file, tells the app to listen for requests on port 8000
app.listen(port, () => console.log(`Listening on port: ${port}`));
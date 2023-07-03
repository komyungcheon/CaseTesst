import fs from "fs";
import qs from "qs";
// import BaseController from "./base.controller";

class HomeController {

    showHome(req, res) {
        fs.readFile('views/home.html', 'utf-8', (err, stringHTML) => {
            res.write(stringHTML);
            res.end();
        })
    }
    showErr(req, res) {
        fs.readFile('views/err.html', 'utf-8', (err, stringHTML) => {
            res.write(stringHTML);
            res.end();
        })
    }
    showSignup(req, res) {
        fs.readFile('views/signup.html', 'utf-8', (err, stringHTML) => {
            res.write(stringHTML);
            res.end();
        })
    }
    showSignin(req, res) {
        fs.readFile('views/signin.html', 'utf-8', (err, stringHTML) => {
            res.write(stringHTML);
            res.end();
        })
    }
    showAll(req, res) {
        fs.readFile('views/index.html', 'utf-8', (err, stringHTML) => {
            res.write(stringHTML);
            res.end();
        })
    }
    // static async addHomestay(req, res) {
    //     if (req.method === 'GET') {
    //         let html = await BaseController.readFileData('./src/views/index.html');
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.write(html);
    //         res.end();
    //     } else {
    //         let data = '';
    //         req.on('data', chunk => data += chunk);
    //         req.on('end', async () => {
    //             data = qs.parse(data);
    //             let {name, age,height, nationality, clb } = data;
    //             await this.PlayersModel.addPlayers(name, +age, +height, +nationality, +clb).catch(err => {
    //                 res.writeHead(301, {location: '/'});
    //                 res.end();
    //             });
    //             res.writeHead(301, {location: '/'});
    //             res.end();
    //         })
    //
    //     }
    // }

}

export default new HomeController();
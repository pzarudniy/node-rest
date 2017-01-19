//import * as http from "http";
//import * as url from "url";
import * as express from "express";
import * as bodyParser from "body-parser";


class Server {
    public app: express.Application;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.app = express();

        this.app.listen(3000);


    }
}
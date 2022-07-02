import { Controller, Get } from "@nestjs/common";

@Controller("/app")

 export class AppController{
    @Get("/ozan")
    getRootRoute(){
        return "hi there!"
    }

    @Get("/hey")
    getByeThere(){
        return "hi theree"
    }
}
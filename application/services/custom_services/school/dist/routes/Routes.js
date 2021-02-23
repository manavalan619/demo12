"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const studentController_1 = require("../controller/studentController");
class Routes {
    constructor() {
        this.student = new studentController_1.studentController();
    }
    routes(app) {
        app.route('/health/entity-service').get((req, res) => {
            res.status(200).send({
                status: 'up'
            });
        });
        app.route('/student').get(this.student.GpGetAllValues);
        app.route('/student').post(this.student.GpCreate);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=Routes.js.map
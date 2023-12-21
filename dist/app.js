"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("../dist/app/modules/student/student.route");
const app = (0, express_1.default)();
const port = 3000;
//parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routers
app.use('/api/v1/students', student_route_1.StudentRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
console.log(process.cwd());
//C:\ProjectsWithSujonBhai\Programme-hero-project\first-project/.env
//C:\ProjectsWithSujonBhai\Programme-hero-project\first-project\src\.env

'use strict'
const Route = use('Route')

Route.post('/login','AuthController.login')
Route.post('/users','UserController.store')
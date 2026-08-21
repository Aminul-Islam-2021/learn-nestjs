import { Controller, Get } from '@nestjs/common';

// creates a user route as /user
@Controller('user')
export class UserController {
  // req method
  @Get()
  // req controller
  getUser() {
    return 'User data fetched successfully';
  }
}

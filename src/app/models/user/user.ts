import { Model } from '../model/model';

export class User extends Model {

  username: string;
  password: string;

  firstname: string;
  lastname: string;

  fullname: string;

  token: string;

  reset_password: boolean;

  is_administrator: boolean;
}
